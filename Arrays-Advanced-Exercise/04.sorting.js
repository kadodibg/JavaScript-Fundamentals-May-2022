function sorting(array) {
    //console.log("before chanching", array);
    array = array.sort((a, b) => b - a);
   // console.log("after chanching", array);
    let newArr = [];

    while (array.length > 0) {
        let biggerNum = array.shift();
        newArr.push(biggerNum);
        let smallNum = array.pop();
        newArr.push(smallNum);
    }
    console.log(newArr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);