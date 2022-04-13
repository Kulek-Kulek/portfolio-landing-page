import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button from '../../SharedElements/Button/Button';
import Input from '../../SharedElements/Input/Input';
import Spinner from '../../SharedElements/Spinner/Spinner';
import InfoModal from '../../SharedElements/InfoModal/InfoModal';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './ContactForm.css';

const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);


    useEffect(() => {
        if (messageSent) {
            const infoModal = document.querySelector('.message-sent');

            setTimeout(() => {
                infoModal.classList.add('message-sent--active');
            }, 200);
            // setMessageSent(false);
        }
    }, [messageSent]);

    const validationSchema = () => yup.object().shape({
        email: yup
            .string()
            .required('Podaj swój email.')
            .email('Niepoprawny adres email.'),
        name: yup
            .string()
            .required('Podaj swoje imię.')
            .min(3, 'Imię musi mieć co najmniej trzy znaki.'),
        surname: yup
            .string()
            .min(3, 'Nazwisko musi mieć co najmniej trzy znaki.'),
        mobile: yup
            .string()
            .required('Podaj swój telefon.')
            .min(6, 'Numer telefonu musi mieć 6 cyfr.'),
        // .max(6, 'Numer telefonu musi mieć 6 cyfr.'),
        textarea: yup
            .string().min(3, 'Wpisz co najmniej 3 znaki.')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            mobile: '',
            textarea: ''
        },
        validationSchema,
        // onSubmit: async values => {

        // }
    });

    const sendRequestHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitError(false);
        setMessageSent(false);
        try {
            const response = await fetch('https://maria-register.herokuapp.com/api/contact/okayProjects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formik.values.email,
                    name: formik.values.name,
                    surname: formik.values.surname,
                    comment: formik.values.textarea,
                    mobile: formik.values.mobile
                })
            });
            const responseData = await response.json();

            responseData.message === 'Wiadomość wysłana' && setMessageSent(true);
            responseData.message === 'Wiadomość wysłana' && setLoading(false);
        }
        catch (err) {
            setSubmitError(true);
            setLoading(false);
        }
    }

    const cancelContactFormHandler = () => {
        const contactForm = document.querySelector('.contact-form');
        contactForm.classList.remove('contact-form--active');
    }

    const errorModalHideHandler = () => {
        setSubmitError(false);
    }

    const portalContent = <div className='contact-form'>
        {loading ? <Spinner /> :
            <>
                <h2 className="contact-form__heading">Contact me</h2>
                <form className="contact-form__container" onSubmit={sendRequestHandler}>
                    <div className="contact-form__row100">
                        <div className="contact-form__col">
                            <div className="contact-form__inputBox">
                                <Input
                                    inputType='input'
                                    type="text"
                                    required="required"
                                    name='name'
                                    class='contact-form__input'
                                    value={formik.values.name}
                                    change={formik.handleChange}
                                />
                                <span className="contact-form__text">First Name</span>
                                <span className='contact-form__line'></span>
                            </div>
                        </div>
                        <div className="contact-form__col">
                            <div className="contact-form__inputBox">
                                <Input
                                    inputType='input'
                                    type="text"
                                    required="required"
                                    name='surname'
                                    class='contact-form__input'
                                    value={formik.values.surnamename}
                                    change={formik.handleChange}
                                />
                                <span className="contact-form__text">Last Name</span>
                                <span className='contact-form__line'></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form__row100">
                        <div className="contact-form__col">
                            <div className="contact-form__inputBox">
                                <Input
                                    inputType='input'
                                    type="email"
                                    required="required"
                                    name='email'
                                    class='contact-form__input'
                                    value={formik.values.email}
                                    change={formik.handleChange}
                                />
                                <span className="contact-form__text">Email</span>
                                <span className='contact-form__line'></span>
                            </div>
                        </div>
                        <div className="contact-form__col">
                            <div className="contact-form__inputBox">
                                <Input
                                    inputType='input'
                                    type="number"
                                    required="required"
                                    name='mobile'
                                    class='contact-form__input'
                                    value={formik.values.mobile}
                                    change={formik.handleChange}
                                />
                                <span className="contact-form__text">Mobile</span>
                                <span className='contact-form__line'></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form__row100">
                        <div className="contact-form__col">
                            <div className="contact-form__inputBox contact-form__textarea-wrapper">
                                <Input
                                    type="text"
                                    required="required"
                                    class='contact-form__textarea'
                                    name='textarea'
                                    value={formik.values.textarea}
                                    change={formik.handleChange}
                                />
                                <span className="contact-form__text">Type your message here</span>
                                <span className='contact-form__line'></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form__row100">
                        <div className="contact-form__button-wrapper">
                            <Button
                                type='text'
                                text='Cancel'
                                class='contact-form__button'
                                click={cancelContactFormHandler}
                            />
                            <Button
                                type='submit'
                                text='Send'
                                class='contact-form__button'
                            />
                        </div>
                    </div>
                </form>
                {
                    (submitError || messageSent) && <InfoModal
                        class='message-sent--active'
                        messageHeading={!messageSent ? "Uppps - something's wrong." : 'One, two, three - go!'}
                        mainMessage={!messageSent ? "Try again later" : "Thanks for your message. You should be receiving a confirmation email right now. Hasn't arrived yet? Please check your spam folder. I'll get back to you asap."}
                        errorModalHide={errorModalHideHandler}
                    />
                }
            </>
        }
    </div>
    return ReactDOM.createPortal(portalContent, document.getElementById('contact-form'));
};

export default ContactForm;