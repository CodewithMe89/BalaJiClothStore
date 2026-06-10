import { NavLink } from "react-router-dom"
import { CiShop } from "react-icons/ci"
import { categories } from "../data.js"

const CategoryCard = ({category}) =>{
    const {categoryName,imageURL} = category
    
    return (
        <NavLink key={categoryName} to={`/product/${categoryName}`}> 
        <img src={imageURL} alt={categoryName} />
        </NavLink>
    )
}
const Home = () => {
    return (<>
        <section>
            <div className="Image-Container">
                <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="HomeShop" />
                <NavLink to="/product"><CiShop /></NavLink>
            </div>
        </section>
        <section>
            <h2 className="category-head">Popular Categories</h2>
            <div className="categories-container">
                {categories.map(category => (
                    <div className="category-image" >
                        <CategoryCard category={category} key={category.categoryName} />
                    </div>
                ))}
            </div>
        </section>
    </>
    )
}

export default Home