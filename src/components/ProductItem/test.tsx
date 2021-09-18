import 'intl.mock'
import { render, screen } from 'utils/test-utils'

import ProductItem from '.'

const props = {
  title: 'Barkyn Cannabis Oil para cães',
  image: '/img/products/oil.png',
  price: 2.29,
  packageInfo: '170g',
  review: 3
}

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
})
