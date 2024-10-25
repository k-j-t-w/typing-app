import { useState } from 'react';
import useCountdownTimer from './useCountdownTimer.js';
import useWords from './useWords.js'
import useTypings from './useTypings.js';

const NUMBER_OF_WORDS = 50;
const SECONDS = 30;

const useEngine = () => {
    const [typingTestState, setTypingTestState] = useState('start')
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(typingTestState !== 'finish');

    return { typingTestState, words, timeLeft, typed };
};

export default useEngine;