import React from 'react';
import control from '../images/control.png';
import NavBar from './NavBar'

export default function Home() {
    return (
        <>
            <img src={control} className='control'/>
            <div className='titleContainer'>
                <h1 id='title-1'>Vasco</h1>
                <h1 id='title-2'>Games</h1>
                <p>Video Game Shop</p>
            </div>
        </>
    )
}