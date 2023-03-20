import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../Context/Context';
//STYLES
import './gamecart.css';

export default function GameCart({game}) {
    const {id, title, genre, thumbnail, short_description, platform, release_date, amount} = game
    const { removeGame, reduceAmount } = useContext(CartContext)

    return(
        <div className="gameCart">
            <span className="gameCart__id">Game Id: {id}</span>
            <img src={thumbnail} />
            <div className="gameCart-description">
                <p className='gameCart-description__p'>{title}</p>
                <div className="gameCart-description__div">
                    {
                        amount > 1
                        ? 
                        <>
                            <p>Amount: {amount}</p>
                            <button onClick={() => reduceAmount(game)}>-</button>
                        </>
                        : <FaTrash onClick={() => removeGame(id)} className="trash-bin" />
                    }
                </div>
            </div>
        </div>
    )
}