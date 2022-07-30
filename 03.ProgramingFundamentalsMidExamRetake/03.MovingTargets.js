function movingTarget(arr) {
    let targets = arr.shift().split(" ").map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, indx, value] = arr.shift().split(" ");
        command = command;
        indx = +indx;
        value = +value;
        i--;

        switch (command) {
            case "Shoot":
                if (indx < targets.length) {
                    targets[indx] -= value;
                }
                if (targets[indx] <= 0) {
                    targets.splice(indx, 1);
                }
                break;

            case "Add":
                if (indx >= 0 && indx < targets.length) {
                    targets.splice(indx, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case "Strike":
                let leftRadius = indx - value;
                let rightRadius = value * 2 + 1
                if (indx + value <= targets.length - 1 && indx - value >= 0) {
                    targets.splice(leftRadius, rightRadius);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
    }
    console.log(targets.join('|'));
}
movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"])
