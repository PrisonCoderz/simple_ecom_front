import React from 'react'
import Layout from '@/components/layout/Main'
import ProductDispatch from '@/redux/dispatchRedux/ProductDispatch'
import ShowProduct from '@/components/shop/ShowProduct'
const Home = () => {
  return (
    <Layout>
      <ProductDispatch>
        <div className='container-fluid'>
          <div className="pt-3 pb-2">
            <h2 className='bg-secondary p-5'>Shop Page</h2>
          </div>
          <ShowProduct/>
        </div>
      </ProductDispatch>
    </Layout>
  )
}

export default Home