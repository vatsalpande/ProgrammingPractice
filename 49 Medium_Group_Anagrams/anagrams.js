(function IIFE() {
    function GroupAnagrams(testArray) {
        this.testArray = testArray;
    }
    GroupAnagrams.prototype.getGroupAnagrams = function() {
        let mapValues = {};
        this.testArray.forEach(item => {
            const sortedKey = [...item].sort().join("");
            if (mapValues[sortedKey]) {
                mapValues[sortedKey].push(item);
            }else {
                mapValues[sortedKey] = [item];
            }
        });
        return Object.values(mapValues);
    }
    const anagrams = new GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    console.info(anagrams.getGroupAnagrams());
}())
