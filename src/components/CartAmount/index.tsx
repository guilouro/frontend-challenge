import formatPrice from 'utils/format-price'

import * as S from './styles'

export type CartAmountProps = {
  subtotal: number
  shipping?: number
}

const CartAmount = ({ subtotal, shipping = 0 }: CartAmountProps) => (
  <S.Wrapper>
    <S.Item>
      <span>Subtotal</span>
      <strong>{formatPrice(subtotal)}</strong>
    </S.Item>
    <S.Item>
      <span>Shipping</span>
      <S.Shipping>{shipping ? formatPrice(shipping) : 'Free'}</S.Shipping>
    </S.Item>
    <S.Item>
      <span>Total</span>
      <strong>{formatPrice(subtotal + shipping)}</strong>
    </S.Item>
  </S.Wrapper>
)

export default CartAmount
