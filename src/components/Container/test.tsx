import theme from 'styles/theme'
import { render } from 'utils/test-utils'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Barkyn</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  width: 100%;
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(3.2rem / 2);
  padding-right: calc(3.2rem / 2);
}

<div
  class="c0"
>
  <span>
    Barkyn
  </span>
</div>
`)
  })
})
