function handleChangeStockPrice(db)
{
    return function(req, res)
    {
        stock = req.query.stock
        amount = parseInt(req.query.amount)
        console.log(amount)
        const users = db.collection("Users")
        changeStock(db, stock, amount).then(x => res.send(x))
    }
    
}
async function changeStock(db, stock, difference)
{
    const collection = await db.collection("Stocks").updateOne(
        {name:stock},
        {$inc: {price: difference}}
    )
}
module.exports = function (db) 
{
    var module = {};
    module.handleChangeStockPrice = handleChangeStockPrice(db);

    return module;
}