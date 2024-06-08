const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("Premier server")
}
 
)
server.listen(3001,()=>{
    console.log("Le serveur a demarré");
})  