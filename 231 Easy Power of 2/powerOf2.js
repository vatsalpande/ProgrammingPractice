class PowerOf2 {
    constructor(number) {
        this.number = number;
    }
    isPowerOf2() {
        let isPower = true;
        let { number } = this;
        if (number <=0 ) return false;
        if (number == 1) return true;
        while(number>1) {
            const mod = number%2;
            if (mod !== 0) {
                isPower = false;
                break;
            }
            number = number/2;
        }
        return isPower;
    }
}
const powerOf2 = new PowerOf2(54);
console.info(powerOf2.isPowerOf2());
