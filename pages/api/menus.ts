// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Menu } from '../types';

export type MenuResponse = {
  menus: Array<Menu>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuResponse>
) {
  res.status(200).json({
    menus: [
      { id: 1, name: 'Starters' },
      { id: 2, name: 'Mains' },
      { id: 3, name: 'Drinks' },
      { id: 4, name: 'Desserts' },
    ],
  });
}
