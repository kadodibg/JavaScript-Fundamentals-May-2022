// function printStars(count){
//     console.log("*".repeat(count));
// }
// printStars(5);

// function prinText(text){
//     console.log(text);
// }

// let prinText = function(text){
//     console.log(text);
// } 
// // = operator za prisvoianave
// // argument - stoinostta e argumenta
// // parameter - rezultata

// function printDocument(){
//    // Може да извикаме функцията в друга функция 
//     printLabel();
//     printContent();
// }
// Една функция, може да извика себе си нарича се нарича рекурсия
function countDown(x) {
    console.log(x);
    if (x > 0) { countDown(x - 1) }
}
countDown(10)
