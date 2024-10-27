import '../styles/results.css';

function Results({ state, errors, accuracyPercentage, total}) {

    if (state !== 'finish') {
        return null;
    }
    console.log('errors', errors, 'accuracyPercentage', accuracyPercentage)
    return (
        <div className="results">
            <span>Results</span>
            <span>Speed: wpm</span>
            <span>Accuracy: {accuracyPercentage}</span>
            <span>Errors: {errors}</span>
        </div>
    );
}

export default Results;