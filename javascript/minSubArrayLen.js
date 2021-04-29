function minSubArrayLen(arr, total) {
    let start = 0
    let end = 0
    let minLength = Infinity
    let sum = 0
    while(start < arr.length) {
        if(sum < total && end < arr.length) {
            sum = sum + arr[end]
            end++
        } else if (sum >= total) {
            minLength = Math.min(minLength, end-start)
            sum = sum - arr[start]
            start++
        } else {
            break;
        }
    }
    return minLength === Infinity ? 0 : minLength
}