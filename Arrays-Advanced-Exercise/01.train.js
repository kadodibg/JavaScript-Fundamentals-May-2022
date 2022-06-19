function train(arr){

    let passInTrainArr = arr
    .shift()
    .split(' ')
    .map(Number);
    let maxCap = +arr.shift();

    for(let i = 0;  i < arr.length; i++){
        let commandNum = arr[i].split(' ');
            
        if(commandNum[0] === 'Add'){
                passInTrainArr.push(Number(commandNum[1]))
        }else{
            for(let j = 0; j < passInTrainArr.length; j++){
                if(Number(commandNum[0]) + passInTrainArr[j] <= maxCap){
                passInTrainArr[j] += Number(commandNum[0]);
                break;
                }
            }
        }

      // console.log(commandNum);

    }
    console.log(passInTrainArr.join(' ')); 
}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);