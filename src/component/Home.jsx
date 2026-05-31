import { NavLink } from "react-router-dom"
import { CiShop } from "react-icons/ci"
const Home = () => {
    return (
        <section>
            <div className="Image-Container">
                <img src="https://i.pinimg.com/736x/52/27/a4/5227a4b3c6c2999c5850c10dc9f39b8b.jpg" alt="HomeShop" />
                <NavLink to="/product"><CiShop /></NavLink>
            </div>
        </section>
    )
}

export default Home