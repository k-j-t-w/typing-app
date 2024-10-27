import '../styles/typeTest.css'
import Results from './Results.js';
import GeneratedWords from './GeneratedWords.js';
import UserTypings from './UserTypings.js';
import useEngine from '../hooks/useEngine.js';
import { calculateAccuracyPercentage } from '../util/helpers.js';


function TypeTest() {
    const { typingTestState, words, timeLeft, typed, errors, restart, totalTyped } = useEngine();

    const wordsString = words.join(' ')
    return (
        <div className='type-test'>
            <div className='countdown'>{timeLeft}</div>
            <div className='type-test-words'>
                <GeneratedWords words={wordsString}/>
                <UserTypings userInput={typed} words={wordsString}/>
            </div>
            <Results state={typingTestState} errors={errors} accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)} total={totalTyped}/>
        </div>
    );
}

export default TypeTest;