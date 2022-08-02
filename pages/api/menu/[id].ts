// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { menus } from './data.json';

import { Product } from '../../types';

export type ProductResponse = {
  products: Array<Product>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse>
) {
  const { id } = req.query;
  const menu = menus.find((menu) => menu.id.toString() === id) || {
    products: [],
  };
  res.status(menu.products.length > 0 ? 200 : 404).json(menu);
}
