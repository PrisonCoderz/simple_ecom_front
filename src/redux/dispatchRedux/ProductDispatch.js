import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '@/redux/slices/product/productSlice';

const ProductDispatch = ({ children }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.data)

    useEffect(() => {
        product.length < 1 && dispatch(fetchProduct())
    }, [])
    
    return (
        <div>
            {children}
        </div>
    )
}

export default ProductDispatch