import {NextApiRequest, NextApiResponse} from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const handler = async(req = NextApiRequest, res = NextApiResponse) => 
{
    const db = await sqlite.open({filename: "./dept.sqlite", driver: sqlite3.Database});
    await db.migrate({migrationsPath: './migrations'});

    const allDepts = await db.all("SELECT * FROM DEPT")
    // console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
    // console.log(allDepts)
    res.json(allDepts)
}

export default handler;