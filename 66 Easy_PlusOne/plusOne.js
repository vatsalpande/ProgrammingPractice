(function IIFE() {
    function plusOne(array) {
        const arrayLength = array.length;
        if (array[arrayLength -1]+1 >9) {
            let arrayValue = function getArrayValue(value, plusValue) {
                const plusOne = value + plusValue;
                const remaining = plusOne % 10;
                carryOver = Math.floor(plusOne/10);
                value = remaining;
                return [value, carryOver];
            }
            let carryOver = 0;
            for (let i = array.length -1; i>=0; i--) {
                if (i == array.length -1) {
                     [array[i], carryOver] = arrayValue(array[i], 1);
                } else {
                    if (carryOver >0) {
                        [array[i], carryOver] = arrayValue(array[i], carryOver);
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
    console.info(plusOne([4,3,2,1]));
})
