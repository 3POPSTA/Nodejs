const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function main(){
    try{
        // Connect to MongoDB
        await client.connect();

        // Select the database
        const db = client.db("mydb");
        
         // Create a collection
        await db.createCollection("customers");

        console.log("Collection created successfully!");
    }
    catch(error){
        console.log("Error:", error.message)
    }
    finally{
         // Close the connection
        await client.close();
    }
}

main()