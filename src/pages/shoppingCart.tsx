import ProductCard from '@/components/ProductCard'
import Head from 'next/head'
import { WhatsappLogo } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import * as Dialog from '@radix-ui/react-dialog'
import AdressPaymentModal from '@/components/AdressPaymentModal'
import { priceFormatter } from '@/utils/formatter'
import * as z from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const AdreesPaymentType = z.object({
  cep: z.number().min(3),
  rua: z.string().min(3),
  numero: z.string().min(3),
  bairro: z.string().min(3),
  complemento: z.string(),
  paymentMode: z.enum(['pix', 'credito', 'debito']),
})

type AdressPaymentInputs = z.infer<typeof AdreesPaymentType>

const ShoppingCart = () => {
  const newCartForm = useForm<AdressPaymentInputs>({
    resolver: zodResolver(AdreesPaymentType),
  })

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

  const onSubmit = (data: AdressPaymentInputs) => {
    const { bairro, cep, complemento, numero, paymentMode, rua } = data

    let whatsappOrder = `
Novo pedido: 

*Endereço* 
Rua: ${rua}
Numero: ${numero}
Bairro : ${bairro}
Complemento: ${complemento}


*Produtos*
${cartProducts.map(
  (prod) => `
Nome: ${prod.name}
Quantidade: ${prod.quantify}
Preço: ${prod.price / 100},00
Preço total: ${prod.amount! / 100},00
`
)}


*Forma de pagamento*
Pagamento: ${paymentMode}


Total dos produtos: "${totalOrderAmountFormatted}*
Entrega: *R$3,00*
Total do pedido: *${totalOrderAmountFormatterdPlusTax}*
`
    const url = `https://wa.me/5518997153884?text=${encodeURI(whatsappOrder)}`
    window.open(url)
  }

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
        <form
          className='space-y-8'
          onSubmit={newCartForm.handleSubmit(onSubmit)}
        >
          <div className='space-y-3'>
            <h2 className='text-xl font-bold'>Todos os produtos</h2>

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
          <FormProvider {...newCartForm}>
            <AdressPaymentModal />
          </FormProvider>
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
              type='submit'
              className='px-4 py-2 bg-green-600 text-white font-semibold w-full 
                rounded-md flex items-center justify-center gap-2'
            >
              Confirmar pedido <WhatsappLogo size={22} />
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ShoppingCart
