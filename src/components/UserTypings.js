import React from 'react';
import Caret from './Caret';

function UserTypings({ userInput, words }) {
    const typedChars = userInput.split('')
    
    return (
        <div className='user-typings'>
            {typedChars.map((char, index) => {
                return  <Character key={`${char}_${index}`} actual={char} expected={words[index]}/>;
            })}
            <Caret />
        </div>
    )
}

const Character = ({ actual, expected }) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === ' ';

    const cn = (classes) =>
        Object.entries(classes)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ');
          
    return <span 
        className={cn({
            'user-char-incorrect': !isCorrect && !isWhiteSpace,
            'user-char-correct': isCorrect && !isWhiteSpace,
            'user-char-incorrect-whitespace': !isCorrect && isWhiteSpace
            })}
    >
        {expected}
        </span>
}

export default UserTypings;