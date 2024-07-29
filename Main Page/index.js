import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname))


app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/index.html" )
})


app.listen(port, function(){
    console.log("Server is running successfully at " + port);
})
