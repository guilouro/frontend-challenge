import Layout from 'components/Layout'
import ProductItem, { ProductItemProps } from 'components/ProductItem'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

export type HomeTemplateProps = {
  items: Omit<ProductItemProps, 'onClickButton'>[]
}

const Home = ({ items = [] }: HomeTemplateProps) => {
  const { addToCart } = useCart()

  return (
    <Layout>
      <S.SectionHeader>
        <S.Title>Store</S.Title>
        <S.SubTitle>Explore our vast selection of premium products</S.SubTitle>
      </S.SectionHeader>

      <S.List>
        {items.map((item) => (
          <ProductItem
            key={item.id}
            {...item}
            onClickButton={() => addToCart(item)}
          />
        ))}
      </S.List>
    </Layout>
  )
}

export default Home
