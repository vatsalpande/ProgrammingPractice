(function IIFE() {
   function reverseNumber(number) {
        let reverseNumber = 0;
        while(number != 0) {
            reverseNumber = reverseNumber*10;
            reverseNumber = reverseNumber + number%10;
            number = Math.trunc(number/10);
        }
   }
   console.info(reverseNumber(543));
}())
