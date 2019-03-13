(function IIFE() {
   function validParenthesis(string) {
       /**
        * @param {string} s
        * @return {boolean}
        */
           const mapping = {
               '(': ')',
               '{': '}',
               '[': ']',
           };
           const stringArray = string.split("");
           let i=0;
            while(stringArray.length >0 && i <= string) {
                // If uneven number of elements
                // if starts with closing tag
                // If ends with an opening tag
                if ((stringArray.length) %2 != 0) return false;
                if (mapping[stringArray[i]]) {
                    i++;
                } else {
                    if (mapping[stringArray[i-1]] == stringArray[i]) {
                        stringArray.splice(i-1, 2);
                        //i++;
                    } else {
                        return false;
                    }
                }
            }
            return stringArray.length == 0;
       };
   const isValid = validParenthesis("()[]{}");

}())
