import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Timer from './'

describe('Timer', () => {
  it('renders 40:00 given an original value of 40 minutes time', () => {
    render(<Timer duration={40 * 60 * 1000} name="test" />)

    expect(screen.getByText(/40:00$/)).toBeTruthy()
  })
  it('renders 15 seconds passed 15 seconds after start button is pressed', () => {
    jest.useFakeTimers()
    render(<Timer duration={40 * 60 * 1000} name="test" />)
    const startButton = screen.getByText('Start')

    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(15000)
    })
    expect(screen.getByText(/39:45$/)).toBeTruthy()
  })
  it('stops counting down when duration has elapsed', () => {
    jest.useFakeTimers()
    render(<Timer duration={5 * 60 * 1000} name="test" />)
    const startButton = screen.getByText('Start')

    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000 + 5 * 1000)
    })
    expect(screen.getByText('00:00:00')).toBeTruthy()
  })
  it('resets remaining time to initial value when reset button is pressed', () => {
    jest.useFakeTimers()
    const initialVlue = 40 * 60 * 1000
    render(<Timer duration={initialVlue} name="test" />)
    const startButton = screen.getByText('Start')

    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000)
    })

    const resetButton = screen.getByText('Reset')
    fireEvent.click(resetButton)

    expect(screen.getByText(/40:00$/)).toBeTruthy()
  })
  it('stops counter when pause button is pressed', () => {
    jest.useFakeTimers()
    const initialVlue = 40 * 60 * 1000
    render(<Timer duration={initialVlue} name="test" />)
    const togglePauseButton = screen.getByText('Start')

    fireEvent.click(togglePauseButton)

    act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000)
    })

    fireEvent.click(togglePauseButton)

    act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000)
    })

    expect(screen.getByText(/35:00$/)).toBeTruthy()
  })
})
