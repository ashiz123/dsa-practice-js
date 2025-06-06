
// priority queue always come with priority  [['cat', 1], ['dog', 3], ['monkey', 3]]
class priorityQueue {
    

    constructor(lists){
        this.lists = lists;
    }

    printCollection(){
        console.log(this.lists);
    }


    enqueue(element){
        if(this.size()=== 0){
            this.lists.push(element)
        }
        else{
            let added = false;
             for(let i= 0; i<this.size(); i++){
             if(element[1]<this.lists[i][1]){
                this.lists.splice(i, 0, element);
                added = true;
                break;
             }
            }

            if(!added){
            this.lists.push(element);
        }
        }

        
    }

    dequeue(){
         this.lists.shift();
    }

    firstItem(){
        return this.lists[0];
    }

    size(){
        return this.lists.length;
    }

    isEmpty(){
        return this.lists.length === 0;
    }
}

const lists = [['cat', 1], ['dog', 3], ['monkey', 3]];
const priority = new priorityQueue(lists);
priority.enqueue(['human', 1]);
priority.enqueue(['test', 1]);
priority.printCollection();