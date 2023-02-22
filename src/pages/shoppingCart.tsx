import ProductCard from '@/components/ProductCard'
import Head from 'next/head'
import React from 'react'

const ShoppingCart = () => {
  return (
    <div>
      <Head>
        <title>Carrinho</title>
      </Head>
      <div className='space-y-8'>
        <div className='space-y-3'>
          <h2>Todos os produtos</h2>
          <div className=''>
            <ProductCard />
          </div>
        </div>

        <div className='space-y-3'>
          <button className='px-4 py-2 bg-red-800 text-white font-semibold w-full rounded-md'>
            Confirmar endereço
          </button>

          <button className='px-4 py-2 bg-neutral-800 text-white font-semibold w-full rounded-md'>
            Forma de pagamento
          </button>
        </div>

        <div className='p-3 bg-neutral-800 rounded-md space-y-2'>
          <div className="flex items-center justify-between">
            <span className="text-sm">Total dos produtos</span>
            <span className='font-bold'>R$ 48,90</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Taxa de entrega</span>
            <span className='font-bold'>R$ 3,00</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Total dos produtos</span>
            <span className='font-bold text-green-600'>R$ 51,90</span>
          </div>
        </div>

        <div>
          <button className='px-4 py-2 bg-green-600 text-white font-semibold w-full rounded-md'>
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
