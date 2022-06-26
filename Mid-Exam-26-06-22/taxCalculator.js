function taxCalculator(input) {
    let car = input.shift().split('>>')
    let famCarTaxes = 0;
    let heavyCarTaxes = 0;
    let sportCarTaxes = 0;
    let taxes = 0;
    
    let famTax = 50;
    let heavyTax = 80;
    let sportTax = 100;
    
    while (car.length) {
        let oneCar = car.shift();
        let splitted = oneCar.split(' ')
        
        if (splitted[0] == 'family') {
            famCarTaxes = Math.floor(Number((splitted[2]) / 3000)) * 12 + (famTax - Number(splitted[1]) * 5);
            taxes += Math.floor(Number((splitted[2]) / 3000)) * 12 + (famTax - Number(splitted[1]) * 5)
            console.log(`A ${splitted[0]} car will pay ${famCarTaxes.toFixed(2)} euros in taxes.`);
        } else if (splitted[0] == 'heavyDuty') {
            heavyCarTaxes = Math.floor(Number((splitted[2]) / 9000)) * 14 + (heavyTax - Number(splitted[1]) * 8);
            taxes += Math.floor(Number((splitted[2]) / 9000)) * 14 + (heavyTax - Number(splitted[1]) * 8);
            console.log(`A ${splitted[0]} car will pay ${heavyCarTaxes.toFixed(2)} euros in taxes.`);
        } else if (splitted[0] == 'sports') {
            sportCarTaxes = Math.floor(Number((splitted[2]) / 2000)) * 18 + (sportTax - Number(splitted[1]) * 9);
            taxes += Math.floor(Number((splitted[2]) / 2000)) * 18 + (sportTax - Number(splitted[1]) * 9);
            console.log(`A ${splitted[0]} car will pay ${sportCarTaxes.toFixed(2)} euros in taxes.`);
        } else {
            console.log('Invalid car type.');
        }
    }

    console.log(`The National Revenue Agency will collect ${taxes.toFixed(2)} euros in taxes.`);

}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
//taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])