//Find all possible triplets possible in an array
(function IIFE(){
    function allPossibleTripletsWithSum(desiredSum) {
        return function allTriplets(array) {
            const possibleTriplets = [];
            for (let i=0; i<array.length; i++) {
                for (let j=0; j< array.length; j++) {
                    if (i!==j) {
                        for (let z=0; z<array.length; z++) {
                            const tripletSum = array[i] + array[j]+ array[z];
                            if (z != i && z!=j) {
                                //if (tripletSum == desiredSum) {
                                possibleTriplets.push([array[i], array[j], array[z]]);
                                //}
                            }

                        }
                    }
                }
            }
            return possibleTriplets;
        }
    }
    const allTripletsWithSum0 = allPossibleTripletsWithSum(0);
    const uniqueTripletsWithSum0 = allTripletsWithSum0([-1, 0, 1, 2, -1, -4]);
    console.info(uniqueTripletsWithSum0);
}())
