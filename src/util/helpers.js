export const formatPercentage = (percentage) => {
    return percentage.toFixed(0) + '%';
}

export const countErrors = (actual, expected) => {
const expectedChars = expected.split('');

    return expectedChars.reduce((errors, expectedChar, i) => {
        const actualChar = actual[i];
        if (actualChar !== expectedChar) {
            errors++;
        }
        return errors;
    }, 0);
}

export const calculateAccuracyPercentage = (errors, total) => {
    if (total > 0) {
        const corrects = total - errors;
        return (Math.floor((corrects / total) * 1000)) / 10;
    }

    return 0;
}