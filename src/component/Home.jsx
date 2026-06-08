import { NavLink } from "react-router-dom"
import { CiShop } from "react-icons/ci"
const Home = () => {
    return (<>
        <section>
            <div className="Image-Container">
                <img src="https://i.pinimg.com/736x/59/fb/cc/59fbcc4a14f1fb10769bd27a1fdd9e12.jpg" alt="HomeShop" />
                <NavLink to="/product"><CiShop /></NavLink>
            </div>
        </section>
        <section>
            <h3 className="category-head">Popular Categories</h3>
            <div className="categories-container">
                
            </div>
        </section>
    </>
    )
}

export default Home