import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const ShowProduct = () => {
    const products = useSelector(state => state.product.data)
    return (
        <div className='row'>
            {products.map((item) => (
                <div className="col-lg-4 col-6" key={item._id}>
                    <Link href={`/${item.slug}`}>
                        <div className="card border">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body text-dark">
                                <h5 className="card-title">{item.price}.00 $ </h5>
                                <p className="card-text">{item.title}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>

    )
}

export default ShowProduct