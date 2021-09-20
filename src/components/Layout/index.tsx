import { memo } from 'react'
import Link from 'next/link'
import HeaderBar from 'components/HeaderBar'
import Image from 'next/image'
import { useCart } from 'hooks/use-cart'
import CartSlider from 'components/CartSlider'
import router from 'next/router'

import * as S from './styles'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { quantity, openSlider, closeSlider } = useCart()

  router.events.on('routeChangeStart', closeSlider)

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
        <S.CartButton role="button" aria-label="Your Cart" onClick={openSlider}>
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
