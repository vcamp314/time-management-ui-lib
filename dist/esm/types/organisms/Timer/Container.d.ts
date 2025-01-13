/// <reference types="react" />
export interface AppProps {
    duration: number;
    name: string;
    onFinish?: () => void;
    onPause?: (remainingTime: number) => void;
    onReset?: (remainingTime: number) => void;
}
declare const Container: ({ duration, name, onFinish, onPause, onReset, }: AppProps) => JSX.Element;
export default Container;
