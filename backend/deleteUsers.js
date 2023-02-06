const { MongoClient } = require("mongodb");
var dotenv = require('dotenv');
dotenv.config();
const client = new MongoClient(process.env.DATABASE_URL);

async function deleteUsers() 
{
    const database = client.db("Market");
    const users = database.collection("Users");
    try{
        await client.connect();
    
        await users.deleteMany({});
        
      }
      catch (e)
      {
        console.error(e);
      }
      finally
      {
        await client.close();
      }
}

deleteUsers().catch(console.error)