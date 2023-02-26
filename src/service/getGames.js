import React from "react"
const api = 'https://www.freetogame.com/api/games'

export default function getGames() {
    return fetch(api)
            .then(res => res.json())
            .then(res => {
                const dataGames = res.map(game => {
                    const { id, title, genre, thumbnail, short_description, platform, release_date } = game
                    return [id, title, genre, thumbnail, short_description, platform, release_date]
                })
                return dataGames
            })
}
