import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context';//CONTEXT
import { FaShoppingCart } from "react-icons/fa";
//STYLES
import "./cart.css";
//COMPONENTS
import GameCart from '../GameCart/GameCart';

export default function Cart() {
    const [alert, setAlert] = useState(false)
    const { cart, emptyCart, totalPrice } = useContext(CartContext)
    const [games, setGames] = useState(cart)

    useEffect(() => {
        setGames(cart)
    }, [cart])

    return(
        <>
        {
            cart.length == 0 
                ? 
                <div className="emptyCart-cotainer">
                    <h3 className="emptyCart-cotainer__h3">SORRY YOUR CART IS EMPTY</h3>
                    <FaShoppingCart className="emptyCart-cotainer__icon" />
                </div>
                : 
                <>
                <br />
                <div className="gamesCartContainer">
                    {
                        games.map(game => <GameCart game={game} />)
                    }
                </div>
                <hr className="cart-hr" />
                <div className='finishPurchase-container'>
                    <i><h3>Total Price: ${totalPrice()}</h3></i>
                    <button className="btn-finishPurchase" onClick={() => setAlert(true)}>FINISH PURCHASE</button>
                    <button onClick={emptyCart} className="btn-emptyCart">ERRASE CART</button>
                </div>
                {
                    alert
                    ? 
                    <div className='cart-alert'>
                        <span className="text-center">ARE YOU SURE YOU WANT TO FINISH YOUR PURCHASE?</span>
                        <div>
                            <Link to="/finishpurchase" className='btn btn-success' onClick={emptyCart}>YES</Link>
                            <button className="btn btn-danger" onClick={() => setAlert(false)}>NO</button>
                        </div>
                    </div>
                    : ''
                }
                </>
        }
        </>
    )
}