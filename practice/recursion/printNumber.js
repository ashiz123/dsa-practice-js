function printNumber(n){

    if(n==1){
        console.log(n);
        return;
    }

   console.log(n);
   printNumber(n-1);
}


// let arr = [1, 2, 3, 4, 5];
printNumber(50);