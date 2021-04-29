// my solution did not work
// function flatten(arr){
//     // add whatever parameters you deem necessary - good luck!
//     var resArray=[]
//         for(var el in arr) {
//             if(Array.isArray(el)){
//                 resArray = resArray.concat(flat(el))
//             } else {
//                 resArray.push(Number(el))
//             }
//         }
//     return resArray;
//   }
  
function flatten(oldArr){
var newArr = []
    for(var i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
        } else {
                newArr.push(oldArr[i])
        }
    } 
    return newArr;
}
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3