import formatPrice from 'utils/format-price'
import * as S from './styles'

export type PromotionalPriceProps = {
  price: number
  promotionalPrice?: number
  dark?: boolean
}

const PromotionalPrice = ({
  price,
  promotionalPrice = 0,
  dark = false
}: PromotionalPriceProps) => (
  <div>
    {promotionalPrice ? (
      <S.Price isPromotional>{formatPrice(price)}</S.Price>
    ) : null}
    <S.Price dark={dark}>{formatPrice(promotionalPrice || price)}</S.Price>
  </div>
)

export default PromotionalPrice
