import Image from 'next/image'
import { ProductItemProps } from 'components/ProductItem'
import * as S from './styles'
import PromotionalPrice from 'components/PromotionalPrice'

export type CartItemProps = {
  quantity?: number
  onClickRemove: (event: React.MouseEvent<HTMLElement>) => void
  onChangeQuantity: React.ChangeEventHandler<HTMLInputElement>
} & Omit<ProductItemProps, 'review' | 'onClickButton'>

const CartItem = ({
  title,
  image,
  price,
  promotionalPrice,
  packageInfo,
  quantity = 1,
  onClickRemove,
  onChangeQuantity
}: CartItemProps) => (
  <S.Wrapper>
    <S.Image>
      <Image src={image} alt={title} width={64} height={64} loading="lazy" />
    </S.Image>
    <S.Info>
      <S.Item>
        <S.Title>{title}</S.Title>
        <S.RemoveButton
          role="button"
          aria-label={`Remove ${title}`}
          onClick={onClickRemove}
        >
          <Image src="/img/delete.svg" width={20} height={20} loading="lazy" />
        </S.RemoveButton>
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
          <S.Select
            id="quantity"
            type="number"
            name="quantity"
            value={quantity}
            onChange={onChangeQuantity}
            min="1"
          >
            {[...Array(4).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </S.Select>
        </span>
      </S.Item>
    </S.Info>
  </S.Wrapper>
)

export default CartItem
