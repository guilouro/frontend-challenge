import Home from 'templates/Home'

const items = [
  {
    id: '1',
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 2.29,
    promotionalPrice: 2.24,
    packageInfo: '170g',
    review: 3
  },
  {
    id: '2',
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 2.29,
    promotionalPrice: 2.24,
    packageInfo: '170g',
    review: 3
  },
  {
    id: '3',
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 2.29,
    promotionalPrice: 2.24,
    packageInfo: '170g',
    review: 3
  },
  {
    id: '4',
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 2.29,
    promotionalPrice: 2.24,
    packageInfo: '170g',
    review: 3
  },
  {
    id: '5',
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 2.29,

    packageInfo: '170g',
    review: 3
  },
  {
    id: '6',
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/cannabis.png',
    price: 2.29,

    packageInfo: '170g',
    review: 5
  }
]

export default function Index() {
  return <Home items={items} />
}
