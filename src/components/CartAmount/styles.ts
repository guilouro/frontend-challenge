import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text};
    margin: ${theme.spacings.xsmall} 0;

    &:nth-child(3) {
      border-top: 1px solid ${theme.colors.line};
      padding-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Shipping = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.success};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
