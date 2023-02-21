import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'POST':
      const { name, price } = req.body
      const convertPrice = parseFloat(price)

      const product = await prisma.product.create({
        data: {
          name,
          price: convertPrice,
        },
      })

      return res.status(201).json(product)

    case 'GET':
      const products = await prisma.product.findMany()
      return res.status(200).json(products)

    default:
      break
  }
}
