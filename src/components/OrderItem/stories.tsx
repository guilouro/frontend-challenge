import { Story, Meta } from '@storybook/react'
import OrderItem, { OrderItemProps } from '.'

export default {
  title: 'OrderItem',
  component: OrderItem,
  args: {
    title: '2x Barkyn Cannabis Oil para cães',
    image: '/img/products/oil.png',
    price: 4.58
  }
} as Meta

export const Default: Story<OrderItemProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <OrderItem {...args} />
  </div>
)
