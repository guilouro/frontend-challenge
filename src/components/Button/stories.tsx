import { Story, Meta } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    as: {
      type: ''
    }
  },
  args: {
    children: 'Add product'
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />
