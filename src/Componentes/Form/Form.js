import React, { useState } from 'react';
//REACT ICONS
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
//STYLE 
import './form.css';

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        if(name == '') {
            e.preventDefault()
            alert('sorry you must fill name input')
        }
        if(email == '') {
            alert('sorry you must fill email input')
            e.preventDefault()
        }
    }

    const handleValidName = (e) => {
        setName(e.target.value)
    }

    const handleValidEmail = (e) => {
        setEmail(e.target.value)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="form-container">
            <div className="form-container__div-input">
                <input type="text" placeholder='Full Name' className="input" onChange={handleValidName}></input>
                <input type="email" placeholder="E-mail" className="input" onChange={handleValidEmail}></input>
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