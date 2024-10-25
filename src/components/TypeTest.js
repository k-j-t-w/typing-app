import '../styles/typeTest.css'
import Results from './Results.js';
import GeneratedWords from './GeneratedWords.js';
import UserTypings from './UserTypings.js';
import useEngine from '../hooks/useEngine.js';


function TypeTest() {
    const { typingTestState, words, timeLeft, typed } = useEngine();

    const wordsString = words.join(' ')
    return (
        <div className='type-test'>
            <div className='countdown'>{timeLeft}</div>
            <div className='type-test-words'>
                <GeneratedWords words={wordsString}/>
                <UserTypings userInput={typed} />
            </div>
        </div>
    );
}

export default TypeTest;