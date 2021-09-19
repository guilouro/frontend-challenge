import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.textLight};
  `}
`

type InputProps = {
  error?: boolean
}

const inputModifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.error};
  `
}

export const Input = styled.input<InputProps>`
  ${({ theme, error }) => css`
    border: 2px solid ${theme.colors.line};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    ${!!error && inputModifiers.error(theme)}
  `}
`
