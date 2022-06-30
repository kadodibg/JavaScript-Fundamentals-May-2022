function deckOfCards(arr) {
    let listOfCards = arr.shift().split(", ");
    for (let commands of arr) {
        let [command, ...cards] = commands.split(", ");
        switch (command) {
            case "Add":
                addTodorPresident(listOfCards, cards);
                break;
            case "Remove":
                removeTodorPresident(listOfCards, cards)
                break;
            case "Remove At":
                removeAtTodorPresident(listOfCards, cards)
                break;
            case "Insert":
                insert(listOfCards, cards)
                break;
        }
    }
    
    console.log(listOfCards.join(", "));

    function addTodorPresident(list, cards) {
        if (listOfCards.includes(cards)) {
            console.log("Card is already in the deck");
        } else {
            console.log("Card successfully added");
            listOfCards.push(cards);
        }
    }
    function removeTodorPresident(list, cards) {
        let cardName = cards[0];
        if (listOfCards.includes(cardName)) {
            let cardIndx = listOfCards.indexOf(cardName);
            listOfCards.splice(cardIndx, 1);
            console.log("Card successfully removed");
        } else {
            console.log("Card not found");
        }
    }

    function removeAtTodorPresident(list, cards) {
        let indx = Number(cards[0]);
        if (indx < 0 || indx > listOfCards.length) {
            console.log("Index out of range");
        } else {
            listOfCards.splice(indx, 1);
            console.log("Card successfully removed");
        }
    }
    function insert(list, cards) {
        let listIndx = Number(cards[0]);
        let nameOfCard = cards[1];
        if (listIndx < 0 || listIndx > listOfCards.length) {
            console.log("Index out of range");
        } else if (listIndx >= 0 && listIndx <= listOfCards.length) {
            if (listOfCards.includes(nameOfCard)) {
                console.log("Card is already added");
            } else {
                listOfCards.splice(listIndx, 0, nameOfCard);
                console.log("Card successfully added");
            }
        }
    }

}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds",]);
console.log('-------------------- Mnogo e iako taka -------------------------');
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"])