/// <reference types="react" />
interface AppProps {
    name: string;
    elapsedTime: number;
    toggleBtnVerbiage: 'Start' | 'Pause';
    togglePause: () => void;
    resetSession: () => void;
}
declare const Presenter: ({ name, elapsedTime, toggleBtnVerbiage, togglePause, resetSession, }: AppProps) => JSX.Element;
export default Presenter;
