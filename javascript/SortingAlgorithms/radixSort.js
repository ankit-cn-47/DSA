function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

function getNumberOfDigits(num) {
    if(num===0) return 1
    // let ctr = 0
    // while(num>0) {
    //     num = Math.floor(num/10)
    //     ctr++
    // }
    // return ctr
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function maxDigit(arr) {
    let md = 0
    for(let el of arr) {
        md = Math.max(md, getNumberOfDigits(el))
    }
    return md
}

function radixSort(nums){
    // determine maximum number of times to distribute in digitBucket
    let maxDigitCount = maxDigit(nums);
    for(let k = 0; k < maxDigitCount; k++){
        // create bucket array to segregate numbers as per the k-th digits
        let digitBuckets = Array.from({length: 10}, () => []);
        // segregate numbers as per k-th digit and push in the bucket array
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        // flatten bucket array that's array of arrays
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([123,423,564,2,4,1]));