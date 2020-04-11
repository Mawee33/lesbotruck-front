import React from 'react';
import "./../styles/contact.css";

export default function Contact() {
    return (
        <div className="contact-all">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-intro">N’hésitez pas à nous contacter pour toute question ou suggestion.</p>
        
        <div className="contact-par">
            <div className="contact-data">
                <h2>Contactez-nous</h2>
                <p>Association Lesbotruck+</p>
                <p>Paris</p>
                <p>FRANCE</p>
                <p>lesbotruck@gmail.com</p>
                </div>

            <div className="contact-formular">
                <h2>Envoyez-nous un message</h2>
                <form action="POST" className="formular-cases">
                    <div className="formular-case">
                    <label htmlFor="name" required>Nom</label>
                    <br/>
                    <input type="text" name="name" id="name"/>
                    </div>

                    <div className="formular-case">
                    <label htmlFor="email" required>Email</label>
                    <br/>
                    <input type="text" name="email" id="email"/>
                    </div>

                    <div className="formular-case">
                    <label htmlFor="message" required>Message</label>
                    <br/>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>

                    <div className="formular-case">
                    <button className="contact-button">Envoyer</button>
                    </div>
                </form>
            </div>



        </div>

        </div>
    )
}
