function computerStore(input) {
    let typeOfClient = input.pop();
    let priceWithoutTax = 0;
    let taxes = 0;
    let totalPrice = 0;
    
    for (price of input) {
        if (price > 0) {
            let currentPrice = Number(price);
            priceWithoutTax += currentPrice;
        } else {
            console.log("Invalid price!");
            continue;
        }
    }
    
    taxes = priceWithoutTax * 0.2;
    totalPrice = priceWithoutTax + taxes;
    
    if (priceWithoutTax !== 0) {
        if (typeOfClient === "special") {
            totalPrice -= totalPrice * 0.1;
        }
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    } else {
        console.log("Invalid order!");
    }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore(["regular"]);
