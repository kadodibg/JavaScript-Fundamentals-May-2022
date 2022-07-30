function convertToJson(name, lastName, hairColor){
    let obj = {
        name, 
        lastName,
        hairColor
    };
    let result = JSON.stringify(obj);
    console.log(result)
}
convertToJson('George', 'Jones', 'Brown')