function TextJustification(input, maxWidth) {
    this.input = input;
    this.width = maxWidth;
}
TextJustification.prototype.justify = function() {
    // {
    //     "This": 4,
    //     "is": 2,     this is an
    //     "an": 2,
    //     "example": 7,
    //     "of": 2,
    //     "text": 4,
    //     "justification.": 14
    // }
    const widthBuckets = [];
    let itemLength = 0;
    let itemBucket = "";
    let itemPending = false;
    this.input.forEach(item => {
        const currentItemLength = item.length;
        // ["This is an", "example of text", "justification."]
         if (this.width - (itemLength + currentItemLength) <=0) {
             let bucketLength = itemBucket.length;
             const bucketArray = itemBucket.split(" ");
             let newString = '';
             while(bucketLength <=16) {
                for(let i=0; i<bucketArray.length -1; i++) {
                    newString += bucketArray[i]+ '  ';
                    bucketLength++;
                    if (bucketLength == 16) break;
                }
             }
             newString = newString + bucketArray[bucketArray.length -1];
             itemLength = 0;
             widthBuckets.push(newString);
             itemBucket = `${item}`;
             itemPending = true;
         } else {
             itemBucket = itemBucket !== "" ? `${itemBucket} ${item}`: `${item}`;
             itemLength = itemBucket.length;
             itemPending = false;
         }
    })
    if (itemPending) {
        widthBuckets.push(itemBucket);
    }

    const justifiedString = widthBuckets.map(item => {
        const itemLength = item.length;
        const allWords = item.split(" ")
        const availableWords = allWords.length;
        let remainingSpaces = this.width - itemLength;
        let string = '';
        while(remainingSpaces >0) {
            for (let i=0; i< allWords.length; i++ ) {
                string = i==0 ? `${string}` : `${string}  ${allWords[i]}`;
                remainingSpaces--;
            }
        }

    })
    return widthBuckets;
}

const justifiedText = new TextJustification([
    "This            ",
    "is              ",
    "an              ",
    "example         ",
    "of              ",
    "text            ",
    "justification.  "], 16)
console.info(justifiedText.justify());
