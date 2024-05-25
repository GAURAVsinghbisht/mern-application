import { MongoClient, ServerApiVersion } from "mongodb";

// Pass you mongo db connection string
const uri = process.env.ATLAS_URI || "mongodb://localhost:27017/";

console.log("uri: ", uri);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

try {
  // Connect the client to the server

  await client.connect();

  // Send a ping to confirm a successful connection

  await client.db("admin").command({ ping: 1 });

  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (error) {
  console.log(" error: ", error);
}

let db = client.db("employees");

export default db;
