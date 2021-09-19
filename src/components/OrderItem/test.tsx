import 'intl.mock'
import { render, screen } from 'utils/test-utils'

import OrderItem from '.'

const props = {
  title: '2x Barkyn Cannabis Oil para cães',
  image: '/img/products/oil.png',
  price: 4.58
}

describe('<OrderItem />', () => {
  it('should render correctly', () => {
    const { container } = render(<OrderItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()

    expect(screen.getByText(props.price)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
