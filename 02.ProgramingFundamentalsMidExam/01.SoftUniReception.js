function softUniReception(arr){
    let empEff = 0;
    let studentsCount = arr.pop();
    let time = 0;

    for(let element of arr){
    empEff += Number(element);
    }
    
    while(studentsCount > 0 ){
        studentsCount -= empEff;
        time++
        if(time % 4 == 0){
            time +=1
        }
    }
    console.log(`Time needed: ${time}h.`)
}
softUniReception(['5','6','4','20']);