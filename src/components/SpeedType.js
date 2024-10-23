import React, {useState, useEffect} from 'react'
import { generate, count } from "random-words";
import '../styles/speedType.css'

const NUMBER_OF_WORDS = 50;
// change this when implementing user decided testing speed
const SECONDS = 30;

function SpeedType() {
    const [words, setWords] = useState([]);
    const [countDown, setCountDown] = useState(SECONDS)
    const [currentInput, setCurrentInput] = useState('')

    useEffect(() => {
        setWords(generateWords());

        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }

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

    function handleKeyDown(event) {
        setCurrentInput(event.key)
        console.log(event.key)
    }

    return (
        <>
            <div className='countDown'>{countDown}{currentInput}</div>
            <div className='wordList' >
                {words.map((word, i) => (
                    <React.Fragment key={i}>
                        <span>
                            {word.split('').map((char, idx) => (
                                <span key={idx}>{char}</span>
                            ))}
                        </span>
                        <span>·</span>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}

export default SpeedType;