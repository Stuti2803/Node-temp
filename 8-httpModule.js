//http module is used to allow us to set up a web server
const http=require('http')
//create a server object
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Welcome to our home page')
    }
    if(req.url=='/about'){
        res.end('Here is a short history')
    }
    res.end(`
        <h1>OOPSSS!!</h1>
        <p>We seem to not find the web page</p>
        <a href="/"> Back Home</a>`)
})
server.listen(5000)//the server object listens on port 5000
//for running the code,go to web browser and write the command 'localhost:5000'
