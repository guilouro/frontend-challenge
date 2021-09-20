import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;
    background-color: ${theme.colors.base};

    p {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 2fr 1fr;

      strong {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  `}
`

export const Logo = styled.svg`
  ${({ theme }) => css`
    width: 12rem;
    fill: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
  `}
`
export const Description = styled.div`
  position: relative;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
    color: #d4ccff;

    strong {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Icon = styled.div`
  width: 4rem;
  margin: 0 auto;

  ${media.greaterThan('medium')`
    width: 4.8rem;
    position: absolute;
    left: -6rem;
  `}
`

export const Image = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
  `}
`

export const ProductImages = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const SectionDescription = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      padding-top: ${theme.spacings.large};
      text-align: initial;
      max-width: 60rem;
      justify-self: center;
      align-self: center;
    `}
  `}
`

export const SectionSummary = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};

    a {
      margin-top: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
  `}
`
