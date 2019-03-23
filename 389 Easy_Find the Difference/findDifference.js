function FindDiff(string, target) {
    this.string = string;
    this.target = target;
}
FindDiff.prototype.diff = function diff() {
    const { string, target } = this;
    const wordCountBase = this.wordCount([...string]);
    const wordCountTarget = this.wordCount([...target]);
    const targetKeys = Object.keys(wordCountTarget);
    let diff = '';
    targetKeys.forEach(item => {
        const countBase = wordCountBase[item] || 0;
        const countTarget = wordCountTarget[item];
        for (let j =0; j< countTarget -countBase ; j++) {
            diff += item;
        }
    })
    return diff;
}
FindDiff.prototype.wordCount = function wordCount(wordArray = []) {
    let wordMapping = {};
    wordArray.forEach(item => {
        if (wordMapping[item]) {
            wordMapping[item] = wordMapping[item]+1;
        } else {
            wordMapping[item] = 1;
        }
    })
    return wordMapping;
}
const findDiff = new FindDiff("abcd", "abcde");
console.info(findDiff.diff());
