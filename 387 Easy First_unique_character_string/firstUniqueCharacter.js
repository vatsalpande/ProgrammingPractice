class FirstUniqueCharacter {
    constructor(string) {
        this.string = string;
    }
    getIndex() {
        const {string} = this;
        const wordMapping = this.getWordMapping(string);
        const stringArray = [...string];
        let index = -1
        for(let i=0; i<stringArray.length; i++) {
            if (wordMapping[stringArray[i]] == 1) {
                index = i; break;
            }
        }
        return index;
    }
    getWordMapping(stringArray) {
        const wordMapping = {};
        for(let i=0; i<stringArray.length; i++) {
            if (wordMapping[stringArray[i]]) {
                wordMapping[stringArray[i]] = wordMapping[stringArray[i]] +1;
            } else {
                wordMapping[stringArray[i]] = 1;
            }
        }
        return wordMapping;
    }
}
const firstUnique = new FirstUniqueCharacter("cc");
console.info(firstUnique.getIndex());
