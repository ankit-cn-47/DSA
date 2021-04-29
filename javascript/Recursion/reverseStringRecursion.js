function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    let length = str.length;
    if(length === 0) {
        return ''
    }
    return str[length-1]+reverse(str.slice(0,length-1))
  }