import 'intl.mock'
import { render, screen } from 'utils/test-utils'

import CartAmount from '.'

describe('<CartAmount />', () => {
  it('should show free when shipping is empty', () => {
    const { container } = render(<CartAmount subtotal={2.9} />)

    expect(screen.getAllByText('2.9')).toHaveLength(2)
    expect(screen.getByText(/free/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should show shipping value', () => {
    render(<CartAmount subtotal={2.9} shipping={1.1} />)

    expect(screen.getByText('2.9')).toBeInTheDocument()
    expect(screen.getByText('1.1')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })
})
