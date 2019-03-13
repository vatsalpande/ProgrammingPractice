(function IIFE() {
    function reverseNumber(number) {
        let reversedNumber = 0;
        while(number != 0) {    // 189
            reversedNumber = reversedNumber*10; //0  //90 //988.9
            reversedNumber = reversedNumber + number%10; //9 //98 //981
            number = Math.trunc(number/10); //18 1 0
            console.info(number);
        }
    }
    const numberReversed = reverseNumber();
    console.info(numberReversed);
}())
