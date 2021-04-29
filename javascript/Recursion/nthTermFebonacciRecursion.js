function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

/*
// my attempts
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(elem){
  // add whatever parameters you deem necessary - good luck!
//   let a=1,b=1
  function sum(a,b,elem) {
      if(elem === 0) {
          return 3
      }
      return a+b+sum(b,a+b,elem-1)
  }
  return sum(1,1,elem-4);
//   let n=3
//   let a=1,b=1,c=a+b
//   while(n<elem) {
//       a = b
//       b = c
//       c = a+b
//       n++
//   }
//   return c
}
*/