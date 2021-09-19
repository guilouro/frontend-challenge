import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ContainerProps = {
  mobileFullWidth?: boolean
}

const containerModifiers = {
  fullWidth: () => css`
    ${media.lessThan('medium')`
      padding-left: 0;
      padding-right: 0;
    `}
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, mobileFullWidth }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

    ${mobileFullWidth && containerModifiers.fullWidth()};
  `}
`
