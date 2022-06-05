function oddAndEvenSum(number){
    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < numberAsString.length; i++){
        if(numberAsString[i] % 2 === 0 ){
            evenSum += Number(numberAsString[i]);
        }else if(numberAsString % 1 == 0){
            oddSum += Number(numberAsString[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);