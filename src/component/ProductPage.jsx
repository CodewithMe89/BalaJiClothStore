import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addItem} from './slice/CartSlice'
import { FaArrowLeft } from "react-icons/fa";
import ProductPageShimmer from './ProductPageShimmer'
import '../Css/ProductPage.css'
import {URL} from '../constant.js'

function ProductPage() {
    const navigate = useNavigate()
    const products = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const { productName } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [showSuccess,setShowSuccess] = useState(false)
    const handleToBackFunction = () => {
        navigate(-1)
    }

    if (!Array.isArray(products) || products.length === 0) {
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

    const handleCartSubmit = async () => {
        const data = {
            selectedSize:selectedSize,
            productDetails:product._id,
            quantity: 1
        }

        try{
            const response = await fetch(`${URL}/cart`,{
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body:JSON.stringify(data)
            })
            if(!response.ok){
                throw new Error("Failed to update cart")
            }
            const result = await response.json();
            if(result){
                const {cartItem} = result
                dispatch(addItem(cartItem))

                setShowSuccess(true)

                setTimeout(() => {
                    setShowSuccess(false)
                },2500)
            }
        }catch(err){
            console.log(err)
        }
    }
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

                        <button className="cart" disabled={!selectedSize} onClick={handleCartSubmit}>

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

            {
    showSuccess && (
        <div className="cart-success">
            <div className="success-icon">✓</div>

            <div className="success-content">
                <h4>Added to Cart</h4>
                <p>{product.productName} has been added successfully.</p>
            </div>
            <div className="success-progress"></div>
        </div>
    )
}
        </>
    )

}

export default ProductPage;