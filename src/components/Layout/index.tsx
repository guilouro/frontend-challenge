import { memo } from 'react'
import Link from 'next/link'
import HeaderBar from 'components/HeaderBar'
import Image from 'next/image'
import * as S from './styles'
import { useCart } from 'hooks/use-cart'
import CartSlider from 'components/CartSlider'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { quantity, openSlider } = useCart()
  return (
    <S.Wrapper>
      <HeaderBar>
        <Link href="/" passHref>
          <S.Header>
            <Image
              src="/img/logo.svg"
              width={120}
              height={35}
              alt="Barkyn Brand"
            />
          </S.Header>
        </Link>
        <S.CartButton role="button" onClick={openSlider}>
          <span>{quantity}</span>
          {quantity ? (
            <Image src="/img/cart_with_items.svg" width={32} height={32} />
          ) : (
            <Image src="/img/cart_empty.svg" width={32} height={32} />
          )}
        </S.CartButton>
        <CartSlider />
      </HeaderBar>
      {children}
    </S.Wrapper>
  )
}

export default memo(Layout)
