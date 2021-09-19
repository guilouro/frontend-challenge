import HeaderBar from 'components/HeaderBar'
import Image from 'next/image'
import * as S from './styles'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <HeaderBar>
      <S.Header>
        <Image src="/img/logo.svg" width={120} height={35} alt="Barkyn Brand" />
      </S.Header>
    </HeaderBar>
    {children}
  </S.Wrapper>
)

export default Layout
