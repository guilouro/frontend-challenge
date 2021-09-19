import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 7rem;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.medium};
    padding: ${theme.spacings.xxsmall};
    z-index: ${theme.layers.base};
    position: relative;
  `}
`
