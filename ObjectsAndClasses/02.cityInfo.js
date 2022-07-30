function cityInfo(city){
   
    let props = Object.keys(city);
   
    for(let prop of props){
        console.log(`${prop} -> ${city[prop]}`);
    }
}
cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    });

