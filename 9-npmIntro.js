//for npm version,command is : npm --v
//two flavours-local dependency and global dependency

//local dependency - use it only in this particular project
//installing command-npm i <packageName>

//global dependency- use it in any project
//installing command- npm install -g <packageName>

//before installation of different npm packages,we need to create a file named 'package.json'
//package. json file is the heart of any Node project
//store important information about our project
//creation of package.json file can be done in 3 ways
//first, manual way- create package.json in the root,create properties etc
//second, write a command on the terminal- npm init- it goes step by step,press enter to skip
//third, npm init -y (everything done automatically with default values)

//we can change the properties of package.json file later

//node_modules store all the dependencies

//we installed lodash dependency just for getting knowledge about npm packages
//provides utility functions for common programming tasks using a functional programming paradigm
const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);


//create a new git repo
//commands: 
//git init
//git add *
//git commit -m "first commit"
//push commands

//In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number
//

