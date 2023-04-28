
const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require("body-parser");
const cors = require("cors")
const router = require("./components/message/network.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(router)
const PORT = process.env.PORT || 3000;




const uri = "mongodb+srv://myAtlasDBUser:nixtirau@123987@myatlasclusteredu.mdhmjdk.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.listen(PORT);
console.log(`El servidor está alojado en el puerto ${PORT}`);