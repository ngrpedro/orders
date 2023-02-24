import { Controller, useForm } from 'react-hook-form'
import React from 'react'
import { X } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from '@/context/ShoppingCartContext'

const AdreesPaymentType = z.object({
  cep: z.number().min(3),
  rua: z.string().min(3),
  numero: z.string().min(3),
  bairro: z.string().min(3),
  complemento: z.string(),
  paymentMode: z.enum(['pix', 'credito', 'debito']),
})

type AdressPaymentInputs = z.infer<typeof AdreesPaymentType>

const AdressPaymentModal = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AdressPaymentInputs>({
    resolver: zodResolver(AdreesPaymentType),
  })

  const handleAdressPayment = (data: AdressPaymentInputs) => {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed w-screen h-screen inset-0 bg-black opacity-70' />
      <Dialog.Content
        className='bg-zinc-800 max-w-[650px] w-full rounded-sm'
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
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            <div>
              <input
                {...register('cep', { valueAsNumber: true })}
                className='bg-neutral-700 w-full rounded-md px-4 py-2'
                type='number'
                placeholder='CEP'
              />
              {errors.cep ? <small>CEP é obrigatório</small> : <small></small>}
            </div>

            <div className='sm:col-span-2 md:col-span-3'>
              <input
                {...register('rua')}
                className='bg-neutral-700 w-full rounded-md px-4 py-2'
                type='text'
                placeholder='Rua'
              />
              {errors.rua ? <small>Rua é obrigatório</small> : <small></small>}
            </div>

            <div>
              <input
                {...register('numero')}
                className='bg-neutral-700 w-full rounded-md px-4 py-2'
                type='text'
                placeholder='Numero'
              />

              {errors.numero ? (
                <small>Número é obrigatório</small>
              ) : (
                <small></small>
              )}
            </div>

            <div className='sm:col-span-2 md:col-span-2'>
              <input
                {...register('bairro')}
                className='bg-neutral-700 w-full rounded-md px-4 py-2'
                type='text'
                placeholder='Bairro'
              />
              {errors.bairro ? (
                <small>Bairro é obrigatório</small>
              ) : (
                <small></small>
              )}
            </div>

            <div className='sm:col-span-2 md:col-span-3'>
              <input
                {...register('complemento')}
                className='bg-neutral-700 w-full rounded-md px-4 py-2'
                type='text'
                placeholder='Complemento'
              />
            </div>
          </div>

          <div>
            <Controller
              name='paymentMode'
              control={control}
              render={({ field }) => {
                return (
                  <RadioGroup.Root
                    defaultValue='pix'
                    onValueChange={field.onChange}
                    value={field.value}
                    className='flex items-start justify-center gap-2'
                  >
                    <RadioGroup.Item
                      value={'pix'}
                      className='px-4 py-3 bg-purple-800 opacity-30 rounded-md w-full aria-checked:opacity-90'
                    >
                      Pix
                    </RadioGroup.Item>

                    <RadioGroup.Item
                      value={'credito'}
                      className='px-4 py-3 bg-purple-800 opacity-30 rounded-md w-full aria-checked:opacity-90'
                    >
                      Crédito
                    </RadioGroup.Item>

                    <RadioGroup.Item
                      value={'debito'}
                      className='px-4 py-3 bg-purple-800 opacity-30 rounded-md w-full aria-checked:opacity-90'
                    >
                      Débito
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                )
              }}
            />
            <small>Selecione a forma de pagamento</small>
          </div>

          <button className='px-4 py-2 bg-green-800 text-white font-semibold w-full rounded-md'>
            Confirmar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default AdressPaymentModal
