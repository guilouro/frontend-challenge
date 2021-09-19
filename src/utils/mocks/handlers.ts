import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.barkyn/products', (_, res, ctx) => {
    return res(
      ctx.json({
        page: 1,
        count: 6,
        results: [
          {
            id: '1',
            title: 'Barkyn Cannabis Oil para cães',
            image: '/img/products/oil.png',
            price: 35.99,
            packageInfo: '170g',
            review: 4
          },
          {
            id: '2',
            title: '4M. Super-comida Sénior Mini Peru e Frango',
            image: '/img/products/food.png',
            price: 2.29,
            promotionalPrice: 2.24,
            packageInfo: '170g',
            review: 5
          },
          {
            id: '3',
            title: 'Barkyn Zen Treats',
            image: '/img/products/treats.png',
            price: 2.49,
            promotionalPrice: 2.14,
            packageInfo: '170g',
            review: 5
          },
          {
            id: '4',
            title: 'Super-comida Adulto Mini Salmão',
            image: '/img/products/food.png',
            price: 2.29,
            promotionalPrice: 2.24,
            packageInfo: '170g',
            review: 3
          },
          {
            id: '5',
            title: 'Barkyn Meat Bits',
            image: '/img/products/bits.jpeg',
            price: 2.49,
            packageInfo: '170g',
            review: 3
          },
          {
            id: '6',
            title: 'Barkyn Natural Flavour Sea Lobster',
            image: '/img/products/lobster.jpeg',
            price: 1.99,
            promotionalPrice: 1.29,
            packageInfo: '170g',
            review: 3
          }
        ]
      })
    )
  })
]
