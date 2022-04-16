import { useState, useCallback, useRef, useEffect } from "react";


export const useHttpClient = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const activeHttpRequest = useRef([]);

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        const httpAbortCtrll = new AbortController();
        activeHttpRequest.current.push(httpAbortCtrll);
        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrll.signal
            });

            const responseData = await response.json();
            activeHttpRequest.current = activeHttpRequest.current.filter(reqCtrl => reqCtrl !== httpAbortCtrll);

            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setLoading(false);
            return responseData;
        } catch (err) {
            setError(err.message);
            setLoading(false);
            throw err;
        }
    }, []);
    const clearError = () => {
        setError(null);
    }

    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
        }
    }, []);

    return { loading, error, sendRequest, clearError }
}