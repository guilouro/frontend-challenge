import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export const Image = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  flex: 1;
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.textLight};
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
  `}
`
