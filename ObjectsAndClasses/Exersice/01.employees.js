function employees(input){
    let listEmployees = {};
    for(const person of input){
        listEmployees.name = person
        listEmployees.number = Number(person.length)
        console.log(`Name: ${listEmployees.name} -- Personal Number: ${listEmployees.number} `);
    }
}
employees(['Silas Butler', 'Kaloyan Dobromirov Dimitrov', 'Velicko Naydenov Velickov', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])


function employees(input){
    let listEmployees = [];
    class Employees {
        constructor(name, length){
            this.name = name;
            this.length = length
        }
    }
    for(const person of input){
        // listEmployees.name = person
        // listEmployees.number = Number(person.length)
         let currentEmploy = new Employees(person, )

        console.log(`Name: ${listEmployees.name} -- Personal Number: ${listEmployees.number} `);
    }
}
employees(['Silas Butler', 'Kaloyan Dobromirov Dimitrov', 'Velicko Naydenov Velickov', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])



