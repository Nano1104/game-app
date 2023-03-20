import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './listCategoryContainer.css';
import useGames from '../../Hooks/useGames';

import { CartContext } from '../../Componentes/Context/Context';

//COMPONENTS
import GamesList from '../../Componentes/GameList/GamesList';
import Loading from '../../Componentes/Loading/Loading';

export default function ListCategoryContainer () {
    const { gameCategory } = useParams()
    const { loading, games } = useGames(gameCategory) //custom hook

    return (
      <>
        {
          loading 
          ?
          <div className='gameList'>
            <GamesList games={games} />
          </div> 
          : 
          <Loading />
        }
      </>
    )
  }

        