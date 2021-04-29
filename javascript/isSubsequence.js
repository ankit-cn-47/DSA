function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let pointer = 0
    for(let el in str2) {
        if(str1.charAt(pointer)===el) {
            pointer++
        }
    }
    if(pointer === str1.length-1) {
        return false
    }
    return true
  }