const { MongoClient, ServerApiVersion } = require('mongodb');
const userNameDataBase = "Imeldosten";
const passWordImeldosten = "pd7vjrlK3u9kcVIP";
const uri = `mongodb+srv://${userNameDataBase}:${passWordImeldosten}@my-first-database.91eys70.mongodb.net/?retryWrites=true&w=majority`;
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
    //const databases = await client.db("admin").command({ listDatabases: 1 });
    
    await createListing(client, {
      name:"patricia",
      raza:"egipcio",
      edad:"14 años"
    });
    await createListingMany(client)
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//

async function createListing(client){
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //const databases = await client.db("admin").command({ listDatabases: 1 });
    const result = await client.db("FirstAppDataBase").collection("cats").insertOne(
      {
        item: 'mousepad',
        qty: 25,
        tags: ['gel', 'blue'],
        size: { h: 19, w: 22.85, uom: 'cm' }
      }
    );
    console.log(`se creo en la bases de datos los gatos: ${result}`)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


async function createListingMany(client){

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //const databases = await client.db("admin").command({ listDatabases: 1 });
    const result = await client.db("FirstAppDataBase").collection("dogs").insertMany([
      {
        item: 'journal',
        qty: 25,
        tags: ['blank', 'red'],
        size: { h: 14, w: 21, uom: 'cm' }
      },
      {
        item: 'mat',
        qty: 85,
        tags: ['gray'],
        size: { h: 27.9, w: 35.5, uom: 'cm' }
      },
      {
        item: 'mousepad',
        qty: 25,
        tags: ['gel', 'blue'],
        size: { h: 19, w: 22.85, uom: 'cm' }
      }
    ]);
    console.log(`se creo en la bases de datos los perros: ${result}`)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = {

  run,
  createListing,
  createListingMany,
  client,
}