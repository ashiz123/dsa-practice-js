function fibonanci(n){

    if(n===0 || n===1){
        return n;
    }

    return fibonanci(n-2) + fibonanci(n-1);

}

console.log(fibonanci(3));


//fib(3) ...fib(1) return 1 + fib(2) return 1 = return 2
//fib(1) ...return 1
//fib(2) ...fib(1) + fib(0) ...return 1