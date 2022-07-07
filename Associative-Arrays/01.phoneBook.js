function phoneBook(data){
  let phoneBooks = new Map();

  for(let line of data){
      let [name, phoneNumber] = line.split(' ');
      phoneBooks.set(name, phoneNumber);
  }
  console.log(phoneBooks);

  // for(let [name, phoneNumber] of Object.entries(phoneBooks)){
  //   console.log(name, '->', phoneNumber);
  //   //  console.log(key, '- >', phoneBooks[key] );
  // }
}
phoneBook(['Tim 0834212554',
          'Peter 0877547887',
          'Bill 0896543112',
          'Tim 0876566344'])


// function phoneBook(data){
//     let phoneBooks = {};

//     for(let line of data){
//        // let tokens = line.split(' ');
//         let [name, phoneNumber] = line.split(' ')
//         // let name = tokens[0];
//         // let phoneNumber = tokens[1];
//         phoneBooks[name] = phoneNumber
//     }

//     for(let [name, phoneNumber] of Object.entries(phoneBooks)){
//       console.log(name, '->', phoneNumber);
//       //  console.log(key, '- >', phoneBooks[key] );
//     }
// }
// phoneBook(['Tim 0834212554',
//             'Peter 0877547887',
//             'Bill 0896543112',
//             'Tim 0876566344'])

// function phoneBook(data){
//     let phoneBooks = {};

//     for(let line of data){
//         let tokens = line.split(' ');
//         let name = tokens[0];
//         let phoneNumber = tokens[1]
//         phoneBooks[name] = phoneNumber
//     }
    
//     for(let key in phoneBooks){
//         console.log(key, '- >', phoneBooks[key] );
//     }
// }
// phoneBook(['Tim 0834212554',
//             'Peter 0877547887',
//             'Bill 0896543112',
//             'Tim 0876566344'])