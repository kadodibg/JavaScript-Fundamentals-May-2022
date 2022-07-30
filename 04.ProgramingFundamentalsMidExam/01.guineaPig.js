function guineaPig(input){
    let [food, hay, cover, weight] = input;
    let foodGr = food * 1000;
    let hayGr = hay * 1000;
    let coverGr = cover * 1000;
    let weigthGr = weight * 1000;
    let days = 1;

    while(days <= 30){
        foodGr -= 300;
        if(days % 2 === 0){
            hayGr -= (foodGr * 5) / 100;
        }
        if(days % 3 === 0){
            coverGr  -= weigthGr * 0.333; 
        }
        days++;
    }
    let foodKg = foodGr / 1000;
    let hayKg = hayGr / 1000;
    let coverKg = coverGr / 1000;

    if(foodKg >= 0 && hayKg >= 0 && coverKg >= 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
    }else{
        console.log('Merry must go to the pet store!');
    }
}
guineaPig(["10", "5", "5.2", "1"]);