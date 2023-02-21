import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, price } = req.body
  const convertPrice = parseFloat(price)

  const product = await prisma.product.create({
    data: {
      name,
      price: convertPrice,
    },
  })

  return res.status(201).json(product)
}
