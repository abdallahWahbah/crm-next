import React from 'react'
import { useRouter } from 'next/router'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const UserTable = ({allUsers, allDepts}) => 
{
    // const navigate = useRouter();

    // console.log(allUsers)
    // const previewDept = (dept) =>
    // {
    //     // navigate.push(`/dept/${dept.deptId}`)
    //     navigate.push({pathname: `/dept/${dept.deptId}`, query: { data: JSON.stringify({allUsers, deptId:dept.deptId})}})
    // }

    console.log(allDepts.find(dept => dept.deptId === 2))
    return (
        <TableContainer component={Paper} sx={{minHeight: "110px", marginBottom: "15px"}}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{fontWeight:"600"}}>email</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Name</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Department</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Date Of Birth</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Position</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Start Date</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allUsers.length !== 0 ? (
                        <>
                            {allUsers.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell align="center">{user.email || "------"}</TableCell>
                                    <TableCell align="center">{user.userName || "------"}</TableCell>
                                    <TableCell align="center">{allDepts.find(dept => dept.deptId === user.deptId)?.deptName || "------"}</TableCell>
                                    <TableCell align="center">{user.dateOfBirth || "------"}</TableCell>
                                    <TableCell align="center">{user.position || "------"}</TableCell>
                                    <TableCell align="center">{user.startDate || "------"}</TableCell>
                                    <TableCell align="center">{user.country || "------"}</TableCell>
                                </TableRow> 
                            ))}
                        </>
                    ) : (
                        <TableRow className='table__no--data'>
                            <TableCell>No Users added yet</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserTable