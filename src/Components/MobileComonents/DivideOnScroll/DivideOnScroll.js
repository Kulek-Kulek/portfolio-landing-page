import { useEffect } from 'react';
import { divideSlides } from './divideSlides';

import Section from '../../../SharedElements/Section/Section';

import video from '../../../Assets/Video/code.mov';

import './DivideOnScroll.css';

const DivideOnScroll = props => {

    useEffect(() => {
        window.addEventListener('scroll', divideSlides);
        return () => window.removeEventListener('scroll', divideSlides);
    }, []);

    return (
        <Section class='divideonscroll' id='divide-on-scroll'>
            <div className='divideonscroll__wrapper'>
                <div className='divideonscroll__video-wrapper divideonscroll__video-wrapper1' id='divideonscroll-video-wrapper-one'>
                    <video src={video} autoPlay muted loop className='divideonscroll__video divideonscroll__video1'></video>
                </div>
                <div className='divideonscroll__video-wrapper divideonscroll__video-wrapper2' id='divideonscroll-video-wrapper-two'>
                    <video src={video} autoPlay muted loop className='divideonscroll__video divideonscroll__video2'></video>
                </div>
                <div className='divideonscroll__text-content' id='divideonscroll-text-content'>
                    <h2 className='divideonscroll__heading'>I believe...</h2>
                    <p className='divideonscroll__text'>As a strong believer in lifelong learning, I am perpetually fueled by the inner need for constant developing and improving.
                        Naturally curious, enjoying bringing ideas to life in the browser and creating applications from scratch. Passionate, value-driven
                        professional with a customer oriented approach. Blend technology and exceptional communication skills with
                        flexibility towards customers to prioritize and manage multiple projects within specifications and budget restrictions. How far am I? Just a click away.</p>
                </div>
            </div>

        </Section>
    );
}

export default DivideOnScroll;