function taxCalculator(array){
    let cars = array.shift().split('>>');
    let carType = 0;
    let yearsOfUse = 0;
    let totalTaxToPay = 0;
    let agencyTax = 0;
    let familyTax = 50;
    let heavyDutyTax = 80;
    let sportTax = 100;

    for(let el of cars){
        let [splited, ...allKm] = el.split(' ');
        console.log(allKm[0]);
      //
      //  carType = splited[0];
       // yearsOfUse = splited[1];

        if(splited[0] === 'family'){
            familyCars(cars, splited);
        }else if (splited[0] === 'heavyDuty'){
            heavyDutyCars(cars, splited)
        }else if (splited[0] === 'sports'){
            sportCars(cars, splited)
        }else{
           invalidCars(cars, splited)
        }
    }
    console.log(`The National Revenue Agency will collect ${agencyTax.toFixed(2)} euros in taxes.`);
    
    function familyCars(list, splited){
        let allKm = Math.floor(splited[2] / 3000);
        totalTaxToPay = allKm * 12 + (familyTax - yearsOfUse * 5);
        console.log(`A ${carType} car will pay ${totalTaxToPay.toFixed(2)} euros in taxes.`);
        agencyTax += totalTaxToPay
    }
    function heavyDutyCars(list, splited){
        let allKm = Math.floor(splited[2] / 9000);
        totalTaxToPay = allKm * 14 + (heavyDutyTax - yearsOfUse * 8);
        console.log(`A ${carType} car will pay ${totalTaxToPay.toFixed(2)} euros in taxes.`);
        agencyTax += totalTaxToPay
    }

    function sportCars(list, splited){
        let allKm = Math.floor(splited[2] / 2000);
        totalTaxToPay = allKm * 18 + (sportTax - yearsOfUse * 9);
        console.log(`A ${carType} car will pay ${totalTaxToPay.toFixed(2)} euros in taxes.`);
        agencyTax += totalTaxToPay
    }

    function invalidCars(lis, splited){
        carType = splited[0];
        if(carType !=='family' || carType !=='heavyDuty' || carType !=='sports'){
            console.log('Invalid car type.');
        }
    }

}
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])
console.log("-------------------Very Nice--------------------");
taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ])