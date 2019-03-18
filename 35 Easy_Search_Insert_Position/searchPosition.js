class SearchPosition {
    constructor(array, target) {
        this.array = array;
        this.target = target;
    }
    searchPosition() {
        let insertPosition = -1;
        const { array, target } = this;
        for (let i=0; i<array.length; i++) {
            if (target == array[i]) {
                insertPosition = i;
                break;
            } else {
                if(target < array[i]) {
                    insertPosition = i;
                    break;
                }
            }
        }
        if (insertPosition == -1) {
            insertPosition = array.length;
        }
        return insertPosition;
    }
}
const position = new SearchPosition([1,3,5,6], 5);
console.info(position.searchPosition());
