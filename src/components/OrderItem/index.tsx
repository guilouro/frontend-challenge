import Image from 'next/image'
import formatPrice from 'utils/format-price'
import * as S from './styles'

export type OrderItemProps = {
  title: string
  image: string
  price: number
}

const OrderItem = ({ title, image, price }: OrderItemProps) => (
  <S.Wrapper>
    <S.Image>
      <Image src={image} width={64} height={64} alt={title} loading="lazy" />
    </S.Image>

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Info>
        <span>Price</span>
        <strong>{formatPrice(price)}</strong>
      </S.Info>
    </S.Content>
  </S.Wrapper>
)

export default OrderItem
