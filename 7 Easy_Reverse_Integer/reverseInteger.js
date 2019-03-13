//Given a 32-bit signed integer, reverse digits of an integer.
// Note:
//     Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
(function IIFE() {
   function reverseInteger(number) {
       let reversedNumber = 0;
       while(x != 0) {
           reversedNumber = reversedNumber*10;
           reversedNumber = reversedNumber + x%10;
           number = Math.trunc(x/10);
       }

       reversedNumber =  reversedNumber >= Math.pow(-2, 31) && reversedNumber <= ( Math.pow(2, 31) -1 ) ? reversedNumber : 0

       return reversedNumber;
   }
   reverseInteger(-121)
}())
