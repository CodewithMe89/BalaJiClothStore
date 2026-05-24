import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <h1>BalaJi Cloth</h1>
            <nav>
                <NavLink to="/">Product</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>
    )
}

export default Nav