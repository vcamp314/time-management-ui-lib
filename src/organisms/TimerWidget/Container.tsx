import React, { useState } from 'react'
import Presenter from './Presenter'

// TODO add features for creating timers

export interface Stage {
  id: number;
  duration: number;
  name: string;
}

export interface AppProps {
  stages: Stage[];
  onStartNextStage?: (stageId: number) => void;
  onFinish?: () => void;
  // TODO implement the handling for these callbacks:
  onPause?: (remainingTime: number, stageId: number) => void;
  onReset?: (remainingTime: number, stageId: number) => void;
}

const Container = ({
  stages,
  onStartNextStage,
  onFinish,
  onPause,
  onReset,
}: AppProps): JSX.Element => {
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0)

  const startNextStage = (): void => {
    if (currentStageIndex >= stages.length - 1) {
      onFinish?.()
      return
    }
    const nextStageIndex = currentStageIndex + 1

    onStartNextStage?.(stages[nextStageIndex].id)
    setCurrentStageIndex(nextStageIndex)
  }

  return (
    <>
      <Presenter
        stageName={stages[currentStageIndex].name}
        duration={stages[currentStageIndex].duration}
        onFinish={startNextStage}
        key={currentStageIndex}
      />
    </>
  )
}

export default Container
