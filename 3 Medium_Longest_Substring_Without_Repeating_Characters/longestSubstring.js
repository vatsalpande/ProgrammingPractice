(function IIFE() {
    function getLongestSubstring(string) {
        let longestSubstringTillNow = [];
        const splitStrings = string.split("");
        let tempSubstrings = [];
        for(let i =0; i< splitStrings.length; i++) {
            let alphabetInQuestion = splitStrings[i];
            if(longestSubstringTillNow.indexOf(alphabetInQuestion) === -1) {
                tempSubstrings = [...tempSubstrings, ...alphabetInQuestion];
            }else {

                    tempSubstrings = [alphabetInQuestion];


            }
            longestSubstringTillNow = longestSubstringTillNow.length > tempSubstrings.length ? longestSubstringTillNow : tempSubstrings;
        }
        //return longestSubstringTillNow.length;
        return longestSubstringTillNow;
    }
    let longestSubstring = getLongestSubstring("abcabcbb");
    //[a,b,c,a,b,c,b,b]     [a, b, c] [a, b, c] [b], [b]
    console.info(`length is ${longestSubstring}`)
    longestSubstring = getLongestSubstring("bbbbb"); //[b],[b][b][b]
    console.info(`length is ${longestSubstring}`)
    longestSubstring = getLongestSubstring("pwwkew"); //[pw][wke][w]
    console.info(`pwwkew length is ${longestSubstring}`)
    longestSubstring = getLongestSubstring("au"); //[pw][wke][w]
    console.info(`au length is ${longestSubstring}`)
    longestSubstring = getLongestSubstring(""); //[pw][wke][w]
    console.info(` length is ${longestSubstring}`)
    longestSubstring = getLongestSubstring(" "); //[pw][wke][w]
    console.info(` length is ${longestSubstring}`)
    longestSubstring = getLongestSubstring("  "); //[pw][wke][w]
    console.info(`  length is ${longestSubstring}`)
    longestSubstring = getLongestSubstring("dvdf"); //[pw][wke][w]
    console.info(`dvdf length is ${longestSubstring}`)
}())
