(function IIFE() {
   function validParenthesis() {
       /**
        * @param {string} s
        * @return {boolean}
        */
           const mapping = {
               '(': ')',
               '{': '}',
               '[': ']',
           };
           const stringArray = s.split("");
           const stringLength = stringArray.length;
           if (stringLength %2 !== 0) return false;
           const middleString = stringLength/2;
           const doesMiddleElementsMatch = mapping[stringArray[middleString -1]] == stringArray[middleString]
           let i =0; j = stringArray.length;
           let isValid = true;
           if (doesMiddleElementsMatch) {
               while(stringArray[i] !== stringArray[middleString -1] && stringArray[j] !== stringArray[middleString] ) {

                   if (mapping[stringArray[i]] !== mapping[stringArray[j]]) {
                       isValid = false;
                       break;
                   } else {
                       i++; j--;
                   }

               }
               return isValid;
           } else {
               return false;
           }

       };
   const isValid = validParenthesis("()[]{}");

}())
