import '../styles/results.css';
import { useAuth } from "../hooks/AuthProvider.js";
import { useEffect, useState } from "react";

function Results({ state, errors, accuracyPercentage, total, time}) {
    const { user, updateUserScores } = useAuth();
    const [previousWpm, setPreviousWpm] = useState(null);

    const wpm = Math.floor((((total - errors) / 5) / (time / 60)) * 10) / 10;

    useEffect(() => {
        if (state === 'finish' && user && wpm !== previousWpm) {
            updateUserScores(user, wpm); 
            setPreviousWpm(wpm); 
        }
    }, [state, user, wpm, previousWpm, updateUserScores]);

    if (state !== 'finish') {
        return null;
    }

    return (
        <div className="results">
            <div className='results-cont'>
                <div className='results-sub-cont'>
                    <div className='results-sub-sub-cont'>
                        <span className='results-big'>{wpm}</span>
                        <span className='results-sub-big'>WPM</span>
                    </div>
                    <div className='results-small'>Speed</div>
                </div>

                <div className='results-sub-cont'>
                    <div className='results-sub-sub-cont'>
                        <span className='results-big'>{accuracyPercentage}</span>
                        <span className='results-sub-big'>%</span>
                    </div>
                    <div className='results-small'>Accuracy</div>
                </div>
            </div>
        </div>
    );
}

export default Results;