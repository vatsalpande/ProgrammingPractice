(function IIFE() {
    function removeDuplicateEntries(nums) {
        let i=0;
        for(let j=1; j<nums.length; j++) {
            /** nums [1,1,2,2,2,2,3,4];
             *  i =0, j=1 - 1 ==1
             *  i=0, j=2    1 == 2
             */
            if (nums[i] !== nums[j] ) {
                i++;
            } else {
                i =j;
            }
        }
        return nums.length;
    }
    i,j
    const array = [1,1,2,2,2,2,3,4];
    const duplicatesRemoved = removeDuplicateEntries(array);
    console.info(duplicatesRemoved);
})
