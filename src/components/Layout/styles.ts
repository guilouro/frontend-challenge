import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  height: 100%;
`

export const Header = styled.a`
  height: 100%;
  display: flex;
  align-items: center;

  ${media.greaterThan('medium')`
    justify-content: center;
  `}
`

export const CartButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 2rem;
  top: 1.8rem;
  cursor: pointer;
`
