import {createContext, useState, useContext} from 'react';


const CartContext = createContext({
    cart: [],
    addProductToCart: () => {}
})

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (data) => {
        setCart([...cart, {...data}])
    }

    return <CartContext.Provider value={{
        cart, addProductToCart
    }}>{children}</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext)