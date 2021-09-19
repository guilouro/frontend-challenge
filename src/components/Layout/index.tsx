import { Container } from 'components/Container'
import HeaderBar from 'components/HeaderBar'
import Image from 'next/image'
import * as S from './styles'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <main>
    <HeaderBar>
      <S.Header>
        <Image src="/img/logo.svg" width={110} height={33} alt="Barkyn Brand" />
      </S.Header>
    </HeaderBar>
    <Container>{children}</Container>
  </main>
)

export default Layout
