import React, { ReactNode } from 'react'
import { SquaresFour, ShoppingCart, User } from 'phosphor-react'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className='w-full bg-neutral-800 px-4 py-2 flex items-center justify-center'>
        <h1 className='font-semibold text-xl'>Ooorders!</h1>
      </header>
      <div className='h-screen px-4 py-8'>{children}</div>
      <nav className='sticky bottom-0 w-full bg-neutral-800 px-4 py-4 flex items-center justify-between'>
        <SquaresFour size={24} />
        <ShoppingCart size={24} className='text-green-700' />
        <User size={24} />
      </nav>
    </>
  )
}

export default Layout
