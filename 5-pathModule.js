const path=require('path')
console.log(path.sep)

//method returns the normalised path
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath);
//method returns the basename of the file
const baseName=path.basename(filePath)
console.log(baseName);

//method returns the absolute path(really useful and cooool)
const resolve=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(resolve);

const pathContent=path.join('/content','first.text')
console.log(pathContent);