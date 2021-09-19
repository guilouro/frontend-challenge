import { render, screen } from 'utils/test-utils'

import CartSlider from '.'

describe('<CartSlider />', () => {
  it.skip('should render the heading', () => {
    const { container } = render(<CartSlider />)

    expect(
      screen.getByRole('heading', { name: /CartSlider/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
