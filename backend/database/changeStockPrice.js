function handleChangeStockPrice(db)
{
    return function(req, res)
    {
        stock = req.query.stock
        price = parseInt(req.query.price)
        const Stocks = db.collection("Stocks")
        changeStock(Stocks, stock, price).then(x => res.send(x))
    }
    
}
async function changeStock(Stocks, stock, price)
{
    const collection = await Stocks.updateOne(
        {name:stock},
        {$inc: {price: price}}
    )
    const value = await Stocks.findOne(
        {name:stock}
    )
    return value

}
module.exports = function (db) 
{
    var module = {};
    module.handleChangeStockPrice = handleChangeStockPrice(db);

    return module;
}