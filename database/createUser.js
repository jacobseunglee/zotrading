function createUser(db)
{
    return function(req, res)
    {
        username = req.query.username
        const users = db.collection("Users")
        var id = addUser(users,id).then((id)=>
        {
            console.log(id)
            res.send({id: id})
        })
    }
    
}
async function addUser(users,id)
{
    try
    {
        user = await users.insertOne({"id":id,"cash":500,"Wongma Pharm":0, "Thornton Automobile":0, "Gilman Group":0})
        return user.id
    }
    catch(e)
    {
        console.error(e)
    }
}