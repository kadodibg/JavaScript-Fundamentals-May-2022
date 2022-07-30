function shoppingList(shopList) {
    let shoppList = shopList.shift().split('!');  //groseries
    let command = shopList.shift();               //line

    while (command !== 'Go Shopping!') {
        let tokens = command.split(' ')
        let item = tokens[1];
        let newItem = tokens[2]
       
        switch (tokens[0]) {
            case 'Urgent':
                urgent(shoppList, item)
                break;
            case 'Unnecessary':
                unnecessary(shoppList, item);
                break;
            case 'Correct':
                correct(shoppList, item, newItem);
                break;
            case 'Rearrange':
                rearrange(shoppList, item)
                break;

            default: break;
        }
        command = shopList.shift();
    }
    console.log(shoppList.join(', '));

    function urgent(list, item) {
        if (list.includes(item) === false) {
            shoppList.unshift(item);
        }
    }
    function unnecessary(list, item) {
        if (list.includes(item) === true) {
            let index = list.indexOf(item);
            list.splice(index, 1)
        }
    }
    function correct(list, item, newItem) {
        if (list.includes(item) === true) {
            let index = list.indexOf(item)
            list[index] = newItem;
        }
    }
    function rearrange(list, item) {
        if (list.includes(item) === true) {
            let index = list.indexOf(item)
            list.splice(index, 1);
            list.push(item);
        }
    }
}
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Urgent Papper", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])
//shopList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])