import React, { useState, useEffect } from 'react'
//router
import Router from 'next/router'
//material
import InputComponents from '@/materialComponents/InputComponents'
import SingleFileUpload from '@/materialComponents/SingleFileUpload'
//emotionStyled
import { BrowsePic } from '@/styles/emotion/adminStyle'
//action
import { updateProduct, readProduct } from '@/actions/product'
import { handleResponse } from '@/actions/auth'
//style
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//redux
import { fetchProduct } from '@/redux/slices/product/productSlice'
import { useDispatch } from 'react-redux'

const EditProduct = () => {
    const [values, setValues] = useState({})
    const [formData, setFormData] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        readProduct(Router.query.slug)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => { console.log(err) })
        setFormData(new FormData());
    }, [])


    const handleEvent = (event) => {
        const { name, value } = event.target;
        formData.set(name, value)
        setValues({ ...values, [name]: value, loading: false })
    }

    const setImage = (image) => {
        formData.set("image", image)
        setValues({ ...values, image })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateProduct(formData,Router.query.slug)
            .then(res => {
                toast.success(res.data.message)
                setValues({ title: "", price: "", image: "" })
                dispatch(fetchProduct())
                Router.push("/admin/list")
            })
            .catch(err => {
                toast.error(err.response.data.error)
                handleResponse(err.response)
            })
    }

    const editProductForm = () => {
        const { image, title, price } = values
        return <form onSubmit={handleSubmit}>
            <BrowsePic>
                {image ?
                    <img src={image} className="img-fluid" />
                    :
                    <p className='d-flex justify-content-center align-items-center'>
                        empty
                    </p>
                }
            </BrowsePic>
            <SingleFileUpload
                getImage={(image) => setImage(image)}
            />
            <InputComponents
                title="title"
                type="text"
                placeholder="Enter title"
                name="title"
                value={title}
                onChange={handleEvent}
            />
            <InputComponents
                title="price"
                type="number"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={handleEvent}
            />
            <div>
                <button className='btn btn-secondary mt-2'>Update</button>
            </div>
        </form>
    }

    return (
        <div>
            <ToastContainer />
            {values && editProductForm()}
        </div>
    )
}

export default EditProduct