import { render, screen } from 'utils/test-utils'

import ProductItem from '.'

const props = {
  title: 'Barkyn Cannabis Oil para cães',
  image: '/img/products/oil.png',
  price: 2.29,
  packageInfo: '170g',
  review: 3
}

beforeAll(() => {
  jest
    .spyOn(Intl, 'NumberFormat')
    .mockImplementation(
      () => ({ format: (value: number) => value.toString() } as never)
    )
})

afterAll(() => {
  jest.resetAllMocks()
})

describe('<ProductItem />', () => {
  it('should render correctly', () => {
    const { container } = render(<ProductItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<ProductItem {...props} />)

    const price = screen.getByText('2.29')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
  })

  it('should render a line-through in price when promotional', () => {
    render(<ProductItem {...props} promotionalPrice={1.29} />)

    expect(screen.getByText('2.29')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('1.29')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
