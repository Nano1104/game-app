import React from 'react';
import img from '../../images/favicon.ico.ico'
//STYLES
import './finishPurchase.css';

export default function FinishPurchase() {
    
    return(
        <>
            <h1 className="finishPurchase__title">YOU PURCHASE HAS FINISHED SUCCESSFULLY</h1>
            <p className='finishPurchase__p'>May you enjoy!!<img src={img} style={{width: '70px'}} /></p>
        </>
    )
}

