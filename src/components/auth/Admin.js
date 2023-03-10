import React, { useEffect } from 'react'
import Router from 'next/router'
import { isAuth } from '@/actions/auth'

const Admin = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push({
                pathname: "/auth/signin",
                query: { from: Router.pathname }
            })
        }
        else if (isAuth().role !== 1) {
            Router.push("/")
        }
    },[])
    return (
        <>{children}</>
    )
}

export default Admin