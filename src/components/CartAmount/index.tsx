import formatPrice from 'utils/format-price'

import * as S from './styles'

export type CartAmountProps = {
  subtotal: number
  shipping?: number
  omitShipping?: boolean
}

const CartAmount = ({
  subtotal,
  shipping = 0,
  omitShipping = false
}: CartAmountProps) => (
  <S.Wrapper>
    <S.Item>
      <span>Subtotal</span>
      <strong>{formatPrice(subtotal)}</strong>
    </S.Item>
    {!omitShipping ? (
      <>
        <S.Item>
          <span>Shipping</span>
          <S.Shipping>{shipping ? formatPrice(shipping) : 'Free'}</S.Shipping>
        </S.Item>
        <S.Item>
          <span>Total</span>
          <strong>{formatPrice(subtotal + shipping)}</strong>
        </S.Item>
      </>
    ) : null}
  </S.Wrapper>
)

export default CartAmount
