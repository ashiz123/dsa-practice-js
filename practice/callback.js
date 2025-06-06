// function test(id , nextCall){
//    setTimeout(() => {
//       console.log('testing:', id);
//       if(nextCall){
//         nextCall();
//       }
//    } , 3000)
// }

//call hell
// test(1, () => {
//     test(2, () => {
//         test(3, () => {
//             test(4)
//         })
//     })
// });

//To make it better promise is introduced.

function asyncData1(){
 let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('testing');
        resolve('success');
    }, 5000)
});

return promise

}

function asyncData2(){
 let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('testing');
        resolve('success');
    }, 6000)
});

return promise;
}

    //chaining promises
    console.log('fetching data1');
    asyncData1().then((res) => {
    console.log('fetching data2');
    asyncData2().then((res) => {
    console.log(res);
})
})


















