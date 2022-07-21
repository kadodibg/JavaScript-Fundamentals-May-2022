function limitGame(input) {
    let text = input.shift();
    for (let line of input) {
        let [command, ...info] = line.split('|');
        let newText = text.split(info[0]);
        if (command === 'Decode') {
            break;
        }
        switch (command) {
            case "ChangeAll":
                text = newText.join(info[1].repeat(info[0].length))
                break;
            case 'Insert':
                let new1s = text.substring(0, info[0]);
                let new2e = text.substring(info[0]);
                text = new1s + info[1] + new2e;
                break;
            case 'Move':
                let nes1 = text.substring(info[0]);
                let nes2 = text.substring(0, info[0]);
                text = nes1 + nes2;
        }
    }
    console.log(`The decrypted message is: ${text}`);
}
limitGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

//function theImitationGame(input) {
    //     let text = input.shift();
    
    //     for (let line of input) {
    //         let [command, ...info] = line.split('|');
    //         let newText = text.split(info[0]);
    //         //console.log(info[0], info[1]);
    //         if (command === 'Decode') {
    //             break;
    //         }
    //         switch (command) {
    //             case "ChangeAll":
    //                 text = newText.join(info[1].repeat(info[0].length));
    //                 break;
    
    //             case 'Insert':
    
    //                 let new1s = text.substring(0, info[0]);
    //                 let new2e = text.substring(info[0])
    //                 text = new1s + info[1] + new2e;
    //                 break;
                
    //                 case 'Move':
    //                 let currText = text
    //                 let news0 = currText.substring(info[0]);
    //                 let news1 = currText.substring(0, info[0]);
                    
    //                 console.log(news0);
    //                 console.log(news1);
    
    //                 text = text.split('');
    //                 text.splice(3, 4, news0)
    //                 console.log(text);
    //                 text = text.join('');
                   
    //                // text = text.join('')
    //                 // let news1 = news0.splice(Number(info[0]), 0, info[1])
    //                 // let news2 = news0.splice(0, info[0])
    //                 // news0 = news0.splice()
    //                 // // news1 = text.splice(3, 0, news2)
    //                 // // console.log(news1);
    //                 // // news1 = news1.join('')
    //                 // console.log(news0);
    //                 // console.log(news1);
    //                 //console.log(news2);
    //                 //text = news1
    //                 // let nes1 = text.substring(info[0])
    //                 // let nes2 = text.substring(0, info[0])
    //                 // console.log(nes1);
    //                 // console.log(nes2);
    //                 // text = nes1 + nes2
    //         }
    //     }
    //     console.log(`The decrypted message is: ${text}`);
    // }