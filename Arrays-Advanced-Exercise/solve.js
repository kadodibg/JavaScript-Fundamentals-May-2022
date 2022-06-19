// function x(){
    
//     let arr = [1, 2, 3, 4, 5];
//     arr.splice(1, 0);
//     let arr2 = arr.splice(1, 1)

//     console.log(`Arr: ${arr2.join(' ')}`);
//     }
//     x();

function x(){
    
    let arr = [1, 2, 3, 4, 5];
    let newArray = arr.map(el => el * el);

    console.log(`Arr: ${newArray}`);
    }
    x();