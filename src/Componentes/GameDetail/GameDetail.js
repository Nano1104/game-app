import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/Context'; //CONTEXT
//STYLES 
import './gamedetail.css';
//COMPONENTS
import Counter from '../Counter/Counter';

export default function GameDetail({game}) {
    const { id, title, genre, thumbnail, short_description, platform, release_date } = game
    const navigate = useNavigate(); //to use navigate(-1)
    const { isInCart } = useContext(CartContext)
    
    const counter = {marginTop: '20px'}
    const span = {color: 'white', fontWeight: '100'}

    const handleBack = () => {
        navigate(-1)
    }

    return(
        <>
            <div className="gameDetail">
                <div className='gameDetail__img-container'>
                    <i><span>Price: $10</span></i>
                    <img src={thumbnail} style={{border: '2px solid black'}} />
                    {
                        !isInCart(id)
                            ? <Counter style={counter} img={thumbnail} game={game} />
                            : <p>Added to cart!</p>
                    }
                    <button className='gameDetail__img-btnBack' onClick={handleBack}>BACK TO GAMES</button>
                </div>
                <div className="gameDetail__description-container">
                    <span>Game N°{id}</span>
                    <i>{genre}</i>
                    <hr />
                    <h3>{title}</h3>
                    <span>About</span>
                    <p>{short_description}</p>
                    <span>Platform available: <span style={span}>{platform}</span></span>
                    <span>Release Date: <span style={span}>{release_date}</span></span>
                </div>
            </div>
        </>
    )
}