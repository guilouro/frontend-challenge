import { render, screen } from 'utils/test-utils'

import CartSlider from '.'

describe('<CartSlider />', () => {
  it('should render slider', () => {
    render(<CartSlider />)

    expect(
      screen.getByRole('heading', { name: /your cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /close slider/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go to checkout/i })
    ).toHaveAttribute('href', '/checkout')
  })
})
