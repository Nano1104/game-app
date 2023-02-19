import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getGames from '../service/getGames';

import GamesList from './GamesList.js';

export default function ListCategoryContainer () {
    const { name } = useParams()
    const [games, setGames] = useState([])
    
    useEffect(() => {
      getGames().then(res => {
        const gamesWithRightCategory = res.filter(game => game[2] === name)
        setGames(gamesWithRightCategory)
      })

      console.log(games)
    }, [name])

    return (
      <GamesList games={games} />
    )
  }

        