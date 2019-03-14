(function IIFE() {
    function longestParenthesis(string) {
        let longestParenLength = 0;
        const splitStringArray = string.split('');
        let tempLength =0;
        let index =0;
        while(splitStringArray.length > 0) {
            if (splitStringArray[index] == '(') {
                if (splitStringArray[index+1] == ')') {
                    splitStringArray.splice(index, 2);
                    tempLength = tempLength+2;
                }else {
                    splitStringArray.splice(index, 1);
                    tempLength = 0;
                }
            } else {
                splitStringArray.splice(index, 1);
                tempLength = 0;
            }
            //index++;
            longestParenLength = longestParenLength > tempLength ? longestParenLength: tempLength;
        }
        return longestParenLength;
    }
    const longestValidParenthesis = longestParenthesis('())))()()))))()()()()')
    console.info(longestValidParenthesis);
}())
