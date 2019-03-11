(function IIFE() {
    function removeDuplicateElements(array) {
        for(let i=0; i<array.length; i++) {
            if (i !== array.length -1) {
                if (array[i] === array[i-1]) {
                    array.splice(i, 1);
                } else if ((array[i] == array[i+1])) {
                    array.splice(i+1, 1);
                }
            }
        }
    }
    const arrayLength = removeDuplicateElements();
    console.info(arrayLength)
})
