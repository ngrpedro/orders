import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='space-y-2'>
      <div className='grid grid-cols-3 gap-3 p-2 bg-neutral-800 rounded-md'>
        <span className='block rounded-lg bg-neutral-700 h-20'></span>

        <div className='col-span-2'>
          <div className='text-start'>
            <span className='text-sm block'>Coca cola lata (330ml)</span>
            <span className='text-sm block'>R$ 6,50</span>
          </div>
          <div className='flex flex-col items-end justify-center'>
            <button className='rounded-full border-2 border-neutral-300 p-2'>
              <ShoppingCartSimple size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-3 p-2 bg-neutral-800 rounded-md'>
        <span className='block rounded-lg bg-neutral-700 h-20'></span>

        <div className='col-span-2'>
          <div className='text-start'>
            <span className='text-sm block'>Coca cola lata (330ml)</span>
            <span className='text-sm block'>R$ 6,50</span>
          </div>
          <div className='flex items-center justify-end gap-3 mt-2'>
            <button className='rounded-full border-2 border-neutral-300 p-1'>
              <Plus size={18} />
            </button>
            <span>2</span>
            <button className='rounded-full border-2 border-neutral-300 p-1'>
              <Minus size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
