import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.base};
    border-radius: ${theme.border.radius};
    border: 0;
    color: #fff;
    cursor: pointer;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    min-height: 4rem;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: ${theme.transition.fast} background-color;

    &:hover {
      background-color: ${theme.colors.baseDark};
    }

    &:disabled {
      background-color: ${theme.colors.textLight};
    }
  `}
`
