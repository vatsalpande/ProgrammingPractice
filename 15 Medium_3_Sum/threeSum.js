(function IIFE() {
    /**
     * Issue encountered - How to check uniqueness of element set if all elements in a set are same
     * Ex - [0,0,0] - Sum is 0. But if 0 exists in another combination, this will fail.
      * @param desiredSum
     * @return {function(*): Array}
     */
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
                            let isElementSetExists = false;
                            for (let index = 0; index< triplets.length; index++) {
                                const tripletCurrentElement = triplets[index];
                                isElementSetExists = (
                                    (tripletCurrentElement.indexOf(array[i]) !== -1) &&
                                    (tripletCurrentElement.indexOf(array[j]) !== -1) &&
                                    (tripletCurrentElement.indexOf(array[z]) !== -1)
                                );
                                if (isElementSetExists) break; // If this set exists, early break;
                            }
                            if (!isElementSetExists) {
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
    const uniqueTriplets = tripletsWithSum0([-4,-4,4,0,4,0,0]);
    console.info(uniqueTriplets)
}())
