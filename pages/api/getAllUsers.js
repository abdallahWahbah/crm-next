import {NextApiRequest, NextApiResponse} from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const handler = async(req = NextApiRequest, res = NextApiResponse) => 
{
    const db = await sqlite.open({filename: "./user.sqlite", driver: sqlite3.Database});
    await db.migrate({migrationsPath: './migrations'});

    const allUsers = await db.all("SELECT * FROM USER")
    // console.log("ssssssssssssssssssssssssssssssssssssssssssssssssss")
    // console.log(allUsers)
    res.json(allUsers)
}

export default handler;