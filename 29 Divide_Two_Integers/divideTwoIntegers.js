( function IIFE() {
    function divideTwoIntegers(dividend, divisor) {
        let divideResult = 0;
        const originalDividend = dividend;
        const originalDivisor = divisor;
        if (dividend == divisor) return 1;
        if ( (dividend == -divisor) || (-dividend == divisor)) return -1;
        if (divisor < 0) {
            divisor = -divisor;
        }
        if (dividend < 0) {
            dividend = -dividend;
        }
        while(dividend >= divisor) {
            dividend = dividend - divisor;
            divideResult++;
        } //2147483648
        const isDivisionNegative = ((originalDividend < 0 && originalDivisor >0) || (originalDividend > 0 && originalDivisor <0));
        if (isDivisionNegative) {
            divideResult = -divideResult;
        }
        if (
            (divideResult < Math.pow(-2, 31)) ||
            (divideResult > (Math.pow(2, 31) -1))
        ) {
            const defaultResult = Math.pow(2,31) -1;
            divideResult = isDivisionNegative ? -defaultResult : defaultResult;
        }
        return divideResult;
    }
    const divideResult = divideTwoIntegers(-1,1)
    console.info(divideResult)
}())
