import { createContext, useContext, ReactNode, useState } from 'react'
import { useLocalStorage } from './../hooks/useLocalIstorage'

interface CartProduct {
  productId: number
  name: string
  price: number
  quantify?: number
  amount?: number
}

interface ShoppingCartContext {
  cartProducts: CartProduct[]
  totalQuantify: number
  totalAmount: number
  increaseCartItem: (data: CartProduct) => void
  decreaseCartItem: (data: CartProduct) => void
  deleteCart: () => void
}

interface ShoppingCartProviderProps {
  children: ReactNode
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  /*   const [cartProducts, setCartProducts] = useLocalStorage<CartProduct[]>(
    '@Ooorders-cart.v01',
    []
  ) */

  let totalQuantify = cartProducts.reduce(
    (quantity, item) => item.quantify! + quantity,
    0
  )
  let totalAmount = 0

  function increaseCartItem(data: CartProduct) {
    const { productId, name, price } = data

    const existingProduct = cartProducts.find(
      (product) => productId === product.productId
    )

    const quantify = 1
    const amount = price

    const newProduct = {
      productId,
      name,
      price,
      quantify,
      amount,
    }

    if (!existingProduct) {
      setCartProducts((state) => [...state, newProduct])
    } else {
      const newProductArray = cartProducts.map((prod) => {
        if (prod.productId === existingProduct?.productId) {
          const quantify = prod.quantify! + 1
          const amount = prod.price * quantify

          return {
            ...prod,
            quantify,
            amount,
          }
        } else {
          return { ...prod }
        }
      })

      setCartProducts(newProductArray)
    }
  }

  function decreaseCartItem(data: CartProduct) {
    const { productId, name, price } = data

    const newProduct = cartProducts.map((product) => {
      if (productId === product.productId && product.quantify! > 1) {
        const quantify = product.quantify ? product.quantify - 1 : 0 - 1
        const amount = product.price * quantify

        return {
          ...product,
          quantify,
          amount,
        }
      }
      if (productId === product.productId && product.quantify === 1) {
        return {
          ...product,
          quantify: 0,
          amount: 0,
        }
      } else {
        return {
          ...product,
        }
      }
    })

    let newList = newProduct.filter((item) => item.quantify != 0)
    setCartProducts(newList)
  }

  function deleteCart() {
    setCartProducts([])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartProducts,
        totalQuantify,
        totalAmount,
        increaseCartItem,
        decreaseCartItem,
        deleteCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
