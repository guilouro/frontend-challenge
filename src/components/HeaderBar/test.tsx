import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import HeaderBar from '.'

describe('<HeaderBar />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <HeaderBar>
        <h1>Barkyn</h1>
      </HeaderBar>
    )

    expect(screen.getByRole('heading', { name: /barkyn/i })).toBeInTheDocument()
    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      theme.shadow.medium
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
