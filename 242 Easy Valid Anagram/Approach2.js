(function IIFE() {
    function isValidInput(s, t) {
        return s.length == t.length;
    }
    function getWordCount(string) {
        const wordMapping = {};
        for( let i of string) {
            if (wordMapping[i]) {
                wordMapping[i] = wordMapping[i]+1;
            } else {
                wordMapping[i] = 1;
            }
        }
    }
    function isAnagram(s, t) {
        if (!isValidInput(s,t)) return false;
        if (s === t) return true;
        const secondStringWordMapping = {};
        const minLength = Math.min(s, t);
        const baseString = s.length == minLength ? s : t;
        const secondString = baseString == s ? t: s;
        const wordCountBaseString = getWordCount(baseString);
        let isAnagram = true;
        for(let i of secondString) {
            if (!wordCountBaseString[i]) {
                isAnagram = false;
                break;
            } else {
                if (secondStringWordMapping[i]) {
                    secondStringWordMapping[i] = secondStringWordMapping[i]+1;
                    if (secondStringWordMapping[i] > wordCountBaseString[i]) {
                        isAnagram = false;
                        break;
                    }
                } else {
                    secondStringWordMapping[i] = 1;
                }
            }
        }
        return isAnagram;
    }
    console.info(isAnagram("anagram", "nagaram"));

})
