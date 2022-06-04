function orders(prod, quantity){
    switch(prod){
        case "coffee":
            console.log(`${(quantity * 1.5).toFixed(2)}`);
            break;
        case "water": 
        console.log(`${(quantity * 1.00).toFixed(2)}`);
            break;
        case "coke": 
        console.log(`${(quantity * 1.40).toFixed(2)}`);
            break;
        case "snacks":
            console.log(`${(quantity * 2.00).toFixed(2)}`);
            break;
            
    }
}
orders("water", 5);
orders("coffee", 3);
orders("coke", 3);
orders('snacks', 6)