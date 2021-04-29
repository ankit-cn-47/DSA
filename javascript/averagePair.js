function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < 2) {
        return false
    }
    arr.sort((a,b) => a-b)
    let left = 0
    let right = arr.length - 1
    while(left<right) {
        let median = (arr[left]+arr[right])/2
        if(median===avg) {
            return true
        } else if (median > avg) {
            right--
        } else {
            left++
        }
    }
    return false
  }