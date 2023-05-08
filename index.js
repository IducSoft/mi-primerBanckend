
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const router = require("./components/message/network.js");
const {run, createListing, createListingMany, client} = require("./db/connnectTobd.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(router)
const PORT = 3005;


app.get("/gatos", async (req, res)=>{

    await createListing(client);
    res.send("se creo la base de datos")
})

app.get("/perros", async(req,res)=>{

    await createListingMany(client);
    res.send("se creo en la base de datos de perros");
})

app.listen(PORT);
console.log(`El servidor está alojado en el puerto ${PORT}`);