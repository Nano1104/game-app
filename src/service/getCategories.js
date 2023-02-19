const api = 'https://www.freetogame.com/api/games'

export default function getCategories() {

    return fetch(api)
            .then(res => res.json())
            .then(res => {
                const categories = []
                res.map(game => {
                    const { genre } = game
                    let index = categories.findIndex(category => category === genre)
                    if(index < 0) {
                        categories.push(genre)
                    }
                })
                return categories
            })
}


