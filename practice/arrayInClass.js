class ArrayPractice {
    #arr; 
   
    constructor(arr = []){
        this.#arr = arr;
    }

    pushItem(n){
        this.#arr.push(n);
    }

    showArr(){
        return this.#arr;
    }

    sumArr(){
        let n = this.#arr.length;
        let sum = 0;
        for(let i=0; i<n; i++){
            sum += this.#arr[i];
        }

        return sum;
    }
}


let newArr = new ArrayPractice();
newArr.pushItem(5);
newArr.pushItem(4);
newArr.pushItem(7);
console.log(newArr.showArr());
console.log('total sum is:', newArr.sumArr());
