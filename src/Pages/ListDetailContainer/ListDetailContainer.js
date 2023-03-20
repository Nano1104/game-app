import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import getGames from '../../service/getGames';

import GameDetail from '../../Componentes/GameDetail/GameDetail';
import Loading from '../../Componentes/Loading/Loading';

export default function ListDetailContainer() {
    const { gameName } = useParams()
    const [game, setGame] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getGames()
            .then(res => {
                //gets the same game as the one from the url that comes from useParams
                const currentGame = res.find(game => game.title === gameName) 
                setGame(currentGame)
            })
            .finally(() => {
                setLoading(true)
            })
    }, [])

    return(
        <>
            {
                loading
                ?
                <GameDetail game={game} />
                :
                <Loading />
            }
        </>
    )
}