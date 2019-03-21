// Trailing 0s in n! = Count of 5s in prime factors of n!
//     = floor(n/5) + floor(n/25) + floor(n/125)

(function IIFE() {
    function factorialTrailingZeros(n) {
        let trailingZeros = 0;
        for(let i =5; n/i>=1; i=i*5 ) {
            trailingZeros = trailingZeros + Math.floor(n/i);
        }
        return trailingZeros;
    }
    console.info(factorialTrailingZeros(5));
})
