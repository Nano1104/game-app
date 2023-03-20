import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './gameList.css';

export default function GamesList({games}) {
    /* const [hover, setHover] = useState('none') */


    return(
        games.map(game => {
            const {id, title, thumbnail} = game
            return(
                <>
                    <div key={id} className="gameCard" id={id}>
                        <img src={thumbnail} style={{width: '257px', height: '162px'}}/>
                        <h5 style={{fontSize: '20px'}}>{title}</h5>

                        <div className="gameCardHover">
                            <Link to={`/detail/${title}`} className='gameCardLink'>SEE GAME</Link>
                        </div>
                    </div>
                </>
            )
        })
    )
}

