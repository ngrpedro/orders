import { useShoppingCart } from '@/context/ShoppingCartContext'
import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import React from 'react'

interface ProductProps {
  id: number
  name: string
  price: number
}

interface CartProduct {
  id: number
  name: string
  price: number
}

const ProductCard = (product: ProductProps) => {
  const { cartProducts, increaseCartItem, decreaseCartItem } = useShoppingCart()
  const { name, price, id } = product

  const actualProduct = cartProducts.find((product) => product.productId == id)

  const increaseCart = (data: CartProduct) => {
    const { id, name, price } = data

    const productToIncrease = {
      productId: id,
      name,
      price,
    }

    increaseCartItem(productToIncrease)
  }

  const decreaseCart = (data: CartProduct) => {
    const { id, name, price } = data

    const productToDecrease = {
      productId: id,
      name,
      price,
    }

    decreaseCartItem(productToDecrease)
  }

  return (
    <>
      <div className='grid grid-cols-3 gap-3 p-2 bg-neutral-800 rounded-md'>
        <span className='block rounded-lg bg-neutral-700'></span>

        <div className='col-span-2'>
          <div className="flex items-start justify-between">
            <div className='text-start'>
              <span className='text-sm md:text-base block'>{name}</span>
              <span className='text-sm md:text-base block'>R$ {price / 100},00</span>
            </div>

            {actualProduct?.amount === undefined ? (
              ''
            ) : (
              <p className='text-green-500'>
                R$ {actualProduct.amount / 100},00
              </p>
            )}
          </div>

          {actualProduct?.quantify === undefined ? (
            <div className='flex flex-col items-end justify-center'>
              <button
                className='rounded-full border-2 border-neutral-300 p-2'
                onClick={() =>
                  increaseCart({
                    id,
                    name,
                    price,
                  })
                }
              >
                <ShoppingCartSimple size={18} />
              </button>
            </div>
          ) : (
            <div className='flex items-center justify-end gap-3 mt-2'>
              <button
                className='rounded-full border-2 border-neutral-300 p-1'
                onClick={() =>
                  increaseCart({
                    id,
                    name,
                    price,
                  })
                }
              >
                <Plus size={18} />
              </button>
              <span>{actualProduct?.quantify}</span>
              <button
                className='rounded-full border-2 border-neutral-300 p-1'
                onClick={() =>
                  decreaseCart({
                    id,
                    name,
                    price,
                  })
                }
              >
                <Minus size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCard
