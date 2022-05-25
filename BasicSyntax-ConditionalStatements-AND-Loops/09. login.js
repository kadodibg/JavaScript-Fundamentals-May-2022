// function login (input) {

//     let userName = input[0];
//     let count = 0;

//     for (let index = 1; index < input.length; index++) {
//         if(count === 3){
//             console.log(`User ${userName} blocked!`);
//             break;
//         }
        
//         let reverseString = input[index];
//         reverseString = reverseString.split(``);
//         reverseString = reverseString.reverse();
//         reverseString = reverseString.join(``);
        
//         if(reverseString !== userName){
//             console.log(`Incorrect password. Try again.`)
//         }else {
//             console.log(`User ${userName} logged in.`);

//         }
//         count++;
//     }

// }
// login(['Acer','login','go','let me in','recA']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);

// function login(input) {
//     let username = input.shift();
//     let password = username.split('').reverse().join('');
  
//     let failsCounter = 0;
//     let currentPassword = input.shift();
//     while (currentPassword !== password && failsCounter < 3) {
//       failsCounter++;
//       console.log(`Incorrect password. Try again.`);
//       currentPassword = input.shift();
//     }
  
//     if (currentPassword === password) {
//       console.log(`User ${username} logged in.`);
//     } else {
//       console.log(`User ${username} blocked!`);
//     }
//   }

//   login(['Acer','login','go','let me in','recA']);
// login(['sunny','rainy','cloudy','sunny','not sunny']);


function login (input) {
  let index = 0;
  let username = input[index++]
  let password ='';
  let counter = 0;

  for(let i = username.length-1; i >= 0; i--){
    password = password + username[i];

  }

  while(input[index] !== password){
    counter++;
    if(counter === 4){
      console.log(`User ${username} blocked!`);
      return;

    }else{
      console.log(`Incorrect password. Try again.`)

    }
    index++
  }
  if(input[index] === password){
    console.log(`User ${username} logged in.`);
  }
}
login(['Acer','login','go','let me in','recA']);
