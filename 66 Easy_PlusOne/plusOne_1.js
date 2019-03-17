(function IIFE() {
    function plusOne(array) {
        const arrayLength = array.length;
        if (array[arrayLength -1]+1 >9) {
            let carryOver = 0;
            for (let i =array.length -1; i>=0; i--) {
                if (i == array.length -1) {
                    const plusOne = array[i]+1;
                    const remaining = plusOne%10;
                    carryOver = Math.floor(plusOne/10);
                    array[i] = remaining;
                } else {
                    if (carryOver >0) {
                        const plusOne = array[i]+carryOver;
                        const remaining = plusOne%10;
                        carryOver = Math.floor(plusOne/10);
                        array[i] = remaining;
                    }
                }
            }
            if (carryOver >0) {
                array.unshift(carryOver);
            }
        } else {
            array[arrayLength -1] = array[arrayLength -1]+1;
        }
        return array;
    }
    console.info(plusOne([4,3,2,1]);
})
