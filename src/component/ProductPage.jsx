import { useParams } from "react-router-dom";
import { products } from "../data";
import '../Css/ProductPage.css'

function ProductPage() {

    const { productName } = useParams();

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
                        ⭐ {product.ratings}
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

                    <div className="offers">

                        <h3>Available Offers</h3>

                        <p>🏷️ Bank Offer - 10% Instant Discount</p>

                        <p>🚚 Free Delivery Available</p>

                        <p>🔄{product.exchangePolicy}</p>

                        <p>💳 EMI starting from ₹299/month</p>

                    </div>

                    <h3>Select Size</h3>

                    <div className="sizes">

                        {product.sizes.map(size => (

                            <button key={size}>
                                {size}
                            </button>

                        ))}

                    </div>

                    <div className="buttons">

                        <button className="cart">

                            Add To Cart

                        </button>

                        <button className="buy">

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