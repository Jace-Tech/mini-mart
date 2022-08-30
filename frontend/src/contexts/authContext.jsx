// AuthContext

import { createContext, useContext, useState } from "react";

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null)

    return (
        <AuthContext.Provider value={{ auth }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuthContext = () => useContext(AuthContext)