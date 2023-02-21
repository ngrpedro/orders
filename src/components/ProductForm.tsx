import React from 'react'

const ProductForm = () => {
  return (
    <div className='max-w-sm space-y-4'>
      <h2 className='text-xl font-bold'>Cadastro de produto</h2>
      <label className='block space-y-1'>
        <span className='text-base font-semibold block'>Nome</span>
        <input type='text' className='px-4 py-2 rounded-md w-full' />
      </label>

      <label className='block space-y-1'>
        <span className='text-base font-semibold block'>Preço</span>
        <input type='number' className='px-4 py-2 rounded-md w-full' />
      </label>
    </div>
  )
}

export default ProductForm
