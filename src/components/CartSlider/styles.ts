import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    overflow-x: scroll;
    background-color: ${theme.colors.white};
    height: 100%;
    top: 0;
    z-index: ${theme.layers.modal};
    box-shadow: ${theme.shadow.medium};
    transition: ${theme.transition.fast} all;

    ${media.lessThan('medium')`
      width: 100%;
      right: ${isOpen ? 0 : '-100%'};

    `}

    ${media.greaterThan('medium')`
      width: 47rem;
      right: ${isOpen ? 0 : '-47rem'};
    `}
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xxsmall};
    grid-template-columns: 6fr 1fr 2.5rem;
    align-items: center;
    height: 100%;
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.line};
  `}
`

export const CloseButton = styled.div`
  cursor: pointer;
  width: 2.5rem;
`
