function nextDay(year, month, day) {
    if (year < 10) {
        year = (`Number[190${year}]`);
    } else if (year < 100) {
        year = (`Number[19${year}]`);
    }
    let newDay = day + 1;
    let newMonth = month;
    let newYear = year;
    if (month === 2 && newDay > 20) {
        if (year % 4 === 0 && newDay > 29) {
            newMonth += 1;
            newDay = 1;
        } else if (year % 4 !== 0) {
            newMonth += 1;
            newDay = 1;
        }
    }
    if (newDay > 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) {
        newDay = 1;
        if (month === 12) {
            newMonth = 1;
            newYear += 1;
        }
        newMonth += 1;
    } else if (newDay > 30 && (month === 2 || month === 4 || month === 6 || month === 9 || newMonth === 11)) {
        newDay = 1;
        newMonth += 1;
    }
    console.log(`${newYear}-${newMonth}-${newDay}`)
}
nextDay(2016, 9, 30);

// Example for parseInt
function parseIn(num) {
    const parsed = parseInt(num)
    console.log(parsed);
}
parseIn("5.pesho")

