import Image from 'next/image'
import Button from 'components/Button'
import Review, { ReviewProps } from 'components/Review'
import PromotionalPrice, {
  PromotionalPriceProps
} from 'components/PromotionalPrice'

import * as S from './styles'

export type ProductItemProps = {
  title: string
  packageInfo: string
  image: string
} & ReviewProps &
  PromotionalPriceProps

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
        <PromotionalPrice promotionalPrice={promotionalPrice} price={price} />
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
