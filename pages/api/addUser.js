import {NextApiRequest, NextApiResponse} from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const handler = async(req = NextApiRequest, res = NextApiResponse) => 
{
    const db = await sqlite.open({filename: "./user.sqlite", driver: sqlite3.Database});
    await db.migrate({migrationsPath: './migrations'});

    var insertQuery = await db.prepare("INSERT INTO USER (email, userName, userPassword, deptId, userType, dateOfBirth, position, startDate, country) VALUES (?,?,?,?,?,?,?,?,?)");    
    insertQuery.run(
                    req.body.email , 
                    req.body.userName , 
                    req.body.userPassword , 
                    req.body.deptId , 
                    req.body.userType , 
                    req.body.dateOfBirth , 
                    req.body.position , 
                    req.body.startDate, 
                    req.body.startDate);
    insertQuery.finalize();

    // return all users
    const allUsers = await db.all("SELECT * FROM USER");
    console.log(allUsers)
    res.json({message: "User added successfully",allUsers});
}

export default handler;

