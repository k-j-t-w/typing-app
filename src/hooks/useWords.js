import { useCallback, useState } from "react";
import { generate } from "random-words";

const useWords = (count) => {
    const [words, setWords] = useState(generate(count))

    const updateWords = useCallback (() => {
        setWords(generate(count))
    }, [count]);

    return { words, updateWords }
}

export default useWords;