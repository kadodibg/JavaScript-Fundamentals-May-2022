function binaryToDecimals(numberAsString){
    //const words = str.split(' ');
    const num = numberAsString.split(' ');
    //let numberAsString = num.split(' '); // Разделяме числото на отделни символи чрез .split("") и го получаваме като масив от символи
    let decimal = 0;
    let power = numberAsString.length - 1;    // Степента е равна на дължината на стринга - 1 
    for (let i = 0; i < numberAsString.length; i++) {       // Въртим по елементите на масива
        decimal += Number(numberAsString[i]) * Math.pow(2, power); // Взимаме числото от масива и го преобръщаме към число, след което го умноаважаме по 2 на степента 
        power--; // Намаляме степента всеки път с единица.
    console.log(decimal);
    }
}
binaryToDecimals([11110000])