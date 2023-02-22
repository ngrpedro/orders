import ProductCard from '@/components/ProductCard'
import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className='space-y-5'>
        {/* Carrousel */}
        <div className='grid grid-cols-4 gap-3 -mr-4'>
          <div className='bg-neutral-700 h-32 rounded-md col-span-3'></div>
          <div className='bg-neutral-700 h-32 rounded-l-md '></div>
        </div>

        {/* Categories */}
        <div className='space-y-3'>
          <h2>Categorias</h2>
          <div className='grid grid-cols-5 gap-2'>
            <span className='rounded-full bg-neutral-700 w-12 h-12'></span>
            <span className='rounded-full bg-neutral-700 w-12 h-12'></span>
            <span className='rounded-full bg-neutral-700 w-12 h-12'></span>
            <span className='rounded-full bg-neutral-700 w-12 h-12'></span>
          </div>
        </div>

        {/* Promotions */}
        <div className='space-y-3'>
          <h2>Promoções</h2>
          <div className='grid grid-cols-5 gap-2'>
            <span className='rounded-full bg-neutral-700 w-12 h-12'></span>
            <span className='rounded-full bg-neutral-700 w-12 h-12'></span>
          </div>
        </div>

        {/* Todoos os produtos */}
        <div className='space-y-3'>
          <h2>Todos os produtos</h2>
          <div className=''>
            <ProductCard />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
