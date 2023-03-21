
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
const PORT = process.env.PORT || 3000;


app.get("/programacion/:languages/:autor", (req,res)=>{
    let lenguaje = req.params;
    res.send(lenguaje);
})

app.get("/", (req, res)=>{

    res.send("Aqui empieza nuestro servidor");
})

app.listen(PORT);
console.log(`El servidor está alojado en el puerto ${PORT}`);