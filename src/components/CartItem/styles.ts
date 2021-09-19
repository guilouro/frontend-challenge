import styled, { css } from 'styled-components'
import * as InputField from 'components/InputField/styles'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export const Image = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  flex: 1;
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.textLight};
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
  `}
`
export const Select = styled(InputField.Input).attrs({ as: 'select' })`
  ${({ theme }) => css`
    width: 5rem;
    padding: 0.3rem ${theme.spacings.xxsmall};
  `}
`

export const RemoveButton = styled.div`
  cursor: pointer;
`
