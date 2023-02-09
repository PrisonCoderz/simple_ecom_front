import React from 'react'
import Layout from '@/components/layout/Main'
import SigninComponent from '@/components/auth/SigninComponent'

const Signin = () => {
    return (
        <Layout>
            <div>
                <div className="container-fluid">
                    <h1 className="pt-4 pb-4 d-flex justify-content-center">
                        Signin
                    </h1>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <SigninComponent />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signin