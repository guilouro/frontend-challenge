import { Story, Meta } from '@storybook/react'
import ProductItem, { ProductItemProps } from '.'

export default {
  title: 'ProductItem',
  component: ProductItem,
  args: {
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 2.29,
    promotionalPrice: 2.24,
    packageInfo: '170g',
    review: 3
  },
  argTypes: {
    review: {
      control: { type: 'range', min: 0, max: 5 }
    }
  }
} as Meta

export const Default: Story<ProductItemProps> = (args) => (
  <div style={{ maxWidth: 570 }}>
    <ProductItem {...args} />
  </div>
)
