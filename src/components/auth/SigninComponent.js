import React, { useState } from 'react'
//style
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//emotionStyled
import { Underline } from '@/styles/emotion/authStyle'
//material
import InputComponents from '@/materialComponents/InputComponents'
//action
import { signin, authenticate, isAuth } from '@/actions/auth'
//routing
import Router from 'next/router'

const SigninComponent = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        loading: false
    });
    const { username, email, password } = values;
    const [toggle, setToggle] = useState("email");

    const loginWith = (name) => {
        setToggle(name)
        setValues({ ...values, username: "", email: "" })
    }

    const handleEvent = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value, loading: false })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        let intended = Router.query.from
        const user = { username, email, password }
        signin(user)
            .then(response => {
                toast.success("signin success")
                authenticate(response.data, () => {
                    if (intended) {
                        Router.push(intended)
                    }
                    else if (isAuth() && isAuth().role === 0) {
                        Router.push('/')
                    }
                     else if (isAuth() && isAuth().role === 1) {
                        Router.push('/admin/create')
                    }
                })
            })
            .catch(err => { console.log(err) })
    }
    const signinForm = () => (
        <form onSubmit={handleSubmit}>
            {toggle === "username" ?
                <InputComponents
                    title="Username"
                    type="text"
                    placeholder="Type your username"
                    name="username"
                    value={username}
                    onChange={handleEvent}
                />
                :
                toggle === "email" &&
                <InputComponents
                    title="Email"
                    type="email"
                    placeholder="Type your Email"
                    name="email"
                    value={email}
                    onChange={handleEvent}
                />
            }
            <InputComponents
                title="Password"
                type="password"
                placeholder="Type your Password"
                name="password"
                value={password}
                onChange={handleEvent}
            />
            <div>
                <button className='btn btn-primary mt-2'>Signin</button>
            </div>
        </form>
    )
    isAuth() && Router.push('/');
    return (
        <div>
            <ToastContainer />
            <div className='shadow p-3'>
                <h6 className='text-muted'>
                    login with&nbsp;
                    {toggle === "email" ?
                        <Underline onClick={() => loginWith("username")}>username</Underline>
                        :
                        toggle === "username" &&
                        <Underline onClick={() => loginWith("email")}>email</Underline>
                    }
                </h6>
                {signinForm()}
            </div>
        </div>
    )
}

export default SigninComponent