import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<ButtonTypes, ButtonProps> = (
  { children, ...props },
  ref
) => (
  <S.Wrapper {...props} ref={ref}>
    <span>{children}</span>
  </S.Wrapper>
)

export default forwardRef(Button)
