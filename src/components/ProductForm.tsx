import { api } from '@/lib/axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ProductInputs = z.object({
  name: z.string(),
  price: z.string(),
})

type ProductType = z.infer<typeof ProductInputs>

const ProductForm = () => {
  const { register, handleSubmit } = useForm<ProductType>()

  const onSubmit = async (data: ProductType) => {
    try {
      await api.post('products', {
        name: data.name,
        price: data.price,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm space-y-4'>
      <h2 className='text-xl font-bold'>Cadastro de produto</h2>
      <label className='block space-y-1'>
        <span className='text-base font-semibold block'>Nome</span>
        <input
          type='text'
          className='px-4 py-2 rounded-md w-full'
          {...register('name')}
        />
      </label>

      <label className='block space-y-1'>
        <span className='text-base font-semibold block'>Preço</span>
        <input
          type='text'
          className='px-4 py-2 rounded-md w-full'
          {...register('price')}
        />
      </label>

      <button
        type='submit'
        className='px-4 py-2 rounded-md bg-purple-900 text-white font-semibold 
                hover:opacity-90 transition-all'
      >
        Cadastrar
      </button>
    </form>
  )
}

export default ProductForm
