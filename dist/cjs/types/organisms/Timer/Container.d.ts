import React from 'react';
export interface AppProps {
    duration: number;
    name: string;
    onFinish?: () => void;
    onPause?: (remainingTime: number) => void;
    onReset?: (remainingTime: number) => void;
    containerStyle?: React.CSSProperties;
}
declare const Container: ({ duration, name, onFinish, onPause, onReset, containerStyle, }: AppProps) => JSX.Element;
export default Container;
