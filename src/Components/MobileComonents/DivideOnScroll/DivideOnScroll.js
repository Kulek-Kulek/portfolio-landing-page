import { useEffect } from 'react';
import { divideSlides } from './divideSlides';

import Section from '../../../SharedElements/Section/Section';

import video from '../../../Assets/Video/code.mov';

import './DivideOnScroll.css';

const DivideOnScroll = props => {

    useEffect(() => {
        divideSlides();
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
                    <h2 className='divideonscroll__heading'>Scroll down and up</h2>
                    <p className='divideonscroll__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat porro tempora a fugit soluta. Et repudiandae magni harum itaque quaerat qui voluptatum officiis commodi, ipsam necessitatibus inventore recusandae dolore temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam vitae earum doloremque culpa excepturi, omnis, expedita repellat est atque quo praesentium nesciunt, animi ad recusandae nemo. Consectetur, similique vero!</p>
                </div>
            </div>

        </Section>
    );
}

export default DivideOnScroll;