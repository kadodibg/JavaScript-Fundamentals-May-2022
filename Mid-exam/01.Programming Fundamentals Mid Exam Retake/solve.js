function computerStore(array) {
    let index = 0;
    let command = array[index++];
    let prices = 0;
    let isInside = false;
   
    while (command != "special" && command != "regular") {
      isInside = true;
     
      if (Number(command) < 0) {
        console.log("Invalid price!");
        command = array[index++];
        continue;
      }

      prices += Number(command);
      command = array[index++];

    }
    
    let taxes = prices * 0.2;
    let totatlPrice = prices + taxes;
    
    if (isInside) {
      if (command === "special") {
        let disc = totatlPrice * 0.1;
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${prices.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${(totatlPrice - disc).toFixed(2)}$
        `);
      } else {
        console.log(`Congratulations you've just bought a new computer!
      Price without taxes: ${prices.toFixed(2)}$
      Taxes: ${taxes.toFixed(2)}$
      -----------
      Total price: ${totatlPrice.toFixed(2)}$`);
      }
    } else {
      console.log("Invalid order!");
    }
  }
  computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
  computerStore(["regular"]);