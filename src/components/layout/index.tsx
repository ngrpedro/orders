import React, { ReactNode } from 'react'
import { User, ShoppingCart } from 'phosphor-react'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import ShoppingCartModal from '../ShoppingCartModal'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  return (
    <>
      <nav className='w-full bg-neutral-700 px-8 py-6 flex items-center justify-between'>
        <p>Logo</p>
        <div className='flex items-center justify-center gap-3'>
          <Link href={'/home'}>
            <p
              className={
                router.pathname === '/home'
                  ? 'text-green-700 font-semibold'
                  : 'font-semibold'
              }
            >
              Inicio
            </p>
          </Link>
          <Link href={'/profile'}>
            <User
              size={32}
              className={router.pathname === '/profile' ? 'text-green-700' : ''}
            />
          </Link>

          <Dialog.Root>
            <Dialog.Trigger>
              <ShoppingCart size={32} />
            </Dialog.Trigger>

            <ShoppingCartModal />
          </Dialog.Root>
        </div>
      </nav>

      <div className='max-w-[1100px] m-auto px-4 py-8'>{children}</div>

      <footer className='w-full bg-neutral-800 px-4 py-4 flex items-center justify-center h-36 mt-10 text-2xl font-semibold'>
        Oorders!!
      </footer>
    </>
  )
}

export default Layout
