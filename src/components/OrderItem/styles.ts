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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    span {
      color: ${theme.colors.textLight};
    }
  `}
`
