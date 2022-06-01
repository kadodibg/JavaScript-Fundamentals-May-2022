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
formatGrade(3.30);
formatGrade(4.50);
formatGrade(2.99);
formatGrade(5.49);
formatGrade(5.49999);
formatGrade(5.50);