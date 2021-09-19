import { Story, Meta } from '@storybook/react'
import Layout, { LayoutProps } from '.'

export default {
  title: 'Layout',
  component: Layout,
  args: {
    children: <p>Lorem, ipsum.</p>
  },
  argTypes: { children: { type: '' } }
} as Meta

export const Default: Story<LayoutProps> = (args) => <Layout {...args} />
