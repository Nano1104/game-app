import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//STYLES
import './counter.css';
//CONTEXT
import { CartContext } from '../Context/Context';

export default function Counter({game}) {
    const [count, setCount] = useState(0)
    const { cart, addGame } = useContext(CartContext)

    const handlePlus = () => {
        setCount(count + 1)
    }

    const handleLess = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        if(count != 0) {
            addGame({...game, amount: count})
        }
    }
    
    return(
        <>
            <div className="counter-container">
                <div className="counter-container__div">
                    <input value={count} className="text-center"></input>
                    <button onClick={handlePlus} className='counter-container__btnPlus'>+</button>
                    <button onClick={handleLess} className='counter-container__btnLess'>-</button>
                </div>
                <button className='counter-container__btnAdd' onClick={handleAdd}>ADD</button>
            </div>
        </>
    )
}