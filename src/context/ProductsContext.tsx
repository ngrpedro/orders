import { api } from '@/lib/axios'
import { createContext, ReactNode, useContext, useState, useEffect } from 'react'

interface Product {
  id: number
  name: string
  price: number
}

interface ProductContext {
  products: Product[]
  findManyProducts: () => void
}

interface ProductsProviderProps {
  children: ReactNode
}

const ProductsContext = createContext({} as ProductContext)

export function useProducts() {
  return useContext(ProductsContext)
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    findManyProducts()
  }, [])

  const findManyProducts = async () => {
    const prods = await api.get('/products')
    setProducts(prods.data)
  }

  return (
    <ProductsContext.Provider value={{ products, findManyProducts }}>
      {children}
    </ProductsContext.Provider>
  )
}
