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

// function solve(data){
//     let myMap = new Map();

//     myMap.set('name', 'Todor');
//     console.log(myMap.keys());



//     // console.log(myMap);
//     // console.log(myMap.get('name'));
//     // console.log(myMap.has('name'));
//     // myMap.set('age', 30)
//     // console.log(myMap.has('pesho'));
// }
// solve()



// function solve(data){
   
//     let entries.sort((a,b) =>{
//         keyA = a[0];
//         keyB = b[0];
//     });
// }
// solve()


// function solve(data){
//     let myArr = ['Todor', '0889987776', 'Sofia'];
//     let [name, phoneNumber] = myArr;
//     console.log(myArr[5]);
//     console.log(name, phoneNumber);
// }
// solve()


// function solve(data){
//     let myArr = [1,2,3,4,5,6,7]
//     let myObj = {
//                 'one': 1,
//                 'two': 2,
//                 'three': 3,
//             }
//     for(let any in myObj){
//         console.log(any);
//     }
// }
// solve()


// function solve(data){
//     let nextKey = 'four'
//     let myObj = {
//         'one': 1,
//         'two': 2,
//         'three': 3,
//         [nextKey]: 4
//     }

//     for(let key in myObj){
//     console.log(myObj[key]);
//     }

// }
// solve()