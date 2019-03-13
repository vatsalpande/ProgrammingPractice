(function IIFE() {
    function reversedNumber(number) {
        let reversed = 0;
        while(number !==0) {
            reversed = reversed*10;                  0
            reversed = reversed + number%10;        // -1
            number = Math.floor(number/10);
        }
        return reversed;
    }
   function isPalindromeNumber(number) {
       if (Number.isNaN(number)) return false;
       const reverse = reversedNumber(number);
       return number == reverse
   }
   const isPalindrome = isPalindromeNumber();
   console.info(isPalindrome);
}())
