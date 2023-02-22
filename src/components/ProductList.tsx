import { api } from '@/lib/axios'
import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'

interface Product {
  name: string
  price: number
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  //console.log(products)

  const findManyProducts = async () => {
    const prods = await api.get('/products')
    setProducts(prods.data)
  }

  useEffect(() => {
    findManyProducts()
  }, [])

  return (
    <>
      {products.map((prod) => {
        return (
          <div
            key={prod.name}
            className='flex items-center justify-between border-b border-gray-300 p-3'
          >
            <p className='font-bold text-xl '>{prod.name}</p>
            <p className='font-bold text-lg text-gray-700'>{prod.price}</p>
          </div>
        )
      })}
    </>
  )
}

export default ProductList
