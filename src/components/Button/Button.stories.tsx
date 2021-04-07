import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from './Button'

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Variants: Story<ButtonProps> = (args) => <Button {...args} />
Variants.args = {
  primary: true,
  label: 'Button',
  size: 'medium',
}
