// https://en.wikipedia.org/wiki/3SUM
/**
 * 1) Sort the array.
 *Test all possible pairs
 * One way to solve this problem is to iterate through possible triplet and then add them
 * to identify it sum is 0 or not. However, that has a horrible time complexity
 * of O(n^3).
 * A Better solution can be
 * 1) to sort the array, so all values are available in sorted fashion
 * 2) Keep first value as base & then find two values that are inverse of first value.
 * 3) Keep the first value moving forward till length -3, so you cover all the possible combinations
 */
class ThreeSum {
    constructor(array) {
        const sortedArray = array.sort((a, b) => a -b);
        this.array = sortedArray;
    }
    //[-4,-4,4,0,4,0,0]
    //[0,0,0, -4, -4, 4, 4]
    findThreeSum() {
        const triples = [];
        const array = this.array;
        for (let i=0; i<array.length -3; i++) {
            if (i ==0 || array[i] > array[i-1]) {
                let baseValue = array[i];
                let startIndex = i+1;
                let endIndex = array.length -1;
                while(startIndex < endIndex) {
                    const sum = baseValue + array[startIndex] + array[endIndex];
                    if (sum === 0) {
                        triples.push([baseValue, array[startIndex], array[endIndex]  ]);
                    }
                    if (sum <0) {
                        const currentStart = startIndex;
                        while((startIndex < endIndex) && (array[startIndex] == array[currentStart])) {
                            startIndex++;
                        }
                    }
// Since array is sorted in ascending order
                    else {
                        //[ -4, -4, 0,0,0,4, 4]
                        const currentEnd = endIndex;
                        while((startIndex < endIndex) && (array[endIndex] == array[currentEnd])) {
                            endIndex--
                        }
                    }
                }
            }
        }
        console.info(`Array to find threesum is `, this.array);
        return triples;

    }
}
const threeSum = new ThreeSum([-4,-4,4,0,4,0,0]);
console.info(threeSum.findThreeSum())


