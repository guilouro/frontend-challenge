import { render, screen } from 'utils/test-utils'

import Layout from '.'

describe('<Layout />', () => {
  it('should render correctly', () => {
    render(
      <Layout>
        <h1>Lorem Ipsum</h1>
      </Layout>
    )

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /barkyn brand/i })
    ).toBeInTheDocument()
  })
})
