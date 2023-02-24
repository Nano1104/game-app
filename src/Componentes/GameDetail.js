import React from 'react';

export default function GameDetail({ id, title, genre }) {
    const styles = {width: '50%'}

    return(
        <>
            <div className="gameDetail container text-center border border-primary" style={styles}>
                <small>{id}</small>
                <h3>{title}</h3>
                <strong>{genre}</strong>
            </div>
        </>
    )
}