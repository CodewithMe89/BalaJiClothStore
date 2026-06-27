import  '../Css/Product.css'
import {Link } from 'react-router-dom'

function ProductCard({ product }) {
    const { productName,
        ratings,
        imgURL,
        category,
        gender,
        brand,
        price,
        discountPercentage
    } = product
    return (
        <>
        <Link to={`/products/product/${productName}`}  className="product-link">
        <div className="product-card">
            <img src={imgURL} alt={productName} />
            <div className="product-info">
                <p>{brand}</p>
                <h3>{productName}</h3>
            <div className="price-info">
                <p>{price - (price * discountPercentage) / 100}/- </p>
                <p>{price} MRP</p>
                <p>{discountPercentage}% off</p>
            </div>
            </div>
        </div>
        </Link>
        </>
    )
}

export default ProductCard