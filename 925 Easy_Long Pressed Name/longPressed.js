var isLongPressedName = function(name, typed) {

    const wordCountMapping = function wordMapping(wordArray) {
        let wordCount = {};
        wordArray.forEach(item => {
            if (wordCount[item]) {
                wordCount[item] = wordCount[item]+1;
            } else {
                wordCount[item] = 1;
            }
        })
        return wordCount;
    }
    const nameWordCount = wordCountMapping([...name]); //{s:1, a:1, e:2, d:1}
    const typeWordCount = wordCountMapping([...typed]);//{s:2, a:2, e:1, d:2}
    if (typeWordCount.length < nameWordCount.length) return false;
    let isLongPressed = true;
    for(let i=0; i<Object.keys(nameWordCount).length; i++) {
        const item = Object.keys(nameWordCount)[i];
        if ((!typeWordCount[item]) || (nameWordCount[item] > typeWordCount[item])) {
            isLongPressed = false;
            break;
        }
    }
    return isLongPressed;

};
