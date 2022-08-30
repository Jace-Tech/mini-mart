import { createContext, useContext, useEffect, useState } from "react";
import { getAllCategories } from "../api/category";


export const CategoryContext = createContext(null)

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState(null)

    const getCategories = async () => {
        const data = await getAllCategories()
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <CategoryContext.Provider value={{ categories }}>
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryProvider

export const useCategories = () => useContext(CategoryContext)