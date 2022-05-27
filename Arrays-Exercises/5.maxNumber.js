function maxNumber(arr) {
    let topInteger = [];
    for (let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        let isTopInteger = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (currElement <= nextEl) {
                isTopInteger = false
                break;
            }
        }

        if (isTopInteger) {
            topInteger.push(currElement);
        }
    }
    console.log(topInteger.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);