function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let count = 0;

    let command = input.shift();
    while (command !== 'End') {
        let indexOfTarget = Number.parseInt(command);
        if (indexOfTarget >= 0 && indexOfTarget < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                let currentTarget = targets[indexOfTarget];
                if (i !== indexOfTarget && targets[i] !== -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }
            targets[indexOfTarget] = -1;
            count++;
        }
        command = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"])