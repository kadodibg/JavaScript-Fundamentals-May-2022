function cutAndReverse(string) {
    console.log(string.substring(0, string.length / 2).split('').reverse().join(''));
    console.log(string.substring(string.length / 2, string.length).split('').reverse().join(''));
    }
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
