import React from 'react'
import Layout from '@/components/layout/Main'
import Admin from '@/components/auth/Admin'
import ListProducts from '@/components/admin/ListProducts'
import ProductDispatch from '@/redux/dispatchRedux/ProductDispatch'

const List = () => {
    return (
        <Admin>
            <ProductDispatch>
                <Layout>
                    <div className='p-5 pt-0'>
                        <div className="pt-3 pb-3">
                            <h3 className='bg-secondary'>Products</h3>
                        </div>
                        <ListProducts />
                    </div>
                </Layout>
            </ProductDispatch>
        </Admin>
    )
}

export default List