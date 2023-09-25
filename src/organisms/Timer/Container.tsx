import React, { useState, useEffect } from 'react'
import Presenter from './Presenter'

const alertAudioPath =
  'https://raw.githubusercontent.com/vcamp314/time-management-tools/gh-pages/mixkit-scanning-sci-fi-alarm-905.wav'

export interface AppProps {
  duration: number;
  name: string;
  onFinish?: () => void;
  onPause?: (remainingTime: number) => void;
  onReset?: (remainingTime: number) => void;
}

const Container = ({
  duration,
  name,
  onFinish,
  onPause,
  onReset,
}: AppProps): JSX.Element => {
  const [remainingTime, setRemainingTime] = useState<number>(duration)
  const [isStarted, setIsStarted] = useState<boolean>(false)

  const audio = new Audio(alertAudioPath)
  let intervalId = 0

  useEffect(() => {
    if (isStarted) {
      intervalId = window.setInterval(() => {
        setRemainingTime((curr) => curr - 1000)
      }, 1000)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [isStarted])

  useEffect(() => {
    if (remainingTime <= 0) {
      console.log('finish timer')
      onFinish?.()
      setIsStarted(false)
      setRemainingTime(0)
      // todo: verify the proper way to handle the play() promise
      audio.play()?.then(
        () => {},
        () => {},
      )
    }
  }, [remainingTime])

  const resetSession = (): void => {
    onReset?.(remainingTime)
    setIsStarted(false)
    clearInterval(intervalId)
    setRemainingTime(duration)
  }

  //   todo: refactor to improve UX
  const togglePause = (): void => {
    onPause?.(remainingTime)
    setIsStarted(!isStarted)
  }

  return (
    <>
      <Presenter
        name={name}
        elapsedTime={remainingTime}
        toggleBtnVerbiage={isStarted ? 'Pause' : 'Start'}
        togglePause={togglePause}
        resetSession={resetSession}
      />
    </>
  )
}

export default Container
