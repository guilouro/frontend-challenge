import { render, screen } from 'utils/test-utils'

import Review from '.'

describe('<Review />', () => {
  it('should render correctly without stars', () => {
    const { container } = render(<Review />)
    expect(
      screen.getByRole('img', { name: /0 stars of 5/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with 3 stars', () => {
    const stars = 3
    render(<Review review={stars} />)

    const el = screen.getByRole('img', { name: /3 stars of 5/i })
    expect(el).toBeInTheDocument()

    el.querySelectorAll('svg').forEach((item, idx) => {
      expect(item).toHaveStyleRule(
        'color',
        idx + 1 <= stars ? '#f1c40f' : '#e7e7e9'
      )
    })
  })
})
