function arrayModifier(arr){
    let index = 0;
    index++
    let array = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while(command != 'end' ){
    let tokens = command.split(' ');

    console.log(tokens[0])
 
   
    command = arr.shift();
    }

}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);

    // switch(command){
    //     case swap:

    //     break;
    //     case multiply:

    //     break;

    //     case decrease:

    //     break;
    // }



    // for(let element = 0; element < arr.length;  element++){
    //     element = arr.shift().split(' ');
    
    //     console.log(array);
    //     console.log(element);
    
    //     }


    // function arrayModifier(input) {
    //     let array = input.shift().split(" ").map(Number);
    //    // console.log(array);
    //    let command = input.shift();
    //    while (command !== "end") {
    //        let tokens = command.split(" ");
    //        switch (tokens[0]) {
    //            case "swap":
    //                swap(array, index1, index2)
    //                break;
    //             case "multiply":
    //                 multiply(array, index1, index2);
    //                 break;
           
    //            case "decrease":
    //                decrease(array);
    //                break;
    //        }
       
    //    function swap(list, index1, index2) {
    //        let index1 = Number(tokens[1]);
    //        let index2 = Number(tokens[2]);
    //         array[index1] = array[index2];
    //         array[index2] = temp;
    //         break;
    // }
    // function multiply(list, index1, index2) {
    //     let index1 = Number(tokens[1]);
    //     let index2 = Number(tokens[2]);
    //     array[index1] *= array[index2];
    //     break;
    // }
    // function decrease(list) {
    // array = array.map(x => --x);    
    // }
    // command = input.shift();
     
    // }
    // console.log(array.join(", "));
    // }
     
    // arrayModifier([
    //     '23 -2 321 87 42 90 -123',
    //     'swap 1 3',
    //     'swap 3 6',
    //     'swap 1 0',
    //     'multiply 1 2',
    //     'multiply 2 1',
    //     'decrease',
    //     'end'
    //   ]); 