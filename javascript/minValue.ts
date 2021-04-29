let arr = [25, 10, 9, 38, 75]


console.log(findMin(arr));

function findMin(arr: Array<number>): number {
    let minIndex = 0
    arr.forEach((el,index) => {
        if(el < arr[minIndex]) {
            minIndex = index
        }
    })
    return arr[minIndex]
}