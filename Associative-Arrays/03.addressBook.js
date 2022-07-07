function addressBook(data) {
    let result = {};

    for (let line of data) {
        let [name, address] = line.split(':');
        result[name] = address
    }
   
    let unsortedKey = Object.keys(result);
    let sortKey = unsortedKey.sort((a,b) => a.localeCompare(b))
   // console.log(sortKey);

    for(let key of sortKey){
        //console.log(key, "->", result[key]);
        console.log(key);
        console.log(result[key]);
    }
    console.log(result);
   
    // let entries = Object.entries(result);
    // let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
    //     return keyA.localeCompare(keyB)
    // });

    // for (let [name, address] of sortEntries) {
    //     console.log(name, '->', address);
    // }
    //     console.table(sortEntries);
}
addressBook(['Tim:Doe Crossing',
            'Bill:Nelson Place',
            'Peter:Carlyle Ave',
            'Bill:Ornery Rd']);