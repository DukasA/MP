import React, { useRef} from 'react';
import styles from './ContactForm.module.scss';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0imtoki', 'template_22boe7j', form.current, 'ExUuKVPtGTgtrhRlv');
        
        e.target.reset();
    };


    return (
        <form ref={form} onSubmit={sendEmail} >
        <div className={styles.formInner}>
            <h1>Contact me</h1>
            <input type="text" placeholder="Name" name='name'/>
            <input type="email" placeholder="Email" name='email'/>
            <textarea placeholder="Message..." rows="5" name='message'></textarea>
            <button type="submit">Submit</button>
        </div>
        </form>
    )
}

export default ContactForm;