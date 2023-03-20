import React, { useEffect, useState } from 'react';
import getGames from '../service/getGames';

export default function useGames(category) {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      getGames()
      .then(res => {
        const gamesWithRightCategory = res.filter(game => game.genre === category)
        setGames(gamesWithRightCategory)
      })
      .finally(() => {
        setLoading(true)
      })
    }, [category])


    /* useEffect(() => {
      getGames()
      .then(res => {
        const gamesWithRightCategory = res.filter(game => game[2] === category)
        setGames(gamesWithRightCategory)
      })
      .finally(() => {
        setLoading(true)
      })
    }, [category]) */

    return { loading, games }
}