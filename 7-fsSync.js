//two methods: Non-blocking asynchronous and Blocking synchronous
//firstly synchronous 
// const fs=require('fs')
// const readFile = fs.readFileSync()
//above two lines is similar to the below command
const {readFileSync,writeFileSync} =require('fs')
console.log('start');
//method reads files
const first = readFileSync('.\\content\\first.txt','utf8')
const second = readFileSync('.\\content\\second.txt','utf8')
console.log(first);
console.log(second);

//method creates a new file if there's no file of as such name and adds the text
writeFileSync(
    '.\\content\\result_sync.txt',
    `The result is : ${first},${second}`,
   {flag:'a'}
)
console.log('Done with this task');
console.log('Starting the next one');

//this is an example of synchronous method where code is executed line by line
//So, if our application has many users, then the application will be down most of the time due to synchronous behavior





