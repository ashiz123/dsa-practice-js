// let a= 0;
// let b= 1;
// acc = 0;

function fibonanci(n){
if (n<=1){
    return n;
}

return fibonanci(n-1) + fibonanci(n-2);

}


console.log(fibonanci(10))


