import styled, { css, DefaultTheme } from 'styled-components'
import { PromotionalPriceProps } from '.'

type PriceProps = {
  isPromotional?: boolean
} & Pick<PromotionalPriceProps, 'dark'>

const priceModifiers = {
  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.textLight};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
    font-weight: ${theme.font.normal};
  `,

  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.text};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, dark, isPromotional = false }) => css`
    display: inline-flex;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.base};

    ${isPromotional && priceModifiers.promotional(theme)}
    ${dark && priceModifiers.dark(theme)}
  `}
`
