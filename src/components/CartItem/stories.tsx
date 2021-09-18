import { Story, Meta } from '@storybook/react'
import CartItem, { CartItemProps } from '.'

export default {
  title: 'CartItem',
  component: CartItem,
  args: {
    title: 'Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 2.29,
    promotionalPrice: 2.24,
    packageInfo: '170g',
    quantity: 2
  }
} as Meta

export const Default: Story<CartItemProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <CartItem {...args} />
  </div>
)
