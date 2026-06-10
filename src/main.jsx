import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './component/Product.jsx'
import Cart from './component/Cart.jsx'
import Profile from './component/Profile.jsx'
import Home from './component/Home.jsx'
import ErrorHandling from './component/ErrorHandling'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorHandling />,
    children: [
      {element:<Home />,
      index: true}
      ,{
        path: "/product",
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
        path: "/product/:categoryName",
        element: <Product />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>
)
