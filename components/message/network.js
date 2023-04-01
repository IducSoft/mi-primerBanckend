const express = require("express");
const router = express.Router();



router.get("/programacion/:languages/:autor", (req,res)=>{
    let lenguaje = req.params;
    res.send(lenguaje);
})



router.get("/", (req, res)=>{

    res.send("Aqui empieza nuestro servidor");
})

module.exports = router;