import {useState, useEffect} from 'react'
import { generate, count } from "random-words";
const NUMBER_OF_WORDS = 5;

function Home() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        setWords(generateWords())
    }, [])

    function generateWords() {
        const listOfWords = []
        let i = 0
        while (i < NUMBER_OF_WORDS ) {
            let word = generate(1);
            if (word.toString().includes('f')) {
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

export default Home;