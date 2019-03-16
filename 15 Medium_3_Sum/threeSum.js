(function IIFE() {
    function threeSum(desiredSum) {
        return function arrayToFind(array) {
            const triplets = [];
            for (let i =0; i< array.length -2; i++) {
                for (let j =i+1; j< array.length -1; j++ ) {
                    for (let z = j+1; z< array.length; z++) {
                        const sum = array[i] + array[j] + array[z];
                        if (sum === desiredSum) {
                            if (triplets.length === 0) {
                                triplets.push([array[i], array[j], array[z]]);
                            }
                            let isUnique = false;
                            for (let uniqueIndex = 0; uniqueIndex< triplets.length; uniqueIndex++) {
                                const tripletCurrentElement = triplets[uniqueIndex];
                                isUnique = (
                                    (tripletCurrentElement.indexOf(array[i]) !== -1) ||
                                    (tripletCurrentElement.indexOf(array[j]) !== -1) ||
                                    (tripletCurrentElement.indexOf(array[z]) !== -1)
                                );
                                if (!isUnique) break;
                            }
                            if (isUnique) {
                                triplets.push([array[i], array[j], array[z]]);
                            }
                        }
                    }
                }
            }
                return triplets;
        }
    }
    const tripletsWithSum0 = threeSum(0);
    const uniqueTriplets = tripletsWithSum0([-1, 0, 1, 2, -1, -4]);
    console.info(uniqueTriplets)
}())
