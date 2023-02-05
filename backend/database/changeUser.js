function handleChangeUser(db)
{
    return async function(req, res)
    {
        username = req.query.username
        cost = parseInt(req.query.cost)
        shares = parseInt(req.query.shares)
        stock = req.query.stock
        const users = db.collection("Users")
        const x = await updateUser(users, username, cost, shares, stock)
        res.send(x)
    }
    
}
async function updateUser(users, username, cost, shares, stock)
{
    var query = {};
    query[stock] = shares;
    const collection = await users.updateOne(
    {id:username},
    {$inc: {cash: cost}}
    )
    const collection1 = await users.updateOne(
    {id:username},
    {$inc: query}
    )
    const collection2 = await users.findOne({id:username})
    return collection2
}


module.exports = function (db) 
{
    var module = {};
    module.handleChangeUser = handleChangeUser(db);

    return module;
}