import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GamesList({games}) {
    const [display, setDisplay] = useState()
    const img = 'https://www.freetogame.com/g/57/thumbnail.jpg'
    
    const handleHover = () => {
        setDisplay('block')
        console.dir('funciona')
    }

    useEffect(() => {
        setDisplay('none')
    }, [])

    return(
        games.map(game => {
            const [id, title] = game
            return(
                <div key={id} className="gameCard">
                    <img src={img} style={{width: '257px', height: '162px'}}/>
                    <h5 style={{fontSize: '20px'}}>{title}</h5>
                    <div className="gameCardHover" style={{display: {display}}}>
                        <Link to={`/detail/${title}`} className='gameCardLink'>SEE GAME</Link>
                    </div>
                </div>
            )
        })
    )
}