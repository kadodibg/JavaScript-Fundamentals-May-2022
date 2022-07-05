// function movies(arr){

//     for(let text of arr){
//         let movieObj = {};
        
//     if(text.includes(`addMovie`)){
//            let name = text.replace("addMovie ", "");
//            // let name = text.replace("addMovie ", "");
//             movieObj.name = name;

//     for(let second of arr){
        
//         if(second.includes(`${name} onDate`)){
//             console.log(`${name} onDate`);
//             let theDate = second.replace(`${name} onDate`, '')
//             console.log(theDate);
//             movieObj.data = theDate;
//         }
       
//         if(second.includes(`${name} directedBy`)){
//             let director = second.replace(`${name} directedBy`, '')
//             movieObj.director = director
//                 }      
//             }
//             console.log(movieObj);
//             //   if (Object.keys(movieObj).length === 3) {
//             //     console.log(JSON.stringify(movieObj));
//             //     }
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







// function movies(arr){
   
//     for(let text of arr){
//         console.log(text);
        
//         let movieObj = {};
      

//         if(text.includes(`addMovie`)){


//             let name = text.replace("addMovie", "");
//             movieObj.name = name;

        
        
//             for(let second of arr){
            
//                 if (second.includes(`${name} onDate`)){
//                   let theDate = second.replace(`${name} onDate`, "");
//                     movieObj.date = theDate;
//                 }

//                 if(second.includes(`${name} directedBy`)){

//                     let director = second.replace(`${name} directedBy`, "");
//                     movieObj.director = director;

//                 }
           
//             }
        
//         // //    if (Object.keys(movieObj).length === 3) {
//         // //     console.log(JSON.stringify(movieObj));
//         // //   }
          
//         // }
//         // if (Object.keys(movieObj).length === 3) {
//         //     console.log(JSON.stringify(movieObj));
//         //     }
//         }
//           if (Object.keys(movieObj).length === 3) {
//             console.log(JSON.stringify(movieObj));
//             }
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


    function movies(arr){

        for(let text of arr){
    
            let movieObj = {};
    
            if(text.includes(`addMovie`)){
    
                let name = text.replace("addMovie ", "");
    
                movieObj.name = name;
    
                for(let second of arr){
    
                    if (second.includes(`${name} onDate`)){
    
                        let theDate = second.replace(`${name} onDate `, "");
                        movieObj.date = theDate;
                    }
    
                    if(second.includes(`${name} directedBy`)){
    
                        let director = second.replace(`${name} directedBy `, "");
                        movieObj.director = director;
    
                    }
    
                }
                   
                //console.log(JSON.stringify(movieObj));
    
            }
            
            if (Object.keys(movieObj).length === 3) {
                console.log(JSON.stringify(movieObj));
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