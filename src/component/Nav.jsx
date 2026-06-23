import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <header className="wrapper">
            <NavLink to="/"><h1>BalaJi Cloth</h1></NavLink>
            <nav className="menu">
                <NavLink to="/products">Product</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>
    )
}

export default Nav