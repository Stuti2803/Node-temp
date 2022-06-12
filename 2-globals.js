//global variables can be accessed in our application anywhere we want
//__dirname - path to current directory
//__filename - file name
//require - function to use modules(CommonJS)
//module - information about current module(file)
//process - information about environment where program is being executed

console.log(__dirname)

//scheduling functions
//two methods
//setTimeout and setInterval
//setTimeout calls a function once after specified interval
//setInterval calls the function repeatedly after specified interval until the program is stopped

//setTimeout
function sayHi() {
    console.log('Hello');
  }
  sayHi()
  setTimeout(sayHi, 1000);

  //setInterval
  function sum(a,b){
      console.log(a+b)
  }
  setInterval(sum,1000,2,4)


  //console method is also global
  //interval=1000 that means 1 sec because 1000ms=1sec