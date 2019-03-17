(function IIFE() {
    function isAlphanumeric(character) {
        const regex = /[^a-z0-9]/g;
        // Can also be new Regexp(^a-z0-9), but if we know our exp will remain constant
        // just define it as string like above for better performance. If its going to change
        // or we don't know its origin, use Regexp
        return !regex.test(character);

    }
   function isValidPalindrome(string) {
        const validStringArray = [...string]
            .map(item => item.toLowerCase())
            .filter(item => isAlphanumeric(item))
       let isValid = false;
        const isEvenChars = validStringArray%2 == 0;
        const middleElementIndex = Math.floor(validStringArray.length/2);
        for (let i=0; i<middleElementIndex; i++) {
            const start = validStringArray[i];
            // If its even characters, then two middle points, else just one
            // so just assign end to start.
            let end = validStringArray[(validStringArray.length-1)-i];
            if (i=== middleElementIndex) {
                if (!isEvenChars) {
                    end = start;
                }
            }
            isValid = start == end;
            if (!isValid) break;
        }
        return isValid;
   }
    let isValid = isValidPalindrome("A man, a plan, a canal: Panama");
    console.info(` "A man, a plan, a canal: Panama" is a palindrome => ${isValid}`);
    isValid = isValidPalindrome("race a car");
    console.info(` "race a car" is a palindrome => ${isValid}`);
}())
