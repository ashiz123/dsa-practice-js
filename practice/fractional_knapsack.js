function fractionalKnapsnack(value, quantity, capacity){

    let items = [];
    for (let i=0; i<value.length-1; i++){
        items.push({value : value[i],
            quantity : quantity[i],
            ratio : value[i]/quantity[i]
        });
    }

    //items = [{100, 10, 10}, {120, 20, 6}, {150, 30, 5}]

    for (let i=0; i<items.length-1; i++){
        let maxRatioIndex = i;

        for(let j=i+1; j<items.length; j++){
            if(items[j].ratio > items[maxRatioIndex].ratio){
                maxRatioIndex = j;
            }
        }


        if(maxRatioIndex !== i){
            let temp = items[i];
            items[i] = items[maxRatioIndex];
            items[maxRatioIndex] = temp;
        }
    }


    let totalValue = 0;
    let remainingCapacity = capacity;

    for(let i=0; i<items.length; i++){

        if(remainingCapacity === 0){
            console.log('Capacity exceed');
            break;
        }

        if(remainingCapacity > items[i].quantity){
            totalValue+=items[i].value;
            remainingCapacity = remainingCapacity - items[i].quantity;
        } else{
            let fraction = remainingCapacity / items[i].quantity;
            totalValue += fraction * items[i].value;
            break;
        }

        

    }


    return totalValue;

}
let value = [100, 120, 150];
let quantity = [20, 10, 30];
let capacity = 50;
console.log(fractionalKnapsnack(value, quantity, capacity));