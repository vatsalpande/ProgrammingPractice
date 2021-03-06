export default class Comparator {
    constructor(compareFn) {
        this.compare = compareFn || Comparator.defaultComparatorFn;
    }
    defaultComparatorFn(a, b) {
        if (a === b ) { return 0}
        return a < b ? -1 : 1;
    }
    equal(a, b) {
        return this.compare(a, b) === 0;
    }
    lessThan(a, b) {
        return this.compare(a, b) <0;
    }
    greaterThan(a, b) {
        return this.compare(a, b) >0;
    }
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) < -1 || this.equal(a, b)
    }
    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) < -1 || this.equal(a, b)
    }
    reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}
