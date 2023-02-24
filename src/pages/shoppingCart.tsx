import ProductCard from '@/components/ProductCard'
import Head from 'next/head'
import { WhatsappLogo } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import * as Dialog from '@radix-ui/react-dialog'
import AdressPaymentModal from '@/components/AdressPaymentModal'
import { priceFormatter } from '@/utils/formatter'

const ShoppingCart = () => {
  const { cartProducts } = useShoppingCart()

  const totalOrderAmount = cartProducts.reduce(
    (totalAmount, prod) => totalAmount + prod.amount!,
    0
  )

  const totalOrderAmountFormatted = priceFormatter.format(
    totalOrderAmount / 100
  )

  const totalOrderAmountFormatterdPlusTax = priceFormatter.format(
    totalOrderAmount / 100 + 3
  )

  return (
    <div>
      <Head>
        <title>Carrinho</title>
      </Head>
      {cartProducts.length === 0 ? (
        <>
          <div className='h-[60vh]'>
            O carrinho está vazio, volte e escolha alguns produtos
          </div>
        </>
      ) : (
        <div className='space-y-8'>
          <div className='space-y-3'>
            <h2>Todos os produtos</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
              {cartProducts?.map((product) => {
                return (
                  <ProductCard
                    id={product.productId}
                    key={product.productId}
                    {...product}
                  />
                )
              })}
            </div>
          </div>

          <Dialog.Root>
            <Dialog.Trigger className='px-4 py-2 bg-red-800 text-white font-semibold w-full rounded-md'>
              Endereço e forma de pagamento
            </Dialog.Trigger>

            <AdressPaymentModal />
          </Dialog.Root>

          <div className='p-3 bg-neutral-800 rounded-md space-y-2'>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Total dos produtos</span>
              <span className='font-bold'>{totalOrderAmountFormatted}</span>
            </div>

            <div className='flex items-center justify-between'>
              <span className='text-sm'>Taxa de entrega</span>
              <span className='font-bold'>R$ 3,00</span>
            </div>

            <div className='flex items-center justify-between'>
              <span className='text-sm'>Total dos produtos</span>
              <span className='font-bold text-green-600'>
                {totalOrderAmountFormatterdPlusTax}
              </span>
            </div>
          </div>

          <div>
            <button
              className='px-4 py-2 bg-green-600 text-white font-semibold w-full 
                rounded-md flex items-center justify-center gap-2'
            >
              Confirmar pedido <WhatsappLogo size={22} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShoppingCart
