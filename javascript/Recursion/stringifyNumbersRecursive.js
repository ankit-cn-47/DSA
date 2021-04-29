/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
    let output = Object.assign({}, obj)
    function stringify(obj) {
        for(let key in obj) {
        if(typeof obj[key] === 'object') {
            stringify(obj[key])
        } else if(typeof obj[key]==='number') {
            obj[key]=obj[key]+''
        }
    }
    return obj
    }
    return stringify(output)
}