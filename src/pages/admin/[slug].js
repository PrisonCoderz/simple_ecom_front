import React from 'react'
import Layout from '@/components/layout/Main'
import EditProduct from '@/components/admin/EditProduct'
import Admin from '@/components/auth/Admin'

const Update = () => {
    return (
        <Admin>
            <Layout>
                <div className="container-fluid mt-5">
                    <div className="pt-3 pb-3">
                        <h3 className='bg-secondary'>Edit Products</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <EditProduct />
                        </div>
                    </div>
                </div>
            </Layout>
        </Admin>
    )
}

export default Update