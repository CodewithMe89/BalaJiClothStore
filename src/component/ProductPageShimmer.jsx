import '../Css/productPageShimmer.css'
function ProductPageShimmer() {
    return (
        <section className="product-page">
            <div className="shimmer-image"></div>

            <div className="product-details">
                <div className="shimmer-line shimmer-brand"></div>
                <div className="shimmer-line shimmer-title"></div>
                <div className="shimmer-line shimmer-rating"></div>

                <div className="shimmer-price-row">
                    <div className="shimmer-line shimmer-price"></div>
                    <div className="shimmer-line shimmer-mrp"></div>
                </div>

                <div className="shimmer-line shimmer-tax"></div>

                <div className="shimmer-line shimmer-offer"></div>
                <div className="shimmer-line shimmer-offer"></div>
                <div className="shimmer-line shimmer-offer"></div>

                <hr className="divider" />

                <div className="shimmer-line shimmer-heading"></div>

                <div className="shimmer-sizes">
                    <div className="shimmer-size-box"></div>
                    <div className="shimmer-size-box"></div>
                    <div className="shimmer-size-box"></div>
                    <div className="shimmer-size-box"></div>
                </div>

                <div className="shimmer-buttons">
                    <div className="shimmer-btn"></div>
                    <div className="shimmer-btn"></div>
                </div>
            </div>
        </section>
    )
}

export default ProductPageShimmer;