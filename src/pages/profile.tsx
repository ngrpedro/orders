import React from 'react'

const Profile = () => {
  return (
    <div className='space-y-10'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='bg-neutral-500 rounded-full w-28 h-28'></div>
        <div className='flex flex-col items-center justify-center'>
          <span className='font-bold text-xl'>Pedro Soares</span>
          <span className='text-sm'>ngrpedro@gmail.com</span>
        </div>
      </div>

      <hr className='border-neutral-600' />

      <div className='space-y-3'>
        <h2 className='font-semibold'>Todos os pedidos</h2>

        <div className='grid grid-cols-3 gap-3 p-2 bg-neutral-800 rounded-md'>
          <span className='col-span-3 font-semibold'>10 de janeiro</span>

          <div className='col-span-2'>
            <span className='block'>Brahma Garraf...</span>
            <span className='block'>Coca cola (33...</span>
          </div>

          <div className='text-end'>
            <span className='block font-semibold'>35,00</span>
            <span className='block text-green-500 font-semibold'>Ver mais</span>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 p-2 bg-neutral-800 rounded-md'>
          <span className='col-span-3 font-semibold'>10 de janeiro</span>

          <div className='col-span-2'>
            <span className='block'>Brahma Garraf...</span>
            <span className='block'>Coca cola (33...</span>
          </div>

          <div className='text-end'>
            <span className='block font-semibold'>35,00</span>
            <span className='block text-green-500 font-semibold'>Ver mais</span>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3 p-2 bg-neutral-800 rounded-md'>
          <span className='col-span-3 font-semibold'>10 de janeiro</span>

          <div className='col-span-2'>
            <span className='block'>Brahma Garraf...</span>
            <span className='block'>Coca cola (33...</span>
          </div>

          <div className='text-end'>
            <span className='block font-semibold'>35,00</span>
            <span className='block text-green-500 font-semibold'>Ver mais</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
