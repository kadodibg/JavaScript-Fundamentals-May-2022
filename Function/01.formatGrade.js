function formatGrade(grade) {
    let formatted = grade.toFixed(2);
    let desc;

    if (grade < 3) {
        formatted = '2';
        desc = 'Fail'
    } else if (grade < 3.50) {
        desc = 'Poor'
    } else if (grade < 4.5) {
        desc = 'Good'
    } else if (grade < 5.5) {
        desc = 'Very good'
    } else {
        desc = 'Excellent'
    }
    console.log(`${desc} (${formatted})`)
}
function pass(grade) {
    return grade >= 3;
}
formatGrade(3.30)