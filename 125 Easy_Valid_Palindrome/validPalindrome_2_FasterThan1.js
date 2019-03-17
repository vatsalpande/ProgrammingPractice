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
       let i=0; let j = validStringArray.length;
       let isValid = true;
        while(i <= j) {
            const start = validStringArray[i];
            const end = validStringArray[j -1];
            if (start === end) {
                i++; j--;
            } else {
                isValid = false;
                break;
            }
        }
        return isValid;
   }
    let isValid = isValidPalindrome("A man, a plan, a canal: Panama");
    console.info(` "A man, a plan, a canal: Panama" is a palindrome => ${isValid}`);
    isValid = isValidPalindrome("race a car");
    console.info(` "race a car" is a palindrome => ${isValid}`);
}())
