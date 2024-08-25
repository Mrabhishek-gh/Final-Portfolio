import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.render("index.ejs" )
})


app.listen(port, function(){
    console.log("Server is running successfully at " + port);
})
