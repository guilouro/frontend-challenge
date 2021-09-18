import { Story, Meta } from '@storybook/react'
import PromotionalPrice, { PromotionalPriceProps } from '.'

export default {
  title: 'PromotionalPrice',
  component: PromotionalPrice,
  args: {
    promotionalPrice: 1.99,
    price: 2.98,
    dark: false
  }
} as Meta

export const Default: Story<PromotionalPriceProps> = (args) => (
  <PromotionalPrice {...args} />
)
