import React from 'react';
//STYLE
import './contact.css';
//COMPONENTS
import Form from '../../Componentes/Form/Form';

export default function ContactItem() {

    return(
        <>
            <div id="form">
                <div className="contact-img"></div>
                <div className="form__h1-form">
                    <h1 className="contact-title">CONTACT US</h1>
                    <Form />
                </div>
            </div>
        </>
    )
}