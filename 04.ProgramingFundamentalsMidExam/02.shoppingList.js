function shoppingList(shopList){
    let list = shopList.shift().split('!');
    let command = shopList.shift();

    while(command !== 'Go Shopping!'){
        let tokens = command.split(' ')
        let status = tokens[0];
        let item = tokens[1];
        let index = list.indexOf(item);

        if(status === 'Urgent'){
            if(index <= 0){
                list.unshift(item)
            }
        }else if (status === 'Unnecessary'){
            if(index >= 0){
                list.splice(index, 1);
            }
        }else if(status === 'Correct'){
            if (list.includes(item) == true) {
                let newItem = tokens[2]
                let index = list.indexOf(item);
                list[index] = newItem;
            }
        }else if(status === 'Rearrange'){
            if (list.includes(item) == true) {
                let index = list.indexOf(item);
                // splice and push can not be chained, otherwise will not include removed item at end of list
                list.splice(index, 1);
                list.push(item);
            }
        }
        // console.log(command);
        // console.log(status);
        // console.log(item);
        command = shopList.shift();
    }
    console.log(list.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grapes","Correct Pepper Onion", "Urgent Papper", "Rearrange Grapes","Correct Tomatoes Potatoes", "Go Shopping!"])
shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])