class LongestPrefix {
    constructor(stringArray) {
        this.stringArray = Array.isArray(stringArray) ? stringArray : [];
    }
    getLongestPrefix() {
        let longestPrefix = "";
        if (this.stringArray.length == 0) return longestPrefix;
        const sortedStrings = this.stringArray.sort((a, b) => a.length -b.length);
        const baseString = [...sortedStrings[0]];
        let isExit = false;
        for (let i=0; i<baseString.length; i++) { // [f,l,o,w]
            for(let j=1; j< sortedStrings.length; j++) {
                if (sortedStrings[j].startsWith(longestPrefix+baseString[i])) {
                    isExit = false;
                } else {
                    isExit = true;
                    break;
                }
            }
            if (isExit) {
                break;
            } else {
                longestPrefix += baseString[i];
            }
        }
        return longestPrefix;
    }
}
const prefix = new LongestPrefix(["flower","flow","flight"]);
console.info(prefix.getLongestPrefix());
