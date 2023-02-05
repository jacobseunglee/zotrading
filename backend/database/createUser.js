function handleCreateUser(db)
{
    return function(req, res)
    {
        username = req.query.username
        const users = db.collection("Users")
        var id = addUser(users,username).then((id)=>
        {
            console.log(id)
            res.send({id: username})
        })
    }
    
}
async function addUser(users,username)
{
    try
    {
        user = await users.insertOne({"id":username,"cash":500,"Wongma Pharm":0, "Thornton Automobile":0, "Gilman Group":0})
        return user.id
    }
    catch(e)
    {
        console.error(e)
    }
}

module.exports = function (db) 
{
    var module = {};
    module.handleCreateUser = handleCreateUser(db);

    return module;
}