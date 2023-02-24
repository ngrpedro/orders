import ProductForm from '@/components/ProductForm'
import ProductList from '@/components/ProductList'
import React from 'react'

const CreateProduct = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="space-y-8 max-w-[400px]">
        <ProductForm />
        <div>
        <ProductList />
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
