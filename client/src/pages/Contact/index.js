import React from 'react';
import styles from './Contact.module.scss';
import ContactForm from '../../components/ContactForm/index';
import { Title } from '../../utils/newTitle';

function Contact() {
    Title('Contact Page');
    return (
        <div className={styles.contact}>
            <ContactForm/>
        </div>
    )
}

export default Contact;
