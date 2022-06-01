function printCertificate(grade, names){
    if (pass(grade)) {
        printHeader();
        printName(names);
        formatGrade(grade);
        } else {
        console.log('Students dose not qualify')
        }    
        function printHeader() {
            console.log('~~~- {@} -~~~');
            console.log('~- Certificate -~');
            console.log('~~~- ~---~ -~~~');
        }
        
        function printName(nameArr){
            console.log(nameArr[0] +' '+ nameArr[1]);
        }
        function formatGrade(grade){
            let formatted = grade.toFixed(2);
            let desc;
            
            if(grade < 3){
                formatted = '2';
                desc = 'Fail'
            }else if(grade < 3.50){
                desc = 'Poor'
            }else if(grade < 4.5){
                desc = 'Good'
            }else if(grade < 5.5){
                desc = 'Very good'
            }else {
                desc = 'Excellent'
            }
            console.log(`${desc} (${formatted})`)
        }
        function pass(grade){
            return grade >= 3;
        }    
}    


printCertificate(5.256, ['John', 'Smith']);
printCertificate(4.30, ['Peter', 'Roberts']);
printCertificate(2.30, ['Petar', 'Stoyanov']);