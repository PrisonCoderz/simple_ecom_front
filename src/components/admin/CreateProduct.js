import React, { useState, useEffect } from 'react'
//material
import InputComponents from '@/materialComponents/InputComponents'
import SingleFileUpload from '@/materialComponents/SingleFileUpload'
//emotionStyled
import { BrowsePic } from '@/styles/emotion/adminStyle'
//action
import { createProduct } from '@/actions/product'
import { handleResponse } from '@/actions/auth'
//style
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//redux
import { fetchProduct } from '@/redux/slices/product/productSlice'
import { useDispatch } from 'react-redux'

const CreateProduct = () => {
    const [values, setValues] = useState({
        title: "",
        price: "000",
        image: ""
    })
    const dispatch = useDispatch()
    const [formData, setFormData] = useState()

    useEffect(() => {
        setFormData(new FormData());
    }, [])

    const { title, price, image } = values
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
        createProduct(formData)
            .then(res => {
                toast.success(res.data.message)
                setValues({title:"",price:"",image:""})
                 dispatch(fetchProduct())
            })
            .catch(err => {
                toast.error(err.response.data.error)
                handleResponse(err.response)
            })
    }

    const addProduct = () => (
        <form onSubmit={handleSubmit}>
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
                <button className='btn btn-secondary mt-2'>create</button>
            </div>
        </form>
    )

    return (
        <div>
            <ToastContainer />
            {addProduct()}
        </div>
    )
}

export default CreateProduct