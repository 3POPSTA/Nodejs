const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function main() {
  try {
    await client.connect();
    await client.db("mydb").command({ ping: 1 });
    console.log("Connected to mydb!");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
