import 'intl.mock'
import { render, screen } from 'utils/test-utils'

import CartItem from '.'

const props = {
  title: 'Barkyn Cannabis Oil para cães',
  image: '/img/products/oil.png',
  price: 2.29,
  promotionalPrice: 2.24,
  packageInfo: '170g'
}

describe('<CartItem />', () => {
  it('should render correctly', () => {
    const { container } = render(<CartItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()

    expect(screen.getByRole('spinbutton', { name: /quantity/i })).toHaveValue(1)

    expect(screen.getByText(props.promotionalPrice)).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render quantity based on props', () => {
    render(<CartItem {...props} quantity={4} />)

    expect(screen.getByRole('spinbutton', { name: /quantity/i })).toHaveValue(4)
  })
})
