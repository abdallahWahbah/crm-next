import {NextApiRequest, NextApiResponse} from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const handler = async(req = NextApiRequest, res = NextApiResponse) => 
{
    const db = await sqlite.open({filename: "./dept.sqlite", driver: sqlite3.Database});
    await db.migrate({migrationsPath: './migrations'});

    console.log(req.body)
    var insertQuery = await db.prepare("INSERT INTO DEPT (deptId, deptName, deptDescription, HOD) VALUES (?,?,?,?)");    
    insertQuery.run(
                    req.body.deptId , 
                    req.body.name , 
                    req.body.description , 
                    req.body.HOD);
    insertQuery.finalize();

    // return all users
    const AllDepts = await db.all("SELECT * FROM DEPT");
    // console.log(AllDepts)
    res.json({message: "Department added successfully", AllDepts});
}

export default handler;

