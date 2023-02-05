function handleGetUserData(db)
{
    return function(req, res)
    {
        username = req.query.username
        const users = db.collection("Users")
        checkUser(users, username).then(x=>
            findUser(users, username).then(y=>res.send(y)))
    }
    
}
async function findUser(users, username)
{
    const collection2 = await users.findOne({id:username})
    console.log(collection2)
    return collection2
}
async function addUser(users,username)
{
    try
    {
        user = await users.insertOne({"id":username,"cash":500,"Wongma Pharm":0, "Thornton Automobile":0, "Gilman Group":0})
        return user
    }
    catch(e)
    {
        console.error(e)
    }
}
async function checkUser(users, username)
{
    const collection2 = await users.findOne({id:username}).then(x=>
        {
            console.log(x)
            if (x==null)
            {
                console.log(x)
                user = addUser(users, username).then(user=>
                    console.log(user))
            }
        })
}

module.exports = function (db) 
{
    var module = {};
    module.handleGetUserData = handleGetUserData(db);

    return module;
}