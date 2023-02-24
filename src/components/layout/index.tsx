import React, { ReactNode } from 'react'
import {
  User,
  ShoppingCart,
  House,
  InstagramLogo,
  FacebookLogo,
} from 'phosphor-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/beer-logo.png'
import { useSession } from 'next-auth/react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  const { status } = useSession()

  return (
    <>
      <nav className='w-full bg-neutral-800 px-8 py-3 flex items-center justify-between'>
        <Link href='/'>
          <Image src={logo} width={40} height={40} alt='' />
        </Link>
        <div className='flex items-center justify-center gap-3'>
          <Link href={'/home'}>
            <p
              className={
                router.pathname === '/home'
                  ? 'text-green-700 font-semibold'
                  : 'font-semibold'
              }
            >
              <House
                weight='fill'
                size={28}
                className={router.pathname === '/home' ? 'text-green-500' : ''}
              />
            </p>
          </Link>
          <Link href={'/shoppingCart'}>
            <ShoppingCart
              weight='fill'
              className={
                router.pathname === '/shoppingCart' ? 'text-green-500' : ''
              }
              size={28}
            />
          </Link>
          <Link href={'/profile'}>
            <User
              weight='fill'
              size={28}
              className={router.pathname === '/profile' ? 'text-green-500' : ''}
            />
          </Link>
        </div>
      </nav>

      <div className='max-w-[1100px] m-auto px-4 py-8'>{children}</div>

      <footer className=' w-full bg-neutral-800 px-4 py-4 flex items-center justify-center gap-5 mt-10 text-2xl font-semibold'>
        <InstagramLogo size={32} />
        <FacebookLogo size={32} />
      </footer>
    </>
  )
}

export default Layout
