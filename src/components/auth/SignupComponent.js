import React, { useState } from 'react'
//style
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//material
import InputComponents from '@/materialComponents/InputComponents'
//action
import { signup,isAuth } from '@/actions/auth'
//router
import { withRouter } from 'next/router'

const SignupComponent = ({ router }) => {
    const [values, setValues] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        loading: false,
        reset: {
            name: "", username: "", email: "",
            password: "", loading: false
        }
    })
    const { name, username, email, password, reset } = values

    const handleEvent = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value, loading: false })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const user = { name, username, email, password }
        signup(user)
            .then(response => {
                toast.success("Signup success")
                setValues({ ...values, ...reset })
                setTimeout(() => { router.push("/auth/signin") }, [2000])
            })
            .catch(err => {
                setValues({ ...values, password: "", loading: false })
                toast.error(err.response.data.error)
            })
    }
    const signupForm = () => (
        <form onSubmit={handleSubmit}>
            <div className='input-group mt-2'>
                <span className="bg-light input-group-text">name</span>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Type Your Name'
                    name="name"
                    value={name}
                    onChange={handleEvent}
                />
            </div>
            <InputComponents
                title="Username"
                type="text"
                placeholder="Type your username"
                name="username"
                value={username}
                onChange={handleEvent}
            />
            <InputComponents
                title="Email"
                type="email"
                placeholder="Type your Email"
                name="email"
                value={email}
                onChange={handleEvent}
            />
            <InputComponents
                title="Password"
                type="password"
                placeholder="Type your Password"
                name="password"
                value={password}
                onChange={handleEvent}
            />
            <div>
                <button className='btn btn-primary mt-2'>Signup</button>

            </div>
        </form>
    )
    isAuth() && router.push('/'); 
    return (
        <div>
            <ToastContainer />
            <div className='shadow p-3'>
                {signupForm()}
            </div>
        </div>
    )
}

export default withRouter(SignupComponent)