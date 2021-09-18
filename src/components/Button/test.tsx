import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render as button', () => {
    const { container } = render(<Button>Click here</Button>)
    expect(
      screen.getByRole('button', { name: /click here/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render as link', () => {
    render(
      <Button as="a" href="/checkout">
        Click Here
      </Button>
    )
    expect(screen.getByRole('link', { name: /click here/i })).toHaveAttribute(
      'href',
      '/checkout'
    )
  })
})
