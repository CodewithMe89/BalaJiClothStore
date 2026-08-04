import '../Css/Cart.css'
function PriceSummary({
    totalPrice,
    totalDiscount,
    finalPrice,
    totalItems
}) {
    return (
        <>
            <div className="price-summary">
                <h3>
                    PRICE DETAILS
                </h3>

                <div className="summary-row">
                    <span>
                        Price ({totalItems} Items)
                    </span>
                    <span>
                        ₹{totalPrice}
                    </span>
                </div>

                <div className="summary-row">
                    <span>
                        Discount
                    </span>
                    <span className="green">
                        -₹{Math.round(totalDiscount)}
                    </span>
                </div>

                <div className="summary-row">
                    <span>
                        Delivery Charges
                    </span>
                    <span className="green">
                        FREE
                    </span>
                </div>

                <hr />

                <div className="summary-total">
                    <span>Total Amount</span>
                    <span>
                        ₹{Math.round(finalPrice)}
                    </span>
                </div>

                <p className="saved">
                    You will save ₹
                    {Math.round(totalDiscount)} on this order
                </p>

                <button className="place-order">
                    PLACE ORDER
                </button>
            </div>
        </>
    )
}

export default PriceSummary