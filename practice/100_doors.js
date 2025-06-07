function hundredDoors(){
    const doors = [];


    for(let i=1; i<=100; i++){

        let factorCount = 0;
        
        for(let j=1; j<=i; j++){
            if(i%j === 0){
                factorCount++;
            }
        }

        if(factorCount%2===0){
            doors.push(i);
        }
    }

    return doors;



}

module.exports = hundredDoors;