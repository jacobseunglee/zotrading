const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 3500;
const cors = require('cors');

var dotenv = require('dotenv');
dotenv.config();
var url = process.env.DATABASE_URL;
var client = undefined;

async function main() {
    const uri = url;
    client = new MongoClient(uri);
    const database = client.db("Market");
    const changeUser = require("./database/changeUser")(database);
    const getUserData = require("./database/getUserData")(database);
    const changeStockPrice = require("./database/changeStockPrice")(database);
    try{  
    await client.connect();
    }
    catch (e)
    {
    console.error(e);
    await client.close();
    }


    app.use(cors())
    app.get('/changeUser', changeUser.handleChangeUser)
    app.get('/getUser', getUserData.handleGetUserData)
    app.get('/changeStockPrice', changeStockPrice.handleChangeStockPrice)
    app.use('/public', express.static('public'))

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
}

main().catch(console.error);
client.close();