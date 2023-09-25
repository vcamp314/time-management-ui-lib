import type { Meta, StoryObj } from '@storybook/react'

import TimerWidget from '.'

const meta = {
  title: 'TimeManagement-UI/organisms/TimerWidget',
  component: TimerWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TimerWidget>

export default meta
type Story = StoryObj<typeof meta>;

const sessionStages = [
  {
    id: 0,
    name: 'focused work',
    duration: 60 * 1000,
  },
  {
    id: 1,
    name: 'exercise break',
    duration: 2 * 60 * 1000,
  },
  {
    id: 2,
    name: 'cleaning/admin tasks',
    duration: 3 * 60 * 1000,
  },
]

export const Basic: Story = {
  args: {
    stages: sessionStages,
  },
}
