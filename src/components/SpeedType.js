import {useState, useEffect} from 'react'
import { generate, count } from "random-words";
const NUMBER_OF_WORDS = 5;

function SpeedType() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        setWords(generateWords())
    }, [])


    const vowels = [...'aeiou'];
    function generateWords() {
        const listOfWords = []
        let i = 0

        // checks for selected characters (atm vowels)
        while (i < NUMBER_OF_WORDS ) {
            let word = generate(1);
            if (vowels.some(vowel => word.toString().includes(vowel))) {
                listOfWords.push(word);
                i++
            }
        }
        return listOfWords
    }

    const displayOfWords = words.join(' ')

    return (
        <div>
            {displayOfWords}
        </div>
    )
}

export default SpeedType;