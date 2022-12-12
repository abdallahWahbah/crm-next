import { NextApiRequest, NextApiResponse } from 'next';
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
    const db = await sqlite.open({ filename: "./dept.sqlite", driver: sqlite3.Database });
    await db.migrate({ migrationsPath: './migrations' });
    
    let deptId = JSON.parse(req.body).deptId
    // const dept = await db.all(`SELECT * FROM DEPT WHERE deptId=${deptId}`) // not working ... WHY!!!!!!!!!!!!!!!!!!!!!!!!!!
    const depts = await db.all(`SELECT * FROM DEPT`)
    let requiredDept = depts.find(dept => String(dept.deptId) === deptId)
    res.json(requiredDept)
}

export default handler;