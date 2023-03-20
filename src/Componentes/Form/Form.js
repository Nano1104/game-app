import React, { useState } from 'react';
//REACT ICONS
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
//STYLE 
import './form.css';

export default function Form() {
    const [state, setState] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="form-container">
            <div className="form-container__div-input">
                <input type="text" placeholder='Full Name' className="input"></input>
                <input type="email" placeholder="E-mail" className="input"></input>
                <textarea className="div-input__textarea input" placeholder="Message"></textarea>
                <button className="div-input__button">Contact Us</button>
            </div>
            <div className="form-container__div-text">
                <div>
                    <div>
                        <h3>Email</h3>
                        <p style={{color: 'var(--orange)'}}>vascogames@gmail.com</p>
                    </div>
                    <div>
                        <h3>Based In</h3>
                        <p style={{color: 'var(--orange)'}}>Buenos Aires, Argentina</p>
                    </div>
                </div>
                <div className="div-text__icons">
                    <FaFacebookF role="button" id="facebook" className="icon"/>
                    <BsInstagram role="button"id="instagram" className="icon"/>
                    <BsTwitter role="button"id="twitter" className="icon"/>
                </div>
            </div>
        </form>
    )
}