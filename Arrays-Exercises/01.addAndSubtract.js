function addAndSubtract(arr){
    let myArr = arr;
    let sumOfOriginalArray =0;
    let modifiedArraySum = 0;
    for(let i = 0; i < myArr.length; i++ ){
        sumOfOriginalArray += myArr[i];
        
        if(myArr[i] % 2 === 0){
            myArr[i] += i;
        }else{
           // console.log(arr[i])
        myArr[i] -= i;
        }
        
        modifiedArraySum += myArr[i];
    }
    console.log(myArr)
    console.log(sumOfOriginalArray);
    console.log(modifiedArraySum)
}
addAndSubtract([5, 15, 23, 56, 35]);