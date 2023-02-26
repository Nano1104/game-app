import React from 'react';

export default function GameDetail({ id, title, genre, img, description, platform, releaseDate}) {
    const styles = {width: '50%'}

    return(
        <>
            <div className="gameDetail container text-center border border-primary" style={styles}>
                <p>Game Id: <small>{id}</small></p>
                <img src={img} />
                <h3>{title}</h3>
                <strong>{genre}</strong><br />
                <i>{description}</i>
                <p>Release Date: <strong>{platform}</strong></p>
                <p>Release Date: <strong>{releaseDate}</strong></p>
                <button>BUY GAME</button>
            </div>
        </>
    )
}