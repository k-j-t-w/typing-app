import { useState } from 'react';
import useCountdownTimer from './useCountdownTimer.js';
import useWords from './useWords.js'
import useTypings from './useTypings.js';
import { countErrors } from '../util/queryHelpers.js';

const NUMBER_OF_WORDS = 50;
const SECONDS = 30;

const useEngine = () => {
    const [typingTestState, setTypingTestState] = useState('start')
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(typingTestState !== 'finish');
    const [errors, setErrors] = useState(0);

    const sumErrors = useCallback(() => {
        const wordsReached = words.substring(0, cursor);
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached))
    }, [typed, words, cursor]);

    return { typingTestState, words, timeLeft, typed };
};

export default useEngine;