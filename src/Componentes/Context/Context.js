import React, { useState } from 'react';

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const cartQuantity = () => {
        return cart.reduce((acc, game) => acc + game.amount, 0)
    }

    const addGame = (game) => {
        setCart([...cart, game])
    }

    const emptyCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(game => game.id === id)
    }

    const reduceAmount = (game) => {
        game.amount -= 1
        setCart([...cart])
    } 

    const removeGame = (id) => {
        let i = cart.findIndex(game => game.id === id)
        cart.splice(i, 1)
        setCart([...cart])
    }

    const totalPrice = () => {
        return cart.reduce((acc, game) => acc + (game.amount * 10), 0)
    }

    return(
        <CartContext.Provider value={{cart,
                                      addGame,
                                      emptyCart,
                                      isInCart,
                                      totalPrice,
                                      reduceAmount,
                                      removeGame,
                                      cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}