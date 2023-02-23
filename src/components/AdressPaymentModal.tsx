import { useForm } from 'react-hook-form'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import * as z from 'zod'

const AdreesPaymentType = z.object({
  cep: z.number(),
  rua: z.string(),
  numero: z.number(),
  bairro: z.string(),
  complemento: z.string(),
})

type AdressPaymentInputs = z.infer<typeof AdreesPaymentType>

const AdressPaymentModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdressPaymentInputs>()

  const handleAdressPayment = (data: AdressPaymentInputs) => {}
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed w-screen h-screen inset-0 bg-black opacity-70' />
      <Dialog.Content
        className='bg-zinc-800 max-w-[320px] w-full rounded-sm'
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className='flex items-center justify-between px-6 pt-6'>
          <Dialog.Title className='text-xl font-bold'>
            Detalhes de endereço e pagamento
          </Dialog.Title>
          <Dialog.Close>
            <X size={18} />
          </Dialog.Close>
        </div>
        <form
          className='space-y-8 p-4'
          onSubmit={handleSubmit(handleAdressPayment)}
        >
          <div className='space-y-3'>
            <input
              {...register('cep', { valueAsNumber: true })}
              className='bg-neutral-700 w-full rounded-md px-4 py-2'
              type='number'
              placeholder='CEP'
              required
            />
            <input
              {...register('rua')}
              className='bg-neutral-700 w-full rounded-md px-4 py-2'
              type='text'
              placeholder='Rua'
              required
            />
            <input
              {...register('numero')}
              className='bg-neutral-700 w-full rounded-md px-4 py-2'
              type='number'
              placeholder='Numero'
              required
            />
            <input
              {...register('bairro')}
              className='bg-neutral-700 w-full rounded-md px-4 py-2'
              type='text'
              placeholder='Bairro'
              required
            />
            <input
              {...register('complemento')}
              className='bg-neutral-700 w-full rounded-md px-4 py-2'
              type='text'
              placeholder='Complemento'
              required
            />
          </div>

          <button className='px-4 py-2 bg-blue-800 text-white font-semibold w-full rounded-md'>
            Confirmar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default AdressPaymentModal
