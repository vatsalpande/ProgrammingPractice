// Given an array of integers,
// return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
(function IIFE() {
    function twoSum(nums, target) {
        function getIndices(startCounter, target) {
            const indices = [];
            for( let i = startCounter+1; i< nums.length; i++) {
                if ((nums[startCounter] + nums[i]) === target) {
                    indices.push(startCounter, i);
                    break;
                }
            }
            return indices;
        }
        let twoSumIndices
        for (let startCounter = 0; startCounter < nums.length; startCounter++) {
            twoSumIndices = getIndices(startCounter, target);
            if (twoSumIndices.length > 0) { break;}
        }
        console.info(twoSumIndices.length > 0 ? `Two Sum Indices are ${twoSumIndices}`);
    }
    const indices = twoSum([2, 7, 11, 15], 9);
    console.info(indices);
}())
