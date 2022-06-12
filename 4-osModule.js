//built-in modules
//firstly, os module
//os module has many methods and properties that help in interacting with operating system
const os=require('os') //setup of os module,does not needed to be installed
//info about the current user
const user=os.userInfo()
//we get UID and GID as the output of userInfo()
//UID stands for user identifier. A unique number assigned to user by the system
//GID stands for group identifier 
console.log(user)
//below method returns the uptime in seconds
//uptime is the time since the computer is on
console.log(`The system uptime is ${os.uptime()} seconds`)

const Information ={
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(Information)