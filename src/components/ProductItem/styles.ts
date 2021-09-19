import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    display: grid;
    gap: 1rem;
    grid-template-columns: 14.8rem 1fr;
    grid-template-areas:
      'image info'
      'button button';

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};
      grid-template-columns: 20rem 1fr;
      grid-template-areas:
        'image info'
        'image button';
    `}
  `}
`

export const Image = styled.div`
  grid-area: image;

  ${media.lessThan('medium')`
    max-width: 14.8rem;
  `}
`

export const Info = styled.div`
  grid-area: info;
`

export const ButtonWrapper = styled.div`
  grid-area: button;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
    `}
  `}
`

export const PriceLabel = styled.span`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.textLight};
    margin: ${theme.spacings.xsmall} 0;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
