function fetchData(id){
    return new Promise(resolve => {
        setTimeout(()=> resolve(`Data for ID ${id}`),1000);
    })
}

async function fetchSequential(){
    console.log("sequential");
    const data1 = await fetchData(1);
    const data2 = await fetchData(2);
    const data3 = await fetchData(3);
    // console.timeEnd("sequential");

    console.log([data1,data2,data3]);
}
fetchSequential()