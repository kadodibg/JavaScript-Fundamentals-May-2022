function town(input) {
    let currTown = {};
    
    for (let city of input) {
        let cityElement = city.split(' | ');
        
        let townName = cityElement[0];
        let townlatitude = Number(cityElement[1]);
        let townlongitude = Number(cityElement[2]);
       
        currTown.town = townName;
        currTown.latitude = townlatitude.toFixed(2);
        currTown.longitude = townlongitude.toFixed(2);
        console.log(currTown);
    }
}
town(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);