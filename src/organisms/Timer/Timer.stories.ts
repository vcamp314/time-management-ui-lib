import type { Meta, StoryObj } from '@storybook/react'

import Timer from '.'

const meta = {
    title: 'TimeManagement-UI/organisms/Timer',
    component: Timer,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Timer>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}