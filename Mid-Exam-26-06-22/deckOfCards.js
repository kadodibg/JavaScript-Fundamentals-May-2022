// function deckOfCards(arr) {
//     let listOfCards = arr.shift().split(", ");
//     let commands = arr.shift();
    
//     for (let commands of arr) {
//         let [command, ...cards] = commands.split(", ");
//         switch (command) {
//         case "Add":
//             addTodorPresident(listOfCards, cards);
//             break;
//         case "Remove":
//             removeTodorPresident(listOfCards, cards)
//             break;
//         case "Remove At":
//             removeAtTodorPresident(listOfCards, cards)
//             break;
//         case "Insert":
//         insert(listOfCards, cards)
//             break;
//         }
//     }
//     console.log(listOfCards.join(", "));
    
//     function addTodorPresident(list, cards){
//     if (listOfCards.includes(cards)) {
//         console.log("Card is already in the deck");
//     } else {
//         console.log("Card successfully added");
//         listOfCards.push(cards);
//         }
//     }
//     function removeTodorPresident(list, cards){
//         let cardName = cards[0];
//         if (listOfCards.includes(cardName)) {
//         let cardIndx = listOfCards.indexOf(cardName);
//         listOfCards.splice(cardIndx, 1);
//         console.log("Card successfully removed");
//         } else {
//         console.log("Card not found");
//         }
//     }

//     function removeAtTodorPresident(list, cards){
//         let indx = Number(cards[0]);
//         if (indx < 0 || indx > listOfCards.length) {
//             console.log("Index out of range");
//         } else {
//             listOfCards.splice(indx, 1);
//             console.log("Card successfully removed");
//         }
//     }
//     function insert(list, cards){
//         let listIndx = Number(cards[0]);
//         let nameOfCard = cards[1];
//         if (listIndx < 0 || listIndx > listOfCards.length) {
//           console.log("Index out of range");
//         } else if (listIndx >= 0 && listIndx <= listOfCards.length) {
//             if (listOfCards.includes(nameOfCard)) {
//             console.log("Card is already added");
//             }else {
//             listOfCards.splice(listIndx, 0, nameOfCard);
//             console.log("Card successfully added");
//             }
//         }
//     }
    
// }
// deckOfCards([ "Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds", ]);
// console.log('-------------------- Mnogo e iako taka -------------------------');
// deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades","Remove At, 1"])


function deckOfCards(input) {
    let cards = input.shift().split(', ');
    let n = Number(input.shift());
 
    for (let i = 0; i < n; i++) {
        let [command, card, index] = input.shift().split(', ');
 
        if (command == 'Add') {
            if (cards.includes(card)) {
                console.log('Card is already in the deck');
            } else {
                cards.push(card);
                console.log('Card successfully added');
            }
        } else if (command == 'Remove') {
            if (cards.includes(card)) {
                let index = cards.indexOf(card);
                cards.splice(index, 1);
                console.log('Card successfully removed');
            } else {
                console.log('Card not found');
            }
        } else if (command == 'Remove At') {
            card = Number(card)
            if (card < 0 || card > cards.length) {
                console.log('Index out of range');
            } else {
                cards.splice(card, 1)
                console.log('Card successfully removed');
            }
        } else if (command == 'Insert') {
            card = Number(card);
            if (card < 0 || card > cards.length) {
                console.log("Index out of range");
            } else if (cards.includes(index)) {
                console.log('Card is already added');
            } else {
                cards.splice(card, 0, index);
                console.log('Card successfully added');
            }
        }
    }
    console.log(cards.join(', '));
}

deckOfCards((["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, Ace of Diamonds", "Insert, 2, Anna", "Remove, Ace of Diamonds"]))

// function deckOfCards(array) {
//     let cards = array.shift().split(', ');
//     let line = Number(array.shift());

//     for (let i = 0; i < line; i++) {
//         let tokens = array.shift().split(', ')
//         let command = tokens[0];
//         let status = tokens[1]
//         let cardName = tokens[2]
//         let index = tokens.indexOf(cards);
//         //console.log(command);
//         switch (command) {
    
//             case "Add":
//                 if (cards.includes(status) !== true) {
//                     cards.push(status);
//                     console.log('Card successfully added');
//                 } else {
//                     console.log("Card is already in the deck");
//                 }
//                 break;
//             case "Remove":
//                 if (cards.includes(status) !== false) {
//                     cards.shift(status);
//                     console.log("Card successfully removed");
//                 } else if (cards.includes(status) !== true){
//                     console.log("Card not found");
//                 }
//             break;
//            case 'Remove At':
//             status = Number(status)
//             if( status < 0 || status > cards.length){
//                 console.log("Index out of range")
//             }
//             if(status >= 0 && cards.includes(status) !== true){
//                 console.log("Card successfully removed");
//                 cards.splice(status, 1)
//             }
//             break;
           
//             case 'Insert':
//                 status = Number(status)
//                 if( status < 0 || status > cards.length){
//                     console.log("Index out of range")
//                 }else if(status > 0 && cards.includes(status) !== false){
//                     console.log(status);
//                     console.log("Card is already added");
//                 }else if(status > 0 && cards.includes(status) !== true) {
//                     console.log("Card successfully added");
                   
//                     cards.splice(status, 0, cardName);
//                    // console.log(status);
//                 }
              
//         }
//     }
//     console.log(cards.join(', '))
// }
// deckOfCards([
//   "Ace of Diamonds, Queen of Hearts, King of Clubs",
//   "3",
//   "Add, King of Diamonds",
//   "Insert, 2, Jack of Spades",
//   "Remove, Ace of Diamonds",
// ])
