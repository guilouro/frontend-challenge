import Image from 'next/image'
import { ProductItemProps } from 'components/ProductItem'
import * as S from './styles'
import PromotionalPrice from 'components/PromotionalPrice'

export type CartItemProps = {
  quantity?: number
} & Omit<ProductItemProps, 'review'>

const CartItem = ({
  title,
  image,
  price,
  promotionalPrice,
  packageInfo,
  quantity = 1
}: CartItemProps) => (
  <S.Wrapper>
    <S.Image>
      <Image src={image} alt={title} width={64} height={64} loading="lazy" />
    </S.Image>
    <S.Info>
      <S.Item>
        <S.Title>{title}</S.Title>
        <span>X</span>
      </S.Item>
      <S.Item>
        <span>Price</span>
        <PromotionalPrice
          promotionalPrice={promotionalPrice}
          price={price}
          dark
        />
      </S.Item>
      <S.Item>
        <span>Package</span>
        <span>{packageInfo}</span>
      </S.Item>
      <S.Item>
        <label htmlFor="quantity">Quantity</label>
        <span>
          <input
            id="quantity"
            type="number"
            name="quantity"
            defaultValue={quantity}
            maxLength={2}
          />
        </span>
      </S.Item>
    </S.Info>
  </S.Wrapper>
)

export default CartItem
