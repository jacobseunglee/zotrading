const { MongoClient } = require("mongodb");
var dotenv = require('dotenv');
dotenv.config();
const client = new MongoClient(process.env.DATABASE_URL);
stocks = [{
    "name": "Wongma Pharm", "price": 0, "risk_level": "medium"

},
{
  "name": "Thornton Automobile", "price": 0, "risk_level": "high"
},
{
  "name": "Gilman Group", "price": 0, "risk_level": "low"
}
]
async function main() {
  const database = client.db("Market");
  const stocks = database.collection("Stocks");
  const prompts = database.collection("Users");
  try{
    await client.connect();

    for (let i = 0; i < stocks.length; i++)
    {
        stocks[i]._id = i
        docID = await stocks.insertOne(stocks[i]);
    }
    
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

main().catch(console.error);