/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i =0; i<haystack.length-needle.length+1;i++){
        if(haystack.charAt(i)==needle.charAt(0)){
            if(haystack.substring(i,needle.length+i)==(needle)){
                return i
            }
        }
       

    }
    return -1
};