import { memo } from 'react'

import * as S from './styles'

export type HeaderBarProps = {
  children: React.ReactNode
}

const HeaderBar = ({ children }: HeaderBarProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default memo(HeaderBar)
