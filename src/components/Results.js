import '../styles/results.css';

function Results({ state, errors, accuracyPercentage, total, time}) {

    if (state !== 'finish') {
        return null;
    }
    console.log('errors', errors, 'accuracyPercentage', accuracyPercentage)

    const wpm = Math.floor((((total - errors) / 5) / (time / 60)) * 10) / 10;
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