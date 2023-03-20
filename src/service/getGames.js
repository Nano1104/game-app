import React from "react"
import { amounts } from './amounts'

const api = 'https://www.freetogame.com/api/games?platform=pc'


/* var generator = require('random-array-generator');
console.log(generator.randomArray({min: 8, max: 23, elements: 10})); */

export default function getGames() {
    return fetch(api)
            .then(res => res.json())
            .then(res => { //371 the amount of games
                const dataGames = res.map(game => {
                    const { id, title, genre, thumbnail, short_description, platform, release_date } = game
                    return { id, title, genre, thumbnail, short_description, platform, release_date }
                })
                return dataGames
            })
}
