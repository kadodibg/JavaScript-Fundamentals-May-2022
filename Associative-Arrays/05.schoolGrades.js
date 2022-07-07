function schoolGrades(data) {
    let result = new Map;

    for (let line of data) {
        let [name, ...grade] = line.split(' ');
        let sum = 0;

        for (let i = 0; i < grade.length; i++) {
            sum += Number(grade[i]);
        }
        let avgGrade = sum / grade.length;

        if (!result.has(name)) {
            result.set(name, avgGrade);
        } else {
            let oldAvg = result.get(name);
            let newAvgGrade = (oldAvg + avgGrade) / 2;
            result.set(name, newAvgGrade)
        }
    }
    let sortEntries = Array.from(result.entries()).sort(([keyA, valA], [keyB, valB]) => {
        return keyA.localeCompare(keyB);
    });
    for (let [k,v] of sortEntries) {
        console.log(`${k}: ${v.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5','Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])