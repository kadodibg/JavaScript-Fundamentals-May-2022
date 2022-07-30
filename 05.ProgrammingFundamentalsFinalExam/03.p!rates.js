function movies(array){
    let listOfMovies = [];
    for(const lines of array){ 
        if(lines.includes("addMovie")){ 
            let nameOfMovie = lines.split("addMovie ")[1];  
            listOfMovies.push( { name: nameOfMovie } ); 
     
        } else if(lines.includes("directedBy")){ 
            let info = lines.split("directedBy "); 
            let name = info[0].trim(); 
            let director = info[1]; 
            let movie = listOfMovies.find((movieObj) => movieObj.name === name); 
            if(movie){  
                movie.director = director; 
            }
        } else if (lines.includes("onDate")){ 
    let info = lines.split("onDate ");
    let name = info[0].trim();
    let date = info[1];
    let movie = listOfMovies.find((movieObj)=> movieObj.name === name);
    if(movie){
        movie.date = date;
    }
        }
        }
        for(const movie of listOfMovies){  
            if(movie.name && movie.director && movie.date){ 
                console.log(JSON.stringify(movie));
     
            }
        }
    }
    movies(['addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'])

// function pirates(input) {
//     let towns = {}
//     let line = input.shift();

//     while (line !== "Sail") {
//         let [town, people, gold] = line.split('||')
//         people = Number(people)
//         gold = Number(gold)

//         if (!towns.hasOwnProperty(town)) {
//             towns[town] = { people, gold }
//         } else {
//             towns[town].people += people;
//             towns[town].gold += gold;
//         }
//         line = input.shift();
//     }

//     while (line !== 'End') {
//         let [command, town, ...more] = line.split('=>');
//         switch (command) {
//             case 'Plunder':
//                 let people = Number(more[0]);
//                 let gold = Number(more[1]);
//                 console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
//                 towns[town].people -= people
//                 towns[town].gold -= gold
//                 if (towns[town].people <= 0 || towns[town].gold <= 0) {
//                     console.log(`${town} has been wiped off the map!`);
//                     delete towns[town];
//                 }
//                 break;
//             case 'Prosper':
//                 let golds = Number(more[0]);

//                 if (golds >= 0) {
//                     towns[town].gold += golds;
//                     console.log(`${golds} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);

//                 } else {
//                     console.log(`Gold added cannot be a negative number!`);
//                 }
//                 break;
//             default:
//                 break;
//         }
//         line = input.shift();
//     }
    
//     let size = Object.keys(towns).length;
    
//     if (size > 0) {
//         console.log(`Ahoy, Captain! There are ${size} wealthy settlements to go to:`)
//         for (let [key, value] of Object.entries(towns)) {
//             console.log(`${key} -> Population: ${value.people} citizens, Gold: ${value.gold} kg`);
//         }
//     } else {
//         console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
//     }
//     //console.table(towns);
// }
// pirates(["Nassau||95000||1000",
//         "San Juan||930000||1250",
//         "Campeche||270000||690",
//         "Port Royal||320000||1000",
//         "Port Royal||100000||2000",
//         "Sail",
//         "Prosper=>Port Royal=>-200",
//         "Plunder=>Nassau=>94000=>750",
//         "Plunder=>Nassau=>1000=>150",
//         "Plunder=>Campeche=>150000=>690",
//         "End"])
// console.log('----------');
// pirates(["Tortuga||345000||1250",
// "Santo Domingo||240000||630",
// "Havana||410000||1100",
// "Sail",
// "Plunder=>Tortuga=>75000=>380",
// "Prosper=>Santo Domingo=>180",
// "End"])