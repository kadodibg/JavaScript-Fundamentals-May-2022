function orders(prod, quantity){
    let result = 0;

    switch(prod){
        case "coffee":
            result = quantity * 1.5;
            break;
        case "water": 
            result = quantity * 1.00;
            break;
        case "coke": 
            result = quantity * 1.40;
            break;
        case "snacks":
            result = quantity * 2.00;
            break;
            
    }
    console.log(`${result.toFixed(2)}`)
}
orders("water", 5);
orders("coffee", 3);
orders("coke", 3);
orders('snacks', 6)