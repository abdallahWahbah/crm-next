import { JoinInnerSharp } from '@mui/icons-material';
import {NextApiRequest, NextApiResponse} from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const handler = async(req = NextApiRequest, res = NextApiResponse) => 
{
    const db = await sqlite.open({filename: "./user.sqlite", driver: sqlite3.Database});
    await db.migrate({migrationsPath: './migrations'}); 

    const allUsers = await db.all("SELECT * FROM USER");
    console.log(allUsers)
    
    const comingData = JSON.parse(req.body)
    const found = allUsers.find(user => (user.email === comingData.email && user.userPassword === comingData.userPassword))
    
    if(!found)
    {
        res.status(500).json({message: "User Name or Password is wrong"})
    }
    else 
    {
        res.status(200).json({message: "Logged in Successfully", data: found})
    }

}

export default handler;

