import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { categories, products } from '../data.js'
import ProductCard from './ProductCard'


const Product = () => {
    const { categoryName } = useParams()

    return (
        <>
            <section>
                <h2>{!categoryName ? "All Product" : categoryName}</h2>

                <input type="text" placeholder="Search Products" />
            </section>

            <section className="products-layout">
                <div className="filters">

                </div>
                <div className="products">
                    {products.map((product) => (
                            <ProductCard key={product.productName} product={product} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Product