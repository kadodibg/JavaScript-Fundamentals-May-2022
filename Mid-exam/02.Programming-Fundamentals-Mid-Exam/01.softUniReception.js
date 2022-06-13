function softUniReception(arr) {
    let empEff = 0;
    let studentsCount = arr.pop();
    let time = 0;

    for (let element of arr) {
        empEff += Number(element);
    }
    for (let i = 0; i < studentsCount; i++) {
        studentsCount -= empEff
        time++;
        
        if (time % 3 == 0 && studentsCount >= 1 ) {
            time += 1;
        }
        
    }
    console.log(`Time needed: ${time}h.`)
}
softUniReception(['1','1','1','9'])
softUniReception(['1','1','1','10'])
softUniReception(['1','2','3','45'])
softUniReception(['3','2','5','40'])


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
//softUniReception(['5','6','4','20'])
softUniReception(['1','2','3','45'])
// softUniReception(['3','2','5','40'])