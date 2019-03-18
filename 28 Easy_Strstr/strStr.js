(function IIFE() {
    function strStr(haystack, needle) {
        if (needle.trim() == "") return 0;
        let index = -1;
        const haystackArray = [...haystack];
        for (let i=0; i< haystackArray.length; i++) {
            const slicedString = haystack.startsWith(needle);
            if (slicedString) {
                index = i;
                break;
            } else {
                haystack = haystack.replace(haystackArray[i], "");
            }
        }
        return index;
    }
    const indexOf = strStr("hello", "ll");
    console.info(indexOf);
})
