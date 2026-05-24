import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom'
const Router = createBrowserRouter([
  {
    path:"/",
    element:<Product />,
    children:[
      {path:"/cart",
      element:<Cart />},
      {path:"/profile",
    element:<Profile />}
    ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
