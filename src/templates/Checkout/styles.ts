import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Image = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    height: 100%;
  `}
`
export const Content = styled(Container).attrs({ mobileFullWidth: true })`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      gap: ${theme.spacings.medium};
      grid-template-columns: 23rem 1.1fr 1fr;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text};
    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      padding-top: ${theme.spacings.medium};
      padding-bottom: ${theme.spacings.small};
    `}
  `}
`

export const SectionForm = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xsmall};
    background-color: ${theme.colors.mainBg};
  `}
`

export const OrderBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xsmall} ${theme.spacings.small};

    ${media.greaterThan('medium')`
      box-shadow: ${theme.shadow.medium};
    `}
  `}
`

export const OrderItem = styled.div`
  ${({ theme }) => css`
    display: table;
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    border-bottom: 1px solid ${theme.colors.line};
  `}
`
