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

deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
])

