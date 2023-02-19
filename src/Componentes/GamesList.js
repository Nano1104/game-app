import React from 'react';

export default function GamesList({games}) {

    return(
        games.map(game => {
            const [id, title, genre] = game
            return(
                <div key={id} className="d-flex flex-column align-items-center text-warning">
                    <small>{id}</small>
                    <h3>{title}</h3>
                    <strong>{genre}</strong>
                </div>
            )
        })
    )
}