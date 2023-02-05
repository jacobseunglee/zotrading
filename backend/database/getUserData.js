function handleGetUserData(db)
{
    return async function(req, res)
    {
        username = req.query.username
        const users = db.collection("Users")
        const x = await users.findOne({id:username})
        if (x==null)
        {
            await users.insertOne({"id":username,"cash":500,"Wongma Pharm":0, "Thornton Automobile":0, "Gilman Group":0})
        }
        const y = await users.findOne({id:username})
        res.send(y)
    }
    
}
// async function findUser(users, username)
// {
//     const collection2 = await users.findOne({id:username})
//     console.log(collection2)
//     return collection2
// }
// async function addUser(users,username)
// {
//     try
//     {
//         users.insertOne({"id":username,"cash":500,"Wongma Pharm":0, "Thornton Automobile":0, "Gilman Group":0})
        
//     }
//     catch(e)
//     {
//         console.error(e)
//     }
// }
// async function checkUser(users, username)
// {
//     const x = await users.findOne({id:username})
        
//             console.log(x)
//             if (x==null)
//             {   
//                 console.log(x)
//                 await addUser(users, username)
//             }
// }

module.exports = function (db) 
{
    var module = {};
    module.handleGetUserData = handleGetUserData(db);

    return module;
}