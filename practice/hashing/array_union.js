function arrayUnion(a, b){

const mp = {};
let union = [];

for(let i=0; i<a.length; i++){
    if(!mp[a[i]]){
         mp[a[i]] = true;
         union.push(a[i]);
    }
   
}

for(let j=0; j<b.length; j++){
    if(!mp[b[j]]){
         mp[b[j]] = true;
         union.push(b[j]);
    }
}

return union;
}


console.log(arrayUnion([1,2,2,3], [2,3,4,4,5]))