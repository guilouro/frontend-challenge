import Link from 'next/link'
import Image from 'next/image'
import CartAmount from 'components/CartAmount'
import CartItem from 'components/CartItem'
import HeaderBar from 'components/HeaderBar'
import { useCart } from 'hooks/use-cart'
import * as S from './styles'
import Button from 'components/Button'

const CartSlider = () => {
  const {
    items,
    total,
    sliderIsOpen,
    closeSlider,
    removeFromCart,
    setItemQuantity,
    quantity
  } = useCart()
  return (
    <S.Wrapper isOpen={sliderIsOpen}>
      <HeaderBar>
        <S.Header>
          <h1>Your Cart</h1>
          <span>{quantity} items</span>
          <S.CloseButton
            role="button"
            aria-label="Close Slider"
            onClick={closeSlider}
          >
            <Image src="/img/close.svg" width={25} height={25} loading="lazy" />
          </S.CloseButton>
        </S.Header>
      </HeaderBar>

      {items.map((item) => (
        <S.Item key={item.id}>
          <CartItem
            {...item}
            onClickRemove={() => removeFromCart(item.id)}
            onChangeQuantity={(e) =>
              setItemQuantity(item.id, Number(e.target.value))
            }
          />
        </S.Item>
      ))}
      <S.Content>
        <CartAmount subtotal={total} omitShipping />
        <Link href="/checkout" passHref>
          <Button as="a">Go to checkout</Button>
        </Link>
      </S.Content>
    </S.Wrapper>
  )
}

export default CartSlider
