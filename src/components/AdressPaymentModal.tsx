import React from 'react'
import { X } from 'phosphor-react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Dialog from '@radix-ui/react-dialog'
import { useFormContext, Controller } from 'react-hook-form'

const AdressPaymentModal = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext()
  console.log(errors.paymentMode)
  return (
    <>
      <h2 className='text-xl font-bold'>Detalhes de endereço</h2>
      <div className='space-y-8'>
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
          <h2 className='text-xl font-bold mb-6'>Pagamento</h2>

          <Controller
            name='paymentMode'
            control={control}
            render={({ field }) => {
              return (
                <RadioGroup.Root
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
                      {errors.paymentMode ? (
              <small className="text-red-500">Forma de pagamento é obrigatório</small>
            ) : (
              <small>Selecione a forma de pagamento</small>
            )}
        </div>
      </div>
    </>
  )
}

export default AdressPaymentModal
