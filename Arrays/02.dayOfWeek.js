function dayOfWeek(dayAsNumber) {
    if (dayAsNumber < 1 || dayAsNumber > 7) {
        console.log('Invalid day!');
    } else {
        let days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ];
        let index = dayAsNumber - 1;
        console.log(days[index]);
    }
}
dayOfWeek([1]);
dayOfWeek([3]);
dayOfWeek([-3]);
dayOfWeek([-33]);

// Tarikatsko reshenie 
// function dayOfWeek(num) {
//     return num <= 7 && num >= 1
//         ? ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',][num - 1]
//         : 'Invalid day!';
// }
// dayOfWeek([1]);
// dayOfWeek([3]);
// dayOfWeek([-3]);
// dayOfWeek([-33]);
