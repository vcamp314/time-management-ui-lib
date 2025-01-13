/// <reference types="react" />
interface AppProps {
    stageName: string;
    duration: number;
    onFinish?: () => void;
    onPause?: (remainingTime: number) => void;
    onReset?: (remainingTime: number) => void;
}
declare const Presenter: ({ stageName, duration, onFinish, onPause, onReset, }: AppProps) => JSX.Element;
export default Presenter;
