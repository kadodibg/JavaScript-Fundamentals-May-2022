function storage(data){
    let map = new Map();

    for(let line of data){
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        
        if(!map.has(product)){
            map.set(product, quantity)
        }else{
            let currQuantity = map.get(product);
            let newsQuantity = currQuantity += quantity;
            map.set(product, newsQuantity)
        }
    }

    for(let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
  
}
storage(['tomatoes 10','coffee 5', 'olives 100', 'coffee 40'])