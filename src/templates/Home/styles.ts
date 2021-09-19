import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionHeader = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.light};
    `}
  `}
`

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const List = styled(Container).attrs({ mobileFullWidth: true })`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
    `}
  `}
`
