const { MongoClient } = require("mongodb");
var dotenv = require('dotenv');
dotenv.config();
const client = new MongoClient(process.env.DATABASE_URL);
const default_price = 250;
fake_stocks = [{
    "name": "Wongma Pharm", "price": 0, "risk_level": "medium"

},
{
  "name": "Thornton Automobile", "price": 0, "risk_level": "high"
},
{
  "name": "Gilman Group", "price": 0, "risk_level": "low"
}
]

// async function main() 
// {
//   const database = client.db("Market");
//   const stocks = database.collection("Stocks");
//   try
//   {
//     await client.connect();
//     await stocks.insertMany(fake_stocks)
    
//   }
//   catch (e)
//   {
//     console.error(e);
//   }
//   finally
//   {
//     await client.close();
//   }
// }
async function setStocksToDefault()
{
  const database = client.db("Market");
  const stocks = database.collection("Stocks")
  try
  {
    await client.connect();
    await stocks.deleteMany({})
    await stocks.insertMany(fake_stocks)
    await stocks.updateMany({}, {$set:{price: default_price}});

  }
  catch(e)
  {
    console.error(e);
  }
  finally
  {
    await client.close();
  }
}

setStocksToDefault().catch(console.error);