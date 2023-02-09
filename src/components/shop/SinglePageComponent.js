import React from 'react'
//routing
import Router from 'next/router'
//action
import { userCart } from '@/actions/user'

const SinglePageComponent = ({product}) => {

  const orderProcess = () => {
    userCart({ product: product._id })
      .then(res => {
        res.data.ok &&
          Router.push('/payment')
      })
      .catch(err => { console.log(err) })
  }
  return (
    <>
      {product ?
        <div className='row'>
          <div className="col-lg-6 p-5 pt-1">
            <img src={product.image} className="img-fluid shadow" alt={product.title} />
          </div>
          <div className="col-lg-6">
            <h2>
              {product.title}
            </h2>
            <p>Price: {product.price}.00 $</p>
            <button className='btn btn-primary' onClick={orderProcess}>
              buy now
            </button>
          </div>
        </div>
        :
        <h2>Loading</h2>
      }
    </>
  )
}

export default SinglePageComponent