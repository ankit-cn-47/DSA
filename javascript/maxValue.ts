let temp:number
let arr = [25, 10, 9, 38, 75]
for(let i=0; i<(arr.length-1); i++) {
    if(arr[i] > arr[i+1]) {
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
}
console.log(arr[arr.length-1])