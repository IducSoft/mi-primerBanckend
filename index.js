
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const router = require("./components/message/network.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(router)
const PORT = process.env.PORT || 3000;





app.listen(PORT);
console.log(`El servidor está alojado en el puerto ${PORT}`);