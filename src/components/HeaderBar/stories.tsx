import { Story, Meta } from '@storybook/react'
import HeaderBar, { HeaderBarProps } from '.'

export default {
  title: 'HeaderBar',
  component: HeaderBar,
  args: {
    children: <h1>Barkyn</h1>
  },
  argTypes: {
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story<HeaderBarProps> = (args) => <HeaderBar {...args} />
