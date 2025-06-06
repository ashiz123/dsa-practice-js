function sumOfDigit(digit, sum =0){

    if(digit === 0){
        return 0;
    }

    sum = sumOfDigit(Math.floor(digit/10), sum); //1
    sum += digit % 10; //1+2,
    return sum;

   

}
let digit = 123;
console.log(sumOfDigit(digit));



// No return functions call

//sd(123, 0) - sd(12 , 0)
//sd(12, 0) - sd(1, 0);= re
//sd(1, 0) - sd(0, 0); = return 0
