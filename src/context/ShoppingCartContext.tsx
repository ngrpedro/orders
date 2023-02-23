import { createContext, useContext, ReactNode } from 'react'
import { useLocalStorage } from './../hooks/useLocalIstorage';

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
  const [cartProducts, setCartProducts] = useLocalStorage<CartProduct[]>(
    '@Ooorders-cart.v01',
    []
  )

  let totalQuantify = 0
  let totalAmount = 0

  function increaseCartItem(data: CartProduct) {}
  function decreaseCartItem(data: CartProduct) {}
  function deleteCart() {}

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
