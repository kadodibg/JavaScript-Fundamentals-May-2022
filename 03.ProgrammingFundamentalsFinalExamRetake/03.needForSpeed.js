function needForSpeed(input) {
    let num = Number(input.shift());
    let carList = {}
    let tankSize = 75;
   
    for (let i = 0; i < num; i++) {
        let line = input.shift();
        let [car, mileage, fuel] = line.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        
        carList[car] = { mileage, fuel }
    }
    line = input.shift();
    while (line !== 'Stop') {
        let [command, car, ...more] = line.split(' : ');
        // console.log(car);
        if (carList.hasOwnProperty(car)) {
            switch (command) {
                case 'Drive':
                    let distance = Number(more[0]);
                    let nededFuel = Number(more[1]);
                    let [key, value] = Object.values(carList[car]);
                    key = Number(key);
                    value = Number(value)
                    if (nededFuel <= value) {
                        carList[car].fuel = value - nededFuel;
                        carList[car].mileage = key + distance;
                        console.log(`${car} driven for ${distance} kilometers. ${nededFuel} liters of fuel consumed.`)
                    } else {
                        console.log("Not enough fuel to make that ride");
                    }
                    //console.table(carList[car].mileage);
                    if (carList[car].mileage > 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete carList[car];
                    }
                    break;
                case 'Refuel':
                    let [keyse, valuese] = Object.values(carList[car]);
                    keyse = Number(keyse);
                    valuese = Number(valuese);
                    let posFuel = Number(more[0]);
                    // nalichnoto gorivo - razmera na rezervoara = na neobhodimoto goriwo // tova zarezhdame 
                    let nFuel = tankSize - valuese; // kolko mozhe da subere rezervoara 60
                    //console.log(nFuel);
                    // ako neobhodimoto gorivo e po- malko ot vuzmozhnoto to togava //  zarezhdame vuzmozhnoto gorivo
                    // ako vuzmozhnoto gorivo e po-goliamo ot neobhodimoto goriwo // zarezhdame neobhodimoto 
                    if (nFuel >= posFuel) {
                        let zarFuel = posFuel + valuese
                        carList[car].fuel = zarFuel;
                        console.log(`${car} refueled with ${posFuel} liters`);
                    } else if (posFuel > nFuel) {
                        carList[car].fuel = nFuel + valuese;
                        console.log(`${car} refueled with ${nFuel} liters`);
                    }
                    break;
                case 'Revert':
                    let [k, v] = Object.values(carList[car]);
                    k = Number(k);
                    v = Number(v);
                    let revKm = Number(more[0]);
                    carList[car].mileage = k - revKm;
                    if (carList[car].mileage > 10000) {
                        console.log(`${car} mileage decreased by ${revKm} kilometers`);
                    } else {
                        carList[car].mileage = 10000
                    }
                    break;
                default:
                    console.log('Error');
                    break;
            }
        } else {
            console.log('Erorr');
        }
        line = input.shift();
    }
    for (let [car, value] of Object.entries(carList)) {
        let km = 0;
        let leters = 0;
        for (let [type, amount] of Object.entries(value)) {
            if (type === 'mileage') {
                km += amount
            } else {
                leters += amount
            }
        }
        console.log(`${car} -> Mileage: ${km} kms, Fuel in the tank: ${leters} lt.`);
    }
    //console.table(carList);
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log('--------');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])