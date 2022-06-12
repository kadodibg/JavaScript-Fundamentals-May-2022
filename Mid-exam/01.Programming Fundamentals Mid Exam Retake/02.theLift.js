function theLift(input){
    peopleCount = Number(input.shift());
    wagons = input.shift().split(' ');
    wagonSpaceCount = 0;

    for(let i = 0; i < wagons.length; i++){
        
        let currWagon = Number(wagons[i]);

        if(currWagon < 4){
            if(peopleCount >= 4){
                if(currWagon != 0){
                    peopleCount -= (4 - currWagon);
                    wagons[i] = currWagon;
                    emptySpots = false;
                }else{
                    currWagon = 4
                    peopleCount -= currWagon;
                    wagons[i] = currWagon;
                }
            }else{
            currWagon += peopleCount;
            peopleCount = 0;
            wagons[i] = currWagon;
            emptySpots = true;
            }
        }
        
    }
    console.log(peopleCount);
    console.log(wagons);

    // console.log("The lift has empty spots! {wagons separated by ' '}");
    // console.log("There isn't enough space! {people} people in a queue! {wagons separated by ' '}");

}
theLift(["15", "0 0 0 0 0"])
//theLift(["20", "0 2 0"])