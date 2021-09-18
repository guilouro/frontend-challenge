import 'intl.mock'
import { render, screen } from 'utils/test-utils'

import PromotionalPrice from '.'

describe('<PromotionalPrice />', () => {
  it('should render price in label', () => {
    render(<PromotionalPrice price={2.29} />)

    expect(screen.getByText('2.29')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a line-through in price when promotional', () => {
    const { container } = render(
      <PromotionalPrice price={2.29} promotionalPrice={1.29} />
    )

    expect(screen.getByText('2.29')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('1.29')).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
