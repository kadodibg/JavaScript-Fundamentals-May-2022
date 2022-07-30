function parseCats(catsAsString){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = [];
    for(let catAsString of catsAsString){
        let tokens = catAsString.split(' ');
        let cat = new Cat(tokens[0], Number(tokens[1]));
        cats.push(cat);
    }
    for(let cat of cats){
        cat.meow();
    }
}
parseCats(['Mellow 2', 'Tom 5']);
parseCats(['Candy 1', 'Poppy 3', 'Nyx 2']);

// class Cat {
//     constructor(name, age){
//         this.name = name
//         this.age = age

//     }
//     meow(){
//         console.log(`${this.name}, age ${this.age} says Meow`);
//     }
// }

// let someCat = new Cat('Pesho', 3);
// console.log(someCat);
// someCat.meow();