const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
//readFile gets offloaded to the APIs of browser so that other operations could take place first
//after all the immediate operations and performed, callbacks will be executed
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')

// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

setInterval(() => {
    console.log('hello world')
  }, 2000)
  console.log(`I will run first`)
  // process stays alive unless
  // Kill Process CONTROL + C
  // unexpected error

  