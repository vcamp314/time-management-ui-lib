import React from 'react';

interface AppProps$1 {
    duration: number;
    name: string;
    onFinish?: () => void;
    onPause?: (remainingTime: number) => void;
    onReset?: (remainingTime: number) => void;
    containerStyle?: React.CSSProperties;
}
declare const Container$1: ({ duration, name, onFinish, onPause, onReset, containerStyle, }: AppProps$1) => JSX.Element;

interface Stage {
    id: number;
    duration: number;
    name: string;
}
interface AppProps {
    stages: Stage[];
    onStartNextStage?: (stageId: number) => void;
    onFinish?: () => void;
    onPause?: (remainingTime: number, stageId: number) => void;
    onReset?: (remainingTime: number, stageId: number) => void;
}
declare const Container: ({ stages, onStartNextStage, onFinish, onPause, onReset, }: AppProps) => JSX.Element;

declare const TimeDisplay: ({ msTime }: {
    msTime: number;
}) => JSX.Element;

export { TimeDisplay, Container$1 as Timer, Container as TimerWidget };
