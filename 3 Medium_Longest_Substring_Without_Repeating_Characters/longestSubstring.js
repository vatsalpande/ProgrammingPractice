(function IIFE() {
    function getLongestSubstring(string) {
        const stringArray = string.split("");
        let usedString = [];
        for (let i =0; i< stringArray.length; i++) {
            let tmp = [];
            const alphabetInQuestion = stringArray[i];
            if (tmp.indexOf(alphabetInQuestion) === -1) {
                tmp.push(alphabetInQuestion);
            } else {
                usedString = usedString.length > tmp.length ? usedString : [...tmp];
                tmp = [...alphabetInQuestion];
            }
        }
        return usedString.length || 1;
    }
    let longestSubstring = getLongestSubstring("abcabcbb");
    //[a,b,c,a,b,c,b,b]     [a, b, c] [a, b, c] [b], [b]
    console.info(longestSubstring)
    longestSubstring = getLongestSubstring("bbbbb"); //[b],[b][b][b]
    console.info(longestSubstring)
    longestSubstring = getLongestSubstring("pwwkew"); //[pw][wke][w]
    console.info(longestSubstring)

})()
