import React from 'react';

function UserTypings({userInput}) {
    const typedCharacters = userInput.split('')
    console.log(typedCharacters)
    return (
        <div className='user-words'>
            {typedCharacters.map((char, index) => {
                return  <Character key={`${char}_${index}`} char={char} />;
            })}
        </div>
    )
}

const Character = ({ char }) => {
    return <div className='user-char'>{char}</div>
}

export default UserTypings;