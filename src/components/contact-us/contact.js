import React from "react";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact">
        <div className="container">
            <h3>Contact Us</h3>
            <div className="logo">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp />
                </a>
            </div>
        </div>
        </section>
    );
};

export default Contact;

