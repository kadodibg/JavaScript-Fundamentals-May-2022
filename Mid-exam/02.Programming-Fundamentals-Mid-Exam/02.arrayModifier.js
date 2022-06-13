function arrayModifier(arr){
    let array = arr.shift();
    let arr1 = array.split('');
    
    console.log(array[1]);
    console.log(arr1[1])

}
arrayModifier(  [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);