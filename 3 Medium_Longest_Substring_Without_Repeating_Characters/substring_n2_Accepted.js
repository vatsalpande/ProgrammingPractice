(function IIFE() {
   function getLongestSubstring(string ="") {
       const splitString = string.split("");
       let longestSubsLength = 0;
       for (let i =0; i< splitString.length; i++) {
           let tmpSubstring = splitString[i]
           for(let j= i+1; j< splitString.length; j++) {
               if (tmpSubstring.indexOf(splitString[j]) === -1) {
                   tmpSubstring = tmpSubstring+splitString[j];
               } else {
                   break;
               }
           }
           longestSubsLength = Math.max(longestSubsLength, tmpSubstring.length);

       }
       return longestSubsLength;
   }
    let longestSubstring = getLongestSubstring("abcabcbb");
   console.info(longestSubstring);
}())
