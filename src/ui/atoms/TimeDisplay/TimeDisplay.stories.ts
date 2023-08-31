import type { Meta, StoryObj } from '@storybook/react'

import TimeDisplay from './TimeDisplay'

const meta = {
    title: 'TimeManagement-UI/atoms/TimeDisplay',
    component: TimeDisplay,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof TimeDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        msTime: 120000,
    },
  };