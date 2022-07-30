function bonusScoringSystem(array){
    let numberOfStudents = Number(array.shift().split(' '));
    let numberOfLectures = Number(array.shift().split(' '));
    let additionalBonus = Number(array.shift().split(' '));
    let hignest = 0;
    let attendedLectures =0;
    
    for(let i = 0; i < numberOfStudents; i++){
        let attendancy = Number(array.shift().split(' '))
        let totalBonus = Math.round(attendancy / numberOfLectures * (5 + additionalBonus));
        
        if(totalBonus >= hignest){
            hignest = totalBonus;
            attendedLectures = attendancy;
        }
    }
    console.log(`Max Bonus: ${hignest}.`); 
    console.log(`The student has attended ${attendedLectures} lectures.`);
}
bonusScoringSystem(['5', '25', '30', '12', '19', '24','16', '20'])