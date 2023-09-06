import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import TimeDisplay from './TimeDisplay'

const TWENTY_SECONDS = 20000
const TWO_MINUTES = 120000
const TWO_HOURS = 7200000

describe('TimeDisplay', () => {
  it('renders 00:00:00 for 0 msTime input', () => {
    render(<TimeDisplay msTime={0} />)

    expect(screen.getByText('00:00:00')).toBeTruthy()
  })

  it('renders 00:00:20 for 20000 msTime input', () => {
    render(<TimeDisplay msTime={TWENTY_SECONDS} />)

    expect(screen.getByText('00:00:20')).toBeTruthy()
  })

  it('renders 00:02:00 for 120000 msTime input', () => {
    render(<TimeDisplay msTime={TWO_MINUTES} />)

    expect(screen.getByText('00:02:00')).toBeTruthy()
  })

  it('renders 02:00:00 for 7200000 msTime input', () => {
    render(<TimeDisplay msTime={TWO_HOURS} />)

    expect(screen.getByText('02:00:00')).toBeTruthy()
  })

  it('renders 02:02:20 for 7340000 msTime input', () => {
    render(<TimeDisplay msTime={TWO_HOURS + TWO_MINUTES + TWENTY_SECONDS} />)

    expect(screen.getByText('02:02:20')).toBeTruthy()
  })
})
