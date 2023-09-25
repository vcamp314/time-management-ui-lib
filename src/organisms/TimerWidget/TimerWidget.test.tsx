import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import TimerWidget from './'

const sessionStages = [
  {
    id: 0,
    name: 'focused work 2',
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
// TODO add tests for invalid input (for other components too)
// TODO add tests for callback functionality (for other components too)
// TODO decide how to handle reset button in the widget (global reset versus reset stage only)
// TODO figure out how to handle double checking timer time (given that the design may change)

describe('TimeDisplay', () => {
  it('renders first stage info initially', () => {
    render(<TimerWidget stages={sessionStages} />)

    expect(screen.getByText(/1:00$/)).toBeTruthy()
    expect(screen.getByText(sessionStages[0].name)).toBeTruthy()
  })
  it('renders second stage once first stage duration has elapsed', () => {
    jest.useFakeTimers()
    render(<TimerWidget stages={sessionStages} />)
    const startButton = screen.getByText('Start')

    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(60 * 1000 + 5000)
    })
    expect(screen.getByText(/2:00$/)).toBeTruthy()
    expect(screen.getByText(sessionStages[1].name)).toBeTruthy()
  })
  it('Stops timer at last stage stage once first stage duration has elapsed', () => {
    jest.useFakeTimers()
    render(<TimerWidget stages={sessionStages} />)
    let startButton = screen.getByText('Start')

    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(60 * 1000 + 5000)
    })

    startButton = screen.getByText('Start')
    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(2 * 60 * 1000 + 5000)
    })

    startButton = screen.getByText('Start')
    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(3 * 60 * 1000 + 5000)
    })

    expect(screen.getByText('00:00:00')).toBeTruthy()
    expect(screen.getByText(sessionStages[2].name)).toBeTruthy()
  })
})
