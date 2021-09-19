import { Story, Meta } from '@storybook/react'
import CartAmount, { CartAmountProps } from '.'

export default {
  title: 'CartAmount',
  component: CartAmount,
  args: {
    subtotal: 2.9
  }
} as Meta

export const Default: Story<CartAmountProps> = (args) => (
  <CartAmount {...args} />
)
