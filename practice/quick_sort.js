class quickSort {

     constructor(array){
        this.array = array
     }

     sort(start, end){
        if(start < end){
            let pI = this.partition(start, end);
            this.sort(start, pI-1);
            this.sort(pI+1, end);
        }

     }


     partition(start, end){
        let idx = start-1;
        let pivot = this.array[end];
        
        for (let i=start; i<end; i++){
            if(pivot > this.array[i]){
                idx++;
                this.swap(idx, i);
            }
        }

        idx++;
        this.swap(idx, end);
        return idx;

    }

    swap(i, j){
        let temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;


    }
}

let arr = [7, 8, 9, 5, 2, 3, 1]
let qs = new quickSort(arr);
qs.sort(0, arr.length - 1);
console.log(qs.array);





