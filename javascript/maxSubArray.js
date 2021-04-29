function maxSubarraySum(arr, nos){
    // add whatever parameters you deem necessary - good luck!
    if(nos > arr.length) {
        return null
    }
    let maxSum = 0
    for(let i=0; i<nos; i++) {
        maxSum = maxSum + arr[i]
    }
    let tempSum = maxSum
    for (let i=nos; i<arr.length; i++) {
        tempSum = tempSum-arr[i-nos]+arr[i]
        if(tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum
  }