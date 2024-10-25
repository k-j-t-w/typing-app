import React from 'react';
import Caret from './Caret';

function UserTypings({userInput}) {
    const typedChars = userInput.split('')
    
    return (
        <div className='user-typings'>
            {typedChars.map((char, index) => {
                return  <Character key={`${char}_${index}`} char={char} />;
            })}
            <Caret />
        </div>
    )
}

const Character = ({ char }) => {
    return <span className='user-char'>{char}</span>
}

export default UserTypings;