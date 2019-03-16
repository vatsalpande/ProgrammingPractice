//Find all possible triplets possible in an array
(function IIFE(){
    function allPossibleTriplets(array) {
        const possibleTriplets = [];
        for (let i=0; i<array.length; i++) {
            for (let j=0; j< array.length; j++) {
                if (i!==j) {
                    for (let z=0; z<array.length; z++) {
                        if (z !==i && z !== j) {
                            possibleTriplets.push([array[i], array[j], array[z]]);
                        }
                    }
                }
            }
        }
        return possibleTriplets;
    }
    const allTriplets = allPossibleTriplets([-1, 0, 1, 2, -1, -4]);
    console.info(allTriplets);
})
