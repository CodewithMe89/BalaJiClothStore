import '../Css/Shimmer.css'

const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            <div className="shimmer shimmer-image"></div>

            <div className="shimmer-details">
                <div className="shimmer shimmer-line shimmer-brand"></div>
                <div className="shimmer shimmer-line shimmer-title"></div>
                <div className="shimmer-price-row">
                    <div className="shimmer shimmer-line shimmer-price"></div>
                    <div className="shimmer shimmer-line shimmer-mrp"></div>
                    <div className="shimmer shimmer-line shimmer-off"></div>
                </div>
            </div>
        </div>
    )
}

export default ShimmerCard