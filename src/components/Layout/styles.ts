import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  height: 100%;
`

export const Header = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ${media.greaterThan('medium')`
    justify-content: center;
  `}
`
