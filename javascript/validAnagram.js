function validAnagram(word1, word2){
  // add whatever parameters you deem necessary - good luck!
  let count1 = {}
  let count2 = {}
  for (let el of word1) {
      if(count1[el]) {
          count1[el]++
      } else {
          count1[el] = 1
      }
  }
  for (let el of word2) {
      if(count2[el]) {
          count2[el]++
      } else {
          count2[el] = 1
      }
  }
  if(Object.keys(count1).length !== Object.keys(count2).length) {
      return false
  }
  for (let ch of Object.keys(count1)) {
      if(count1[ch] !== count2[ch]) {
          return false
      }
  }
  return true
}