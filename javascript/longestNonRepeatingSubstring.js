function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let longest = 0 // to store longest occurence of non-repeated characters
    let seen = {} // to register last seen of characters
    let start = 0 // to register start from where to count
    for(let i=0; i<str.length; i++) {
        let letter = str[i]
        if(seen[letter]) {
            // reset start on encountering repeated character
            start = Math.max(start, seen[letter])
        }
        // update longest to be either last longest or update the longest whichever is bigger
        longest = Math.max(longest, i-start+1)
        seen[letter] = i+1
    }
    return longest
  }
  