import { Story, Meta } from '@storybook/react'
import Review, { ReviewProps } from '.'

export default {
  title: 'Review',
  component: Review,
  args: {
    review: 2
  },
  argTypes: {
    review: {
      control: { type: 'range', min: 0, max: 5 }
    }
  }
} as Meta

export const Default: Story<ReviewProps> = (args) => <Review {...args} />
