/// <reference types="react" />
export interface Stage {
    id: number;
    duration: number;
    name: string;
}
export interface AppProps {
    stages: Stage[];
    onStartNextStage?: (stageId: number) => void;
    onFinish?: () => void;
    onPause?: (remainingTime: number, stageId: number) => void;
    onReset?: (remainingTime: number, stageId: number) => void;
}
declare const Container: ({ stages, onStartNextStage, onFinish, onPause, onReset, }: AppProps) => JSX.Element;
export default Container;
