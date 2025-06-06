
const stockBuyAndSell = (prices) => {

    if(prices.length === 0){
        throw new Error('No prices found');
    }

    let min = prices[0];
    let max = prices[0];

    for(let i=1; i<prices.length; i++){
        if(prices[i]<min){
            min = prices[i];
        }

        if(prices[i]>max){
            max = prices[i];
        }
    }


    let profit = max - min;
    return profit;

}

export default stockBuyAndSell;