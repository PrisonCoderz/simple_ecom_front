import React from 'react'
import Layout from '@/components/layout/Main'
import CreateProduct from '@/components/admin/CreateProduct'
import Admin from '@/components/auth/Admin'

const Create = () => {
    return (
        <Admin>
            <Layout>
                <div className="container-fluid mt-5">
                    <div className="p-5 pt-0">
                        <h3 className='bg-secondary'>Create Products</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <CreateProduct />
                        </div>
                    </div>
                </div>
            </Layout>
        </Admin>
    )
}

export default Create