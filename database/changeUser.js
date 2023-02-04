function changeUser(db)
{
    return function(req, res)
    {
        username = req.query.username
        cost = req.query.cost
        shares = req.query.shares
        stock = req.query.stock
        const users = db.collection("Users")
        var id = updateUser(users, username, cost, shares, stock)
    }
    
}
async function updateUser(users, username, cost, shares, stock)
{
    var update = { $inc :{}}
    update.$inc[stock] = shares
    const collection = await users.updateOne(
        {id:username},
        {$inc: {cash: cost}},
        {update}
    )
}
