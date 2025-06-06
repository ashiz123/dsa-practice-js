class CircularQueue {


    constructor(capacity){
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(capacity).fill(null);
    }


    isEmpty(){
       return this.front===-1;
    }

    isFull(){
        //if target index is equal to front index means full
        return (this.rear +1) % this.capacity === this.front;
    }

    enqueue(value){
        if(this.isFull()){
            console.log('Queue is already full');
            return;
        }

        if(this.isEmpty()){
            this.front = 0;
        }

        this.rear =( this.rear +1) % this.capacity;
        this.queue[this.rear] = value;
        console.log(`enqueued: ${value}`);
    }



    dequeue(){
        if(this.isEmpty()){
            console.log('No item to remove');
            return null;
        }

        const removed = this.queue[this.front];
        this.queue[this.front] = null;

        if(this.front === this.rear){
            this.front = this.rear = -1; //only one element was present at index 0
        }else{
            this.front = (this.front + 1) % this.capacity;
        }

        console.log(`removed: ${removed}`);
        return removed;



    }


    displayQueue(){
        return this.queue;
    }


    display(){
          if (this.isEmpty()) return [];

    let result = [];
    let i = this.front;

    while (i!==this.rear) {
        result.push(this.queue[i]);
        i = (i + 1) % this.capacity;
    }

    result.push(this.queue[this.rear]);
    return result;
    }






}

let cq = new CircularQueue(5);

console.log(cq.display());
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(1);
cq.enqueue(1);
cq.enqueue(1);
cq.dequeue(3);
cq.dequeue(4);
cq.enqueue(2);
cq.enqueue(5);
console.log(cq.displayQueue());
console.log(cq.display());


