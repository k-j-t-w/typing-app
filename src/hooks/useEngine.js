import { useEffect, useState, useCallback } from 'react';
import useCountdownTimer from './useCountdownTimer.js';
import useWords from './useWords.js'
import useTypings from './useTypings.js';
import { countErrors } from '../util/helpers.js';

const NUMBER_OF_WORDS = 50;
const SECONDS = 30;

const useEngine = () => {
    const [typingTestState, setTypingTestState] = useState('start')
    const { words, updateWords } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountdown, resetCountdown } = useCountdownTimer(SECONDS);
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(typingTestState !== 'finish');
    const [errors, setErrors] = useState(0);

    const isStarting = typingTestState === 'start' && cursor > 0;
    const areWordsFinished = cursor === words.join(' ').length

    const wordsString = words.join(' ')
    const sumErrors = useCallback(() => {
        const wordsReached = wordsString.substring(0, cursor);
        setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached))
    }, [typed, words, cursor]);


    //  start timer when user begins typing
    useEffect(() => {
        if(isStarting) {
            setTypingTestState('run');
            startCountdown();
        }

    }, [isStarting, startCountdown, cursor])

    //when timer is finished end game
    useEffect(() => {
        if(!timeLeft) {
            console.log('time is up...');
            setTypingTestState('finish');
            sumErrors();
        }

    }, [timeLeft, sumErrors]);

    useEffect(() => {
        if (areWordsFinished) {
            console.log('words are finished...');
            sumErrors();
            updateWords();
            clearTyped();
        }

    }, [cursor, words, clearTyped, typed, areWordsFinished, updateWords, sumErrors])

    const restart = useCallback(() => {
        console.log('restarting...');
        resetCountdown();
        resetTotalTyped();
        setTypingTestState('start');
        setErrors(0);
        updateWords();
        clearTyped();
    }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

    return { typingTestState, words, timeLeft, typed, totalTyped, restart};
};

export default useEngine;