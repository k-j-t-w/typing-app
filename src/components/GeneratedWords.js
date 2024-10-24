import React from "react";
import UserTypings from './UserTypings.js';

function GeneratedWords({ words, countDown }) {

    const wordsString = words.join(' ')
    console.log(wordsString)
    return (
        <div className='card'>
                <div className='countDown'>{countDown}</div>
                <div className='overlay-words'>
                    <div className='wordList' >
                        {wordsString}
                    </div>
                    <UserTypings userInput={wordsString}/>
                </div>
            </div>
    )
}

export default GeneratedWords;