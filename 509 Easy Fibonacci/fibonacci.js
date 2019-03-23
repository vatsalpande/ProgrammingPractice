(function IIFE() {
    function getFibonacci(n) {
        let fibo = new Map();
        fibo.set(0,0);
        fibo.set(1,1);
        for(let i=2; i<=n; i++) {
            const value = fibo.get(i-1) + fibo.get(i-2);
            fibo.set(i, value);
        }
        return fibo.get(n);
    }
    const fib = getFibonacci(3);
    console.info(fib);
})
