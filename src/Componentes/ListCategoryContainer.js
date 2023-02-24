import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getGames from '../service/getGames';

import GamesList from './GamesList.js';

export default function ListCategoryContainer () {
    const { gameCategory } = useParams()
    const [games, setGames] = useState([])
    
    useEffect(() => {
      getGames().then(res => {
        const gamesWithRightCategory = res.filter(game => game[2] === gameCategory)
        setGames(gamesWithRightCategory)
      })
    }, [gameCategory])

    return (
      <>
        <div className='gameList'>
          <GamesList games={games} />
        </div>
      </>
    )
  }

        