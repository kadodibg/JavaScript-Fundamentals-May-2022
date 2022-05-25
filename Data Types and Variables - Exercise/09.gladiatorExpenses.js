function gladiatorExpenses(count, helmetPrice, swordPrice, shielPrice, armourPrice) {
    let sum = 0;
    let counter = 0;
    let service = 0;

    for (let i = 1; i <= count; i++) {
        // console.log(i)

        if (i % 2 === 0) {
            sum += helmetPrice;
        }
        if (i % 3 === 0) {
            sum += swordPrice
        }
        if (i % 6 === 0) {
            sum += shielPrice
        }
        if (i % 12 === 0) {
            sum += armourPrice;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus `);
    //console.log(counter);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200);