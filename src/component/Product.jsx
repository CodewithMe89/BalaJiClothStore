import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { categories, products } from '../data.js'
import ProductCard from './ProductCard'


const Product = () => {

    const { categoryName } = useParams()
    const [gender, setGender] = useState("")
    const [rating, setRating] = useState(0)
    const [searchInput, setSearchInput] = useState("")
    const [selectedCategory, setSelectedCategory] = useState([])
    const [productData] = useState(products)
    const [filteredProduct, setFilteredProduct] = useState(products)

    const handleSearchInput = (e) => {
        const searchText = e.target.value.toLowerCase()

        setSearchInput(searchText);

        applyFilters(searchText, gender, rating, selectedCategory)
    }

    const handleGenderChange = (e) => {
        const selectGender = e.target.value;

        setGender(selectGender)

        applyFilters(searchInput, selectGender, rating, selectedCategory)
    }

    const handleRatingChange = (e) => {
        const selectRating = Number(e.target.value)

        setRating(selectRating);

        applyFilters(searchInput, gender, selectRating, selectedCategory)
    }

    const handleCategoryChange = (e, categoryName) => {
        let updatedCategories;
        if (e.target.checked) {
            updatedCategories = [...selectedCategory, categoryName];
        }
        else {
            updatedCategories = selectedCategory.filter(
                (item) => item !== categoryName
            )
        }

        setSelectedCategory(updatedCategories)

        applyFilters(searchInput, gender, rating, updatedCategories)
    };

    const handleClearFilter = () => {
        setGender("")
        setRating(0)
        setSearchInput("")
        setSelectedCategory([])
        applyFilters("", "", 0, [])
    }

    useEffect(() => {
        applyFilters()
    }, [categoryName])

    const applyFilters = (
        search = searchInput,
        genderFilter = gender,
        ratingFilter = rating,
        categoryFilter = selectedCategory) => {
        const filtered = productData.filter((product) => {

            // BUG FIX: was `search = ""` (assignment) -> now `search === ""` (comparison)
            const searchMatch =
                search === "" ||
                product.productName.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)

            const genderMatch =
                genderFilter === "" ||
                product.gender === genderFilter

            const ratingMatch =
                product.ratings >= ratingFilter;

            const categoryMatch =
                categoryFilter.length === 0 ||
                categoryFilter.includes(product.category)

            const urlCategoryMatch = !categoryName ||
                product.category.toLowerCase() === categoryName.toLowerCase()

            return (
                urlCategoryMatch &&
                searchMatch &&
                genderMatch &&
                ratingMatch &&
                categoryMatch
            )

        });
        setFilteredProduct(filtered)
    }


    return (
        <>
            <section className="header">
                <h2>{!categoryName ? "All Product" : categoryName}</h2>

                <input type="text" placeholder="Search Products" value={searchInput} onChange={handleSearchInput} />
            </section>

            <section className="products-layout">
                <div className="filters">
                    <h2 className="filter-head">Filters</h2>
                    <br />
                    <h3 className="filter-head">Gender</h3>
                    <label>
                        <input type="radio" value="male" name="gender" checked={gender === "male"} onChange={handleGenderChange} />
                        Male
                    </label>
                    <br />
                    <label>
                        <input type="radio" value="female" name="gender" checked={gender === "female"} onChange={handleGenderChange} />
                        Female
                    </label>
                    <br />

                    <h3>Rating</h3>
                    <p>{rating}</p>
                    <input
                        type="range"
                        max="5"
                        min="0"
                        step="0.1"
                        value={rating}
                        onChange={handleRatingChange}
                    />

                    <h3 className="filter-head">Category</h3>
                    {categories.map((category) => (
                        <label key={category.categoryName}>
                            <input
                                type="checkbox"
                                value={category.categoryName}
                                checked={selectedCategory.includes(category.categoryName)}
                                onChange={(e) => handleCategoryChange(e, category.categoryName)} />
                            {category.categoryName}
                            <br />
                        </label>

                    ))}

                    <button onClick={handleClearFilter}>Clear Filter</button>
                </div>
                <div className="products">
                    {filteredProduct.length === 0 ? (
                        <p>No products found.</p>
                    ) : (
                        filteredProduct.map((product) => (
                            <ProductCard key={product.productName} product={product} />
                        ))
                    )}
                </div>
            </section>
        </>
    )
}

export default Product