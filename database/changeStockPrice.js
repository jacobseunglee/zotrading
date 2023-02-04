function changeStockPrice(db)
{
    return function(req, res)
    {
        stock = req.query.stock
        amount = req.query.amount
        const users = db.collection("Users")
        changeStock(db, stock, amount)
    }
    
}
async function changeStock(db, stock, difference)
{
    const collection = await db.collection("Stocks").updateOne(
        {name:stock},
        {$inc: {price: difference}}
    )
}
