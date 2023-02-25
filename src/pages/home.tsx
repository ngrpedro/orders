import ProductCard from '@/components/ProductCard'
import { prisma } from '@/lib/prisma'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'

interface HomePros {
  products: {
    id: number
    name: string
    price: number
  }[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products = await prisma.product.findMany()

  return {
    props: { products },
  }
}

const Home = ({ products }: HomePros) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className='space-y-5 md:space-y-10'>
        {/* Carrousel */}
        <div className=''>
          <div className='bg-neutral-700 h-56 md:h-72 rounded-md'></div>
        </div>

        {/* Categories */}
        <div className='space-y-3'>
          <h2 className='md:text-2xl font-semibold'>Categorias</h2>
          <div className='grid grid-cols-5 md:grid-cols-9 gap-2'>
            <span className='rounded-full bg-neutral-700 w-16 h-16 md:w-28 md:h-28'></span>
            <span className='rounded-full bg-neutral-700 w-16 h-16 md:w-28 md:h-28'></span>
            <span className='rounded-full bg-neutral-700 w-16 h-16 md:w-28 md:h-28'></span>
            <span className='rounded-full bg-neutral-700 w-16 h-16 md:w-28 md:h-28'></span>
            <span className='rounded-full bg-neutral-700 w-16 h-16 md:w-28 md:h-28'></span>
          </div>
        </div>

        {/* Promotions */}
        <div className='space-y-3'>
          <h2 className='md:text-2xl font-semibold'>Promoções</h2>
          <div className='grid grid-cols-5 md:grid-cols-9 gap-2'>
            <span className='rounded-full bg-neutral-700 w-16 h-16 md:w-28 md:h-28'></span>
            <span className='rounded-full bg-neutral-700 w-16 h-16 md:w-28 md:h-28'></span>
          </div>
        </div>

        {/* Todoos os produtos */}
        <div className='space-y-3'>
          <h2 className='md:text-2xl font-semibold'>Todos os produtos</h2>

          {products.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
              {products.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductCard {...product} />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className='h-60 text'>
              <p>Seus produtos aparecem aqui</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default Home
