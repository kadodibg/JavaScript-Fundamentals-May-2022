function rotateArray(arr) {
    let rotations = arr.pop();
    
    for (let i = 0; i < rotations; i++) {
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(' '));
}
//rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);