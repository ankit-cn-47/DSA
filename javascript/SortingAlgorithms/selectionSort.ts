let arr = [25, 10, 9, 38, 75]
function main() {
    console.log('array before sort : ', arr);
    arr = sortArray(arr)
    console.log('array after sort : ', arr);
}

function sortArray(inArr: Array<number>): Array<number> {
    let arr = [...inArr]
    for(let i = 0; i<arr.length-1; i++) {
        let minIndex = i;
        for(let j = i; j<arr.length-1; j++) {
            if(arr[minIndex] > arr[j+1]) {
                minIndex = j+1
            }
        }
        if(minIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

main()