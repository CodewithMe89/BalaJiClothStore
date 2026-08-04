import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaArrowLeft } from "react-icons/fa";
import ProductPageShimmer from './ProductPageShimmer'
import '../Css/ProductPage.css'

function ProductPage() {
    const navigate = useNavigate()
    const products = useSelector((state) => state.product)
    const { productName } = useParams();
    const [selectedSize, setSelectedSize] = useState('');

    const handleToBackFunction = () => {
        navigate(-1)
    }

   if(!Array.isArray(products) || products.length===0){
        return <ProductPageShimmer />
    }

    const product = products.find(
        item => item.productName === productName
    );

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    const discountedPrice =
        product.price -
        (product.price * product.discountPercentage) / 100;

    return (
        <>
            <button
                onClick={handleToBackFunction}
                className="back-btn">
                <FaArrowLeft /> Back
            </button>
            <section className="product-page">
                <div className="product-image">
                    <img
                        src={product.imgURL}
                        alt={product.productName}
                    />
                </div>

                <div className="product-details">

                    <p className="brand">
                        {product.brand}
                    </p>

                    <h1>
                        {product.productName}
                    </h1>

                    <div className="rating">
                        ⭐ {product.ratings} / 5
                    </div>

                    <div className="price">

                        <span className="discount-price">

                            ₹{Math.round(discountedPrice)}

                        </span>

                        <span className="mrp">

                            ₹{product.price}

                        </span>

                        <span className="off">

                            {product.discountPercentage}% OFF

                        </span>

                    </div>
                    <p className="tax">
                        Inclusive of all taxes
                    </p>

                    <div className="offer-item">
                        🏷️ Bank Offer - 10% Instant Discount
                    </div>

                    <div className="offer-item">
                        🚚 Free Delivery Available
                    </div>

                    <div className="offer-item">
                        🔄 {product.exchangePolicy}
                    </div>

                    <div className="offer-item">
                        💳 EMI starting from ₹299/month
                    </div>

                    <hr className="divider" />

                    <h3>Select Size</h3>

                    <div className="sizes">

                        {product.sizes.map(size => (

                            <button
                                key={size}
                                className={selectedSize === size ? "active-size" : ""}
                                onClick={() => setSelectedSize(size)}>
                                <span>{size}</span>
                            </button>

                        ))}

                    </div>

                    <div className="buttons">

                        <button className="cart" disabled={!selectedSize}>

                            Add To Cart

                        </button>

                        <button className="buy" disabled={!selectedSize}>

                            Buy Now

                        </button>

                    </div>

                </div>

            </section>

            <section className="product-info">

                <div className="info-section">
                    <h2>Description</h2>
                    <p>{product.description}</p>
                </div>

                <div className="info-section">
                    <h2>Features</h2>

                    <ul>
                        {product.features.map(feature => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="info-section">
                    <h2>Product Details</h2>

                    <ul>
                        {product.details.map(detail => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                </div>

                <div className="info-section">
                    <h2>Exchange Policy</h2>
                    <p>{product.exchangePolicy}</p>
                </div>

                <div className="info-section">
                    <h2>Customer Reviews</h2>

                    {
                        product.reviews.length === 0 ?

                            <div className="no-review">
                                ⭐
                                <p>No Reviews Yet</p>
                            </div>

                            :

                            product.reviews.map((review, index) => (
                                <div className="review-card" key={index}>
                                    {review}
                                </div>
                            ))
                    }

                </div>

            </section>

        </>
    )

}

export default ProductPage;