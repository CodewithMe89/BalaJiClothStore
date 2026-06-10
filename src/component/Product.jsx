import {useParams} from "react-router-dom"
const Product = () => {
    const {categoryName} = useParams()
    console.log(categoryName)
    return(
        <h1>I am a product page</h1>
    )
}

export default Product