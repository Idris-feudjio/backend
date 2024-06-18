const http = require("http")
const app = require("./app")

app.set("port",3000)
app.use((req,res)=>{
    res.json({message : 'Im first End poind'})
})

const server = http.createServer(app)
server.listen(3000,()=>{
    console.log("Le serveur a demarré");
})  