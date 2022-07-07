function storage(data){
    let map = new Map();
    
    for(let line of data ){
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if(!map.has(product)){
            map.set(product, quantity)
        }else{
            currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }

        // console.log(tokens);
        // console.log(product);
        // console.log(quantity);
    }
    //console.log(map);

    // for(let kvp of map){
    //     console.log(kvp[0], '->', kvp[1]);
    // }

    for(let [product, quantity ] of map){
        console.log(product, "->", quantity);
    }
}
storage(['tomatoes 10','coffee 5', 'olives 100', 'coffee 40'])