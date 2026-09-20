function fetchData(id){
    return new Promise(resolve => {
        setTimeout(()=> resolve(`Data for ID ${id}`),1000);
    })
}

async function fetchParallel(){
    console.log("Parallel");
    const results = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ])
    // console.timeEnd("Parallel");
    console.log(results);
}
fetchParallel()