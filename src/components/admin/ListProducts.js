import React from 'react'
//router
import Link from 'next/link';
//redux
import { fetchProduct } from '@/redux/slices/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
//action
import { deleteProduct } from '@/actions/product';
//style
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ListProducts = () => {
  const products = useSelector(state => state.product.data)
  const dispatch = useDispatch()

  const delProduct = (slug) => {
    let answer = window.confirm(
      'Are you sure you want to delete?'
    );
    if (answer) {
      deleteProduct(slug)
        .then(res => {
          toast.success(res.data.message)
          dispatch(fetchProduct())
        })
        .catch(err => {
          toast.error(err.response.data.error)
          handleResponse(err.response)
        })
    }
  }

  return products.length > 0 ? products.map((item, i) => (
    <div key={item._id} 
      className='p-2 ms-5 me-5 m-3 shadow d-flex align-items-center justify-content-around'
    >
      <ToastContainer />
      <img
        style={{ width: "50px", height: "50px" }}
        src={item.image}
        alt={item.slug}
        className="img-fluid"
      />
      <p style={{width:"50%"}}>{item.title}</p>
      <h6>{item.price}.00 $</h6>
      <div className='d-flex'>
        <Link href={`/admin/${item.slug}`}
          className='btn btn-sm btn-info'>
          Edit
        </Link>
        <button className='btn btn-sm btn-danger ms-2'
          onClick={() => delProduct(item.slug)}>
          Del
        </button>
      </div>
    </div>
  ))
    :
    <h2>Loading</h2>
}

export default ListProducts