import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { getAllProducts } from "../api/product";

// create a react context
// ProductContext
const ProductContext = createContext()


// create a context provider 
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const handleGetProducts = async () => {
        const result = await getAllProducts()
        if("error" in result) return 
        setProducts(result)
    }

    useEffect(() => {
        handleGetProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ name: "Jace", products }}>
            { children }
        </ProductContext.Provider>
    )
}

export default ProductProvider

// create a custom hook 
export const useProductContext = () => useContext(ProductContext)