import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import CategoryProvider from './contexts/categoryContext'
import ProductProvider from './contexts/productContext'
import AuthProvider from './contexts/authContext'
import CartProvider from './contexts/cartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CategoryProvider>
          <CartProvider>
            <ChakraProvider>
              <Router>
                <App />
              </Router>
            </ChakraProvider>
          </CartProvider>
        </CategoryProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
)
