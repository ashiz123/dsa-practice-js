function api(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('weather api');
            resolve('success');
        }, 5000)
    });

    return promise;
}


async function getWeather(){
    await api();
    await api();
}
