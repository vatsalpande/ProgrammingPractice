(function IIFE() {
    function twoIntegerSum(a, b) {
        let sum =0;
        function handleNegative(number){
            while(number !==0) {
                sum--;
                number++;
            }
        }
        function handlePositive(number) {
            while(number !==0) {
                sum++;
                number--;
            }
        }

        if (a<0) {
            handleNegative(a);
        } else {
            handlePositive(a);
        }
        if (b<0) {
            handleNegative(b);
        } else {
            handlePositive(b);
        }
        return sum;
    }
    console.info(twoIntegerSum(1,2))
})
