const objkt = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// collectStrings(obj) // ["foo", "bar", "baz"])
// function collectStrings(obj) {
//     // let testObj
//     let output=[]
//     for (let key in obj) {
//         if(typeof obj[key] === 'string') {
//             output.push(obj[key])
//         }
//         if(typeof obj[key] === 'object') {
//             output = output.concat(collectStrings(obj[key]))
//         }
//     }
//     return output
// }


function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

console.log(collectStrings(objkt));