import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <NavLink to="/"><h1>BalaJi Cloth</h1></NavLink>
            <nav>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>
    )
}

export default Nav