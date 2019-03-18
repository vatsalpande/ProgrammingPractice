(function IIFE(){
   function lengthLastWord() {
       const trimmedString = s.trim();
       let stringLength = trimmedString.length -1;
       let length = 0;
       while(stringLength >=0) {
           if (trimmedString[stringLength] == " ") {
               break;
           }
           length++;
           stringLength--;
       }
       return length;
   }
   const length = lengthLastWord(" a ");
   console.info(length);
}())
