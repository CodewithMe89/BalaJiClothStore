import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './component/Product.jsx'
import Cart from './component/Cart.jsx'
import Profile from './component/Profile.jsx'
import Home from './component/Home.jsx'
import ErrorHandling from './component/ErrorHandling.jsx'
import ProductPage from './component/ProductPage.jsx'
import {Store} from './component/store.js'
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorHandling />,
    children: [
      {element:<Home />,
      index: true}
      ,{
        path: "/products",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/products/:categoryName",
        element: <Product />
      },
      {path:"/products/product/:productName",
      element: <ProductPage />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>
  </StrictMode>
)
