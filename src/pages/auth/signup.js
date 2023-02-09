import React from 'react'
import Layout from '@/components/layout/Main'
import SignupComponent from '@/components/auth/SignupComponent'

const Signup = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <h1 className="pt-4 pb-4 d-flex justify-content-center">
                    Signup
                </h1>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <SignupComponent />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup