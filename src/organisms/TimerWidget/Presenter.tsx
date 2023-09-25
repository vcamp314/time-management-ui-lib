import React from 'react'
import Timer from '../Timer'

interface AppProps {
  stageName: string;
  duration: number;
  onFinish?: () => void;
  onPause?: (remainingTime: number) => void;
  onReset?: (remainingTime: number) => void;
}

const Presenter = ({
  stageName,
  duration,
  onFinish,
  onPause,
  onReset,
}: AppProps): JSX.Element => {
  return (
    <>
      <Timer
        duration={duration}
        name={stageName}
        onFinish={onFinish}
        onPause={onPause}
        onReset={onReset}
      />
    </>
  )
}

export default Presenter
