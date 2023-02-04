function changeUser(db)
{
    return function(req, res)
    {
        username = req.query.username
        cost = req.query.cost
        shares = req.query.shares
        stock = req.query.stock
        const users = db.collection("Users")
        var id = addUser(users,id).then((id)=>
        {
            console.log(id)
            res.send({id: id})
        })
    }
    
}
async function updateUser(db, username, cost, shares, stock)
{
    const collection = await db.collection("Users").updateOne(
        {id:username},
        {$inc: {cash: cost}},
        {$inc: {stock: shares}}
    )
}
