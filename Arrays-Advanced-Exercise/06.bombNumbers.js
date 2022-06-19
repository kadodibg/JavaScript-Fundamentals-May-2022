function bombNumbers(arr, bomb){
    let bombNum = bomb[0];
    let bombRadius = bomb[1];
    let indexOfBomb = arr.indexOf(bombNum);

    while(indexOfBomb !== -1){
        let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
        let explosionLength = bombRadius * 2 + 1;
        arr.splice(startExplosionIndex, explosionLength);
        indexOfBomb = arr.indexOf(bombNum);
    }
    let sum = arr.reduce((a, b) => a + b, 0);
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])