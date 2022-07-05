function movies(input){
    let movieObj = {};

    for(let element of input){
        if(element.includes('addMovie ')){
        let name = element.replace("addMovie ", "");
        movieObj.name = name;

        for(let second of input){
            if(second.includes(`${name} onDate`)){
                let date = second.replace(`${name} onDate `,"")
                movieObj.date = date
            }
            
            if(second.includes(`${name} directedBy`)){
                let director = second.replace(`${name} directedBy `,"")
                movieObj.director = director
            }
          

            }
            if (Object.keys(movieObj).length === 3) {
                console.log(JSON.stringify(movieObj));
                 }
        }
       
    }
} 
movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])


// function storeProvision(storeStock, forDelivery){
//     let productList = {};
    
//     for(let i = 0; i < storeStock.length; i += 2){
//        let currProduct = storeStock[i];
//        productList[currProduct] = Number(storeStock[i + 1]);
//     }

//     for(let i = 0; i < forDelivery.length; i += 2){
//         let currProduct = forDelivery[i];
        
//         if(!productList.hasOwnProperty(currProduct)){
//             productList[currProduct] = 0;
//         }
//         productList[currProduct] += Number(forDelivery[i + 1]);
//     }
    
//     for(let product in productList){
//         console.log(`${product} -> ${productList[product]}`);
//     }
// }
// storeProvision(
//     ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);


// function city(input){

//     let city = {};

//     for(let element of input){
//         let [name, lati, long] = element.split(" | ")
//         city.town = name;
//         city.latitude = Number(lati).toFixed(2);
//         city.longitude = Number(long).toFixed(2);
//         console.log(city);
//     }
// }
// city(['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']
// )
// function empl(input){
//     let listEmployees = {};

//     for(let el of input){
//         listEmployees.name = el
//         listEmployees.number = Number(el.length);
//         console.log(`Name: ${listEmployees.name} -- Personal Number: ${listEmployees.number} `);
//     }
// }
// empl([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ])
// function movies(arr){

//     for(let text of arr){
//         let movieObj = {};

//         if(text.includes(`addMovie`)){
//         let name = text.replace("addMovie ", "");
//             movieObj.name = name;

//             for(let second of arr){

//                 if (second.includes(`${name} onDate`)){
//                     let theDate = second.replace(`${name} onDate `, "");
//                     movieObj.date = theDate;
//                 }

//                 if(second.includes(`${name} directedBy`)){
//                     let director = second.replace(`${name} directedBy `, "");
//                     movieObj.director = director;

//                 }

//             }
               
//             console.log(JSON.stringify(movieObj));

//         }

//     }

// }

// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
//     ])


// function obj(){

//     let person = {
//         name: 'KaDoDi',
//         age: 23,
//         height: 175,
//     }

//     let key = Object.keys(person);
//     let value = Object.values(person)

//     console.log(person.key);
//     console.log('------------')
//     console.log(value);
//     //console.log(values);
//     // person.age = 23
//     // person['height'] = 175;

//     // delete person.age;
//     // // cu=ikul za obiakaliane na obekti 
//     // for(const el in  person){
//     //     console.log(el);
//     //     console.log(person[el]);

//     // }

//     // console.log(person);
// }
// obj()

// function solve(){
//     let obj = {
//         name: 'Asia',
//         age: 20 
//     };

//     if(obj.hasOwnProperty('bubs')){
//         console.log(obj.name);
//     }else {
//         console.log('no name');
//     }
// }
// solve(['Silas Butler', 'Kaloyan Dobromirov Dimitrov', 'Velicko Naydenov Velickov', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
