function movingTarget(arr) {
    let seqTargets = arr.shift().split(" ");
    
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === "End") {
            break;
        }
        let currentArr = arr[i].split(" ");
        let index = currentArr[1];
        let powerOrValueOrRadius = currentArr[2];
      
        if (currentArr[0] === "Shoot") {
            
            if (index >= 0 && index <= seqTargets.length) {
                seqTargets[index] -= powerOrValueOrRadius;
                if (seqTargets[index] <= 0) {
                    seqTargets.splice(index, 1);
                }
            }
        } else if (currentArr[0] === "Add") {
            if (index >= 0 && index < seqTargets.length) {
                seqTargets.splice(index, 0, powerOrValueOrRadius);
            } else {
                console.log(`Invalid placement!`)
            }
        } else if (currentArr[0] === "Strike") {
            let startIndex = index - powerOrValueOrRadius;
            let endIndex = Number(index) + Number(powerOrValueOrRadius);
            
            if (startIndex >= 0 && endIndex < seqTargets.length) {
                if (startIndex > 0) {
                    seqTargets.splice(startIndex, endIndex + startIndex - 1);
                } else {
                    seqTargets.splice(startIndex, endIndex + startIndex + 1)
                }
            }
            else {
                console.log(`Strike missed!`)
            }
        }
    }
    if (seqTargets.length > 0) {
        console.log(seqTargets.join("|"))
    }
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])