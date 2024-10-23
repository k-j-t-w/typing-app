import React from "react";

function GeneratedWords({ words, countDown }) {
    return (
        <div className='card'>
                <div className='countDown'>{countDown}</div>
                <div className='wordList' >
                    {words.map((word, i) => (
                        <React.Fragment key={i}>
                            <span>{word}</span>
                            <span>·</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
    )
}

export default GeneratedWords;