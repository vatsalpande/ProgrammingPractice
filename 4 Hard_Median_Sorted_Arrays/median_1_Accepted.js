(function IIFE() {
   function getMedian(arr1, arr2) {
       const mergedSortedArray = [...arr1, ...arr2].sort((a,b) => a-b);
       const mergedArrayLength = mergedSortedArray.length;
       let median;
       if (mergedArrayLength == 1) {
           [median] = mergedSortedArray;
       }else if (mergedArrayLength%2 == 0) {
           const middleElementIndex = mergedArrayLength/2;
           median = (mergedSortedArray[middleElementIndex-1] + mergedSortedArray[middleElementIndex])/2;
       } else {
           // TODO - This .5 is not good. Some better way?
           const middleElementIndex = mergedSortedArray.length/2 -.5;
           median = mergedSortedArray[middleElementIndex];
       }
       return median;
   }
   const median = getMedian([1,3], [2]);
   console.info(median);
}())
