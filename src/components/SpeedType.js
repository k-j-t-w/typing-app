import React, {useState, useEffect} from 'react'
import { generate, count } from "random-words";
import '../styles/speedType.css'
import Results from './Results.js';
import UserTypings from './UserTypings.js';
import GeneratedWords from './GeneratedWords.js';

const NUMBER_OF_WORDS = 50;
// change this when implementing user decided testing speed
const SECONDS = 30;

function SpeedType() {
    const [words, setWords] = useState([]);
    const [countDown, setCountDown] = useState(SECONDS)

    useEffect(() => {
        setWords(generateWords());

    }, [])

    function startCountDown() {
        let interval = setInterval(() => {
            setCountDown((prevCount) => {
                if(prevCount === 0) {
                    clearInterval(interval)
                } else {
                    return prevCount - 1
                }
            })
        } , 1000)
    }

    const vowels = [...'aeiou'];
    function generateWords() {
        const listOfWords = []
        let i = 0

        // checks for selected characters (atm vowels)
        while (i < NUMBER_OF_WORDS ) {
            let word = generate(1)[0];
            if (vowels.some(vowel => word.toString().includes(vowel))) {
                listOfWords.push(word);
                i++
            }
        }
        return listOfWords
    }

    return (
        <div className='main'>
            <GeneratedWords words={words} countDown={countDown}/>
            <Results/>
        </div>
    );
}

export default SpeedType;