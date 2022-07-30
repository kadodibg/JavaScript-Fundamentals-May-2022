function extractFile(input){
    let extracted = input.split('\\');
    let fileName = extracted.pop().split('.');
    let extension = fileName.pop()

    fileName = fileName.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')