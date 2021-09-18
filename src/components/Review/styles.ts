import styled, { css } from 'styled-components'

type StarProps = {
  isGold: boolean
}

export const Star = styled.svg<StarProps>`
  ${({ isGold }) => css`
    color: ${isGold ? '#f1c40f' : '#e7e7e9'};
  `}
`
