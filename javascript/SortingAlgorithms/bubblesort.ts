let arr = [25, 10, 9, 38, 75]
function main() {
    console.log('before sorting :', arr);
    arr = sort(arr);
    console.log('after sorting :', arr);
}

function sort(arr:Array<number>): Array<number> {
    let resultArray = [...arr];
    for(let i=0; i<resultArray.length-1; i++) {
        let swap = false
        for(let j=0;j<resultArray.length-1-i; j++) {
            let temp: number
            if(resultArray[j] > resultArray[j+1]) {
                temp = resultArray[j]
                resultArray[j] = resultArray[j+1]
                resultArray[j+1] = temp
                swap = true
            }
        }
        if(!swap) {
            break
        }
    }
    return resultArray
}

main();