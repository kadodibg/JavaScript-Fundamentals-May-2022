function leapYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
leapYear(1900);
//Short solve
function leapYear(year) {
    let result = ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0 ? "yes" : "no")
    console.log(result);
}
leapYear(1900);