import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/components/layout'
import { ProductsProvider } from '@/context/ProductsContext'
import { ShoppingCartProvider } from '@/context/ShoppingCartContext'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <ProductsProvider>
          <ShoppingCartProvider>
            <Component {...pageProps} />
          </ShoppingCartProvider>
        </ProductsProvider>
      </Layout>
    </SessionProvider>
  )
}
