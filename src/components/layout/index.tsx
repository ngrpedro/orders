import React, { ReactNode } from 'react'
import { SquaresFour, ShoppingCart, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { title } from 'process'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  return (
    <>
      <header className='w-full bg-neutral-800 px-4 py-2 flex items-center justify-center'>
        <h1 className='font-semibold text-xl'>Ooorders!</h1>
      </header>
      <div className='px-4 py-8'>{children}</div>
      <nav className='sticky bottom-0 w-full bg-neutral-800 px-4 py-4 flex items-center justify-between'>
        <Link href={'/home'}>
          <SquaresFour
            size={24}
            className={router.pathname === '/home' ? 'text-green-700' : ''}
          />
        </Link>
        <Link href={'/shoppingCart'}>
          <ShoppingCart
            size={24}
            className={
              router.pathname === '/shoppingCart' ? 'text-green-700' : ''
            }
          />
        </Link>
        <Link href={'/profile'}>
          <User
            size={24}
            className={router.pathname === '/profile' ? 'text-green-700' : ''}
          />
        </Link>
      </nav>
    </>
  )
}

export default Layout
