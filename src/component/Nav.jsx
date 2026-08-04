import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
    const cartItems = useSelector(store => store.cart)

    return (
        <header className="wrapper">
            <NavLink to="/" className="logo">
                <h1>BalaJi Cloth</h1>
            </NavLink>
            <nav className="menu">
                <NavLink
                    to="/products"
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Products
                </NavLink>

                <NavLink
                    to="/cart"
                    className={({ isActive }) => `cart-link ${isActive ? "active" : ""}`}>
                    <FaShoppingCart />
                    {cartItems.length > 0 && (
                        <span className="cart-count">
                            {cartItems.length}
                        </span>
                    )}
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Profile
                </NavLink>
            </nav>
        </header >
    )
}

export default Nav