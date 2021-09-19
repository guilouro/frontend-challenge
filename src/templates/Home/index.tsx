import Layout from 'components/Layout'
import ProductItem, { ProductItemProps } from 'components/ProductItem'

import * as S from './styles'

export type HomeTemplateProps = {
  items: ProductItemProps[]
}

function Home({ items = [] }: HomeTemplateProps) {
  return (
    <Layout>
      <S.SectionHeader>
        <S.Title>Store</S.Title>
        <S.SubTitle>Explore our vast selection of premium products</S.SubTitle>
      </S.SectionHeader>

      <S.List>
        {items.map((item, i) => (
          <ProductItem key={i} {...item} />
        ))}
      </S.List>
    </Layout>
  )
}

export default Home
