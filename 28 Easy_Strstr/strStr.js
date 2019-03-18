(function IIFE() {
    function strStr(haystack, needle) {
        // We can directly do haystack.search(needle) if inbuilt function can be used
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
