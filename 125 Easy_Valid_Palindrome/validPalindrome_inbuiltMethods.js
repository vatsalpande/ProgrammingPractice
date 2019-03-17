(function IIFE() {
    function isAlphanumeric(character) {
        const regex = /[^a-z0-9]/g;
        return !regex.test(character);
    }
    function isValidPalindrome(string) {
        const mappedString = [...string]
            .map(item => item.toLowerCase())
            .filter(item => isAlphanumeric(item))

        const reversedString = [...mappedString].reverse().join("");
        return mappedString.join("") === reversedString;
    }
    let isValid = isValidPalindrome("A man, a plan, a canal: Panama");
    console.info(` "A man, a plan, a canal: Panama" is a palindrome => ${isValid}`);
    isValid = isValidPalindrome("race a car");
    console.info(` "race a car" is a palindrome => ${isValid}`);
}())
