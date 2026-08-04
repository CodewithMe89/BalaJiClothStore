import { FaTrash } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import '../Css/Cart.css'
function CartItem({ item,onIncrease,onDecrease,onRemove }) {
    const product = item.productDetails;

    const discountPrice = product.price - (product.price * product.discountPercentage) / 100;

    return (
        <>
            <div className="cart-card">

                <div className="cart-image">

                    <img
                        src={product.imgURL}
                        alt={product.productName}
                    />

                </div>

                <div className="cart-info">

                    <h3>{product.productName}</h3>

                    <p className="brand">
                        {product.brand}
                    </p>

                    <div className="rating">
                        ⭐ {product.ratings}
                    </div>

                    <p className="size">
                        Size : {item.selectedSize}
                    </p>

                    <div className="price">
                        <span className="discount-price">
                            ₹{Math.round(discountPrice)}
                        </span>

                        <span className="mrp">
                            ₹{product.price}
                        </span>

                        <span className="off">
                            {product.discountPercentage}% OFF
                        </span>
                    </div>

                    <div className="quantity">
                        <button onClick={onDecrease}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={onIncrease}>+</button>
                    </div>

                    <div className="cart-actions">
                        <button onClick={onRemove}>
                            <FaTrash />
                            Remove
                        </button>
                        <button>
                            <FaHeart />
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem