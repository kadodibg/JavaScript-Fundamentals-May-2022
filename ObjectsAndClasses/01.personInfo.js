function personInfo(firstName, lastName, age){

    // let result = {
    //     firstName: firstName, 
    //     lastName: lastName, 
    //     age: age
    // }

    // let result = {};
    // result.firstName = firstName;
    // result.lastName = lastName;
    // result.age = age;

    let result = {firstName, lastName, age}

    return result;
}
console.log(personInfo('Peter', 'Pan', '20'));
console.log(personInfo('George', 'Smith', '18'));