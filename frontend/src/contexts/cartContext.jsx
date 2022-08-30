import { createContext, useContext } from "react";

// CartContext
const CartContext = createContext(null)


const CartProvider = ({ children }) => {
    const handleAddToCart = (id) => {
        
    }

    return (
        <CartContext.Provider value={{ handleAddToCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider

export const useCartContext = () => useContext(CartContext)