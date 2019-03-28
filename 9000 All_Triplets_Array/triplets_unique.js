//Find all possible triplets possible in an array
(function IIFE(){
        function allTriplets(array) {
            const possibleTriplets = [];
            for (let i=0; i<array.length -2; i++) {
                for (let j=i+1; j< array.length -1; j++) {
                        for (let z=j+1; z<array.length; z++) {
                            if (z != i && z!=j) {
                                //if (tripletSum == desiredSum) {
                                possibleTriplets.push([array[i], array[j], array[z]]);
                                //}
                            }

                        }
                    }
                }
            return possibleTriplets;
            }
    const uniqueTriplets = allTriplets([-1, 0, 1, 2, -1, -4]);
    console.info(uniqueTriplets);
}())
