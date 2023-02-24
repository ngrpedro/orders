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
      <ShoppingCartProvider>
        <Layout>
          <ProductsProvider>
            <Component {...pageProps} />
          </ProductsProvider>
        </Layout>
      </ShoppingCartProvider>
    </SessionProvider>
  )
}
