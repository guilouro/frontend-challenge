import Image from 'next/image'
import * as S from './styles'
import formatPrice from 'utils/format-price'
import Button from 'components/Button'
import Review, { ReviewProps } from 'components/Review'

export type ProductItemProps = {
  title: string
  price: number
  packageInfo: string
  image: string
  promotionalPrice?: number
} & ReviewProps

const ProductItem = ({
  title,
  price,
  packageInfo,
  review,
  image,
  promotionalPrice = 0
}: ProductItemProps) => (
  <S.Wrapper>
    <S.Image>
      <Image src={image} alt={title} width={200} height={200} loading="lazy" />
    </S.Image>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Item>
        <S.PriceLabel>Price</S.PriceLabel>
        <span>
          {promotionalPrice ? (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          ) : null}
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        </span>
      </S.Item>
      <S.Item>
        <span>Package</span>
        <span>{packageInfo}</span>
      </S.Item>
      <S.Item>
        <span>Review</span>
        <span>
          <Review review={review} />
        </span>
      </S.Item>
    </S.Info>
    <S.ButtonWrapper>
      <Button>Add to cart</Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default ProductItem
