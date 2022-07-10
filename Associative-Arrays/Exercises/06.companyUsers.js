function companyUsers(input){
    let companies = {};
    
    for(let line of input){
        let [company, id] = line.split(' -> ');
        if(!companies.hasOwnProperty(company)){
            companies[company] = new Set();
        }
        companies[company].add(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a,b) => { a[0].localeCompare(b[0])});

    for(let el of sorted){
        console.log(el[0]);
        for(let num of el[1]){
            console.log(`-- ${num}`);
        }
    }
}
companyUsers([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
])