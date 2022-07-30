function invetory(array){
    let items = array.shift().split(', ');
    let command = array.shift();

    while(command !== 'Craft!'){
        let tokens = command.split(' - ');
        let action = tokens[0];
        let item = tokens[1];
        let index = items.indexOf(item);

        if(action === 'Collect'){
            if(index < 0){
                items.push(item)
            }
        }else if(action === "Drop"){
            if(index >= 0){
                items.splice(index, 1);
            }
        }else if(action === 'Combine Items'){
            let splitted = item.split(':')
            let oldItem = splitted[0];
            let newItem = splitted[1];
            index = items.indexOf(oldItem);
            if(index >=0){
                items.splice(index + 1, 0, newItem)
            }
            
        }else if(action === 'Renew'){
                if(index >= 0){
                    items.splice(index, 1);
                    items.push(item);
                }
            }
        command = array.shift();
    }
    console.log(items.join(", "))

}
invetory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron','Craft!'])