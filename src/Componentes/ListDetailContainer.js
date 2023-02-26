import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import getGames from '../service/getGames';

import GameDetail from './GameDetail';

export default function ListDetailContainer() {
    const [game, setGame] = useState(null)
    const { gameName } = useParams()

    useEffect(() => {
        getGames()
            .then(res => {
                const currentGame = res.find(game => game[1] === gameName) //gets the same game as the one from the url
                setGame({
                        id: currentGame[0], 
                        title: currentGame[1], 
                        genre: currentGame[2], 
                        img: currentGame[3],
                        description: currentGame[4],
                        platform: currentGame[5],
                        releaseDate: currentGame[6]
                    }) //converts the arr to object
            })
    }, [])

    return(
        <>
            <GameDetail {...game} />
        </>
    )
}