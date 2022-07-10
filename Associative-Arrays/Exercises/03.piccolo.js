function piccolo(data){
    let parking = new Set;
    for(let line of data){
        let [command, carNumber] = line.split(', ');
        // let tokens = line.split(', ');
        // let command = tokens[0];
        // let carNumber = tokens[1];
        switch(command){
            case "IN":
                parking.add(carNumber);
                break;
            case "OUT":
                parking.delete(carNumber);
                break;
        }
    }
    if(parking.size === 0){
        console.log('Parking Lot is Empty');
        }
        let sortParking = Array.from(parking.values()).sort();
        console.log(sortParking.join('\n'))
}
piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])


// function piccolo(data){
   
//     let result = [];
   

//     for(let line of data){ 
//         let [directions, carNumber] = line.split(', ')
//         let res = [];
        
//         if(!res.includes(directions)){
          
//             if(!directions == "IN")  
//             result.push(carNumber)
//             }else{
//                 result.push(carNumber[1])
//             }
        

//         //console.log(res);
//         //console.log(result[0]);
//     }

//     // for(let car of result){
//     //     let 
//     //    if(car.hasOwnProperty(car)){
//     //     console.log('tuk sum');
//     //    }
//     // }
    
//     console.log(result.join('\n'));
//     // console.log('----');
//     // console.log(res.join('\n'));

// }
// piccolo([
// 'IN, CA2844AA',
// 'IN, CA1234TA',

// 'OUT, CA2844AA',

// 'IN, CA9999TT',
// 'IN, CA2866HI',

// 'OUT, CA1234TA',

// 'IN, CA2844AA',

// 'OUT, CA2866HI',

// 'IN, CA9876HH',
// 'IN, CA2822UU'])