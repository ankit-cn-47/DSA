function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    num1 = num1+''
    num2 = num2+''
    if(num1.length != num2.length) {
        return false
    }
    let counter = {}
    for(let el of num1){
        counter[el] ? counter[el]++ : counter[el] = 1
    }
    for(let el of num2) {
        if(counter[el]) {
            counter[el]--
        } else {
            return false
        }
    }
    return true
  }
  