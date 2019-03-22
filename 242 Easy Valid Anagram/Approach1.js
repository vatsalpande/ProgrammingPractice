(function IIFE() {
    function isAnagram(s, t) {
        const sort = (a,b) => {
            if (a ==b ) return 0;
            if (a >b ) return 1;
            return -1;
        };
        const first = [...s].sort(sort).join("");
        const second = [...t].sort(sort).join("");
        return first == second;
    }
    console.info(isAnagram("anagram", "nagaram"));
})
