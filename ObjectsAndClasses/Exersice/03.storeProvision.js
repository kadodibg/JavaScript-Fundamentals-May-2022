function storeProvision(storeStock, forDelivery){
    let productList = {};
    
    for(let i = 0; i < storeStock.length; i += 2){
       let currProduct = storeStock[i];
       productList[currProduct] = Number(storeStock[i + 1]);
    }

    for(let i = 0; i < forDelivery.length; i += 2){
        let currProduct = forDelivery[i];
        if(!productList.hasOwnProperty(currProduct)){
            productList[currProduct] = 0;
        }
        productList[currProduct] += Number(forDelivery[i + 1]);
    }
    for(let product in productList){
        console.log(`${product} -> ${productList[product]}`);
    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
