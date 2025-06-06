

const perfectNumber = (n) => {

    let sum = 0;
    for (let i =1 ; i<n; i++){
        if(n%i === 0){
            sum += i;
        }
    }

    if (n === sum){
        return 'perfect number'
    }
    else{
        return 'non perfect number'
    }
}


export default perfectNumber;