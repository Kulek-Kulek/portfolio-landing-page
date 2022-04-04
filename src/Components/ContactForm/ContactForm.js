
import ReactDOM from 'react-dom';

import Button from '../../SharedElements/Button/Button';
import Input from '../../SharedElements/Input/Input';

import './ContactForm.css';

const ContactForm = () => {

    const cancelContactFormHandler = () => {
        const contactForm = document.querySelector('.contact-form');
        contactForm.classList.remove('contact-form--active');
    }

    const portalContent = <div className='contact-form'>
        <h2 class="contact-form__heading">Contact me</h2>
        <form class="contact-form__container">
            <div class="contact-form__row100">
                <div class="contact-form__col">
                    <div class="contact-form__inputBox">
                        <Input inputType='input' type="text" required="required" class='contact-form__input' />
                        <span className="contact-form__text">First Name</span>
                        <span className='contact-form__line'></span>
                    </div>
                </div>
                <div class="contact-form__col">
                    <div class="contact-form__inputBox">
                        <Input inputType='input' type="text" required="required" class='contact-form__input' />
                        <span className="contact-form__text">Last Name</span>
                        <span className='contact-form__line'></span>
                    </div>
                </div>
            </div>
            <div class="contact-form__row100">
                <div class="contact-form__col">
                    <div class="contact-form__inputBox">
                        <Input inputType='input' type="email" required="required" class='contact-form__input' />
                        <span className="contact-form__text">Email</span>
                        <span className='contact-form__line'></span>
                    </div>
                </div>
                <div class="contact-form__col">
                    <div class="contact-form__inputBox">
                        <Input inputType='input' type="number" required="required" class='contact-form__input' />
                        <span className="contact-form__text">Mobile</span>
                        <span className='contact-form__line'></span>
                    </div>
                </div>
            </div>
            <div class="contact-form__row100">
                <div class="contact-form__col">
                    <div class="contact-form__inputBox contact-form__textarea-wrapper">
                        <Input type="text" required="required" class='contact-form__textarea' />
                        <span className="contact-form__text">Type your message here</span>
                        <span className='contact-form__line'></span>
                    </div>
                </div>
            </div>
            <div class="contact-form__row100">
                <div class="contact-form__button-wrapper">
                    <Button type='text' text='Cancel' class='contact-form__button' click={cancelContactFormHandler} />
                    <Button type='submit' text='Send' class='contact-form__button' />
                </div>
            </div>
        </form>
    </div>
    return ReactDOM.createPortal(portalContent, document.getElementById('contact-form'));
};

export default ContactForm;