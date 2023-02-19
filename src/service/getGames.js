import React from "react"
const api = 'https://www.freetogame.com/api/games'

export default function getGames() {
    return fetch(api)
            .then(res => res.json())
            .then(res => {
                const dataGames = res.map(game => {
                    const { id, title, genre } = game
                    return [id, title, genre]
                })
                return dataGames
            })
}


/* export const arrayImages = [
    'https://www.freetogame.com/g/540/thumbnail.jpg',
    'https://www.freetogame.com/g/521/thumbnail.jpg',
    'https://www.freetogame.com/g/517/thumbnail.jpg',
    'https://www.freetogame.com/g/516/thumbnail.jpg',
    'https://www.freetogame.com/g/508/thumbnail.jpg',
    'https://www.freetogame.com/g/345/thumbnail.jpg',
    'https://www.freetogame.com/g/475/thumbnail.jpg',
    'https://www.freetogame.com/g/523/thumbnail.jpg',
    'https://www.freetogame.com/g/340/thumbnail.jpg',
    'https://www.freetogame.com/g/445/thumbnail.jpg',
    'https://www.freetogame.com/g/515/thumbnail.jpg',
    'https://www.freetogame.com/g/9/thumbnail.jpg',
    'https://www.freetogame.com/g/466/thumbnail.jpg',
    'https://www.freetogame.com/g/452/thumbnail.jpg',
    'https://www.freetogame.com/g/21/thumbnail.jpg',
    'https://www.freetogame.com/g/23/thumbnail.jpg',
    'https://www.freetogame.com/g/57/thumbnail.jpg',
    'https://www.freetogame.com/g/449/thumbnail.jpg',
    'https://www.freetogame.com/g/212/thumbnail.jpg',
    'https://www.freetogame.com/g/217/thumbnail.jpg'
  ] */