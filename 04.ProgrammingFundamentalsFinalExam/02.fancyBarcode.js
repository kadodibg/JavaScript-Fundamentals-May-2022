function fancyBarcode(arr) {
    let num = Number(arr.shift());
    let regex = /(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)/;
    //let regEx = /^(@#+)([A-Za-z\dA-Z]{6,})(@#+)$/g;

    for (let line of arr) {
        let code = ''
        let match = regex.exec(line);
        code = pesho(match, code);
    }

    function pesho(match, code) {
        if (match) {
            for (const el of match.groups.barcode) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                    code += el;
                }
            }
            (code == '') ?
                console.log(`Product group: 00`) :
                console.log(`Product group: ${code}`);

        } else {
            console.log(`Invalid barcode`);

        }
        return code;
    }
}
fancyBarcode(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);