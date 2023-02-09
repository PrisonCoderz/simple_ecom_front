import React from 'react'
import Layout from '@/components/layout/Main'
import SinglePageComponent from '@/components/shop/SinglePageComponent'
import { withRouter } from 'next/router'
import { readProduct } from '@/actions/product'

const SinglePage = ({product,query}) => {
    return (
        <Layout>
            <div className='container-fluid'>
                <div className="pt-3 pb-2">
                    <h2 className='bg-secondary p-5'>
                        Single Product Page
                    </h2>
                </div>
                <SinglePageComponent product={product}/>
            </div>
        </Layout>
    )
}
SinglePage.getInitialProps = ({ query }) => {
    return readProduct(query.slug)
        .then(res => {
            return {
                product: res.data,
                query
            }
        })
        .catch(err => console.log(err))
}
export default withRouter(SinglePage)