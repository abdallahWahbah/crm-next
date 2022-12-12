import React from 'react'
import { useRouter } from 'next/router'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const DeptTable = ({allDepts, allUsers}) => 
{
    const navigate = useRouter();

    // console.log(allUsers)
    const previewDept = (dept) =>
    {
        navigate.push(`/dept/${dept.deptId}`)
        // navigate.push({pathname: `/dept/${dept.deptId}`, query: { data: JSON.stringify({allUsers, deptId:dept.deptId})}})
    }

    return (
        <TableContainer component={Paper} sx={{minHeight: "120px"}}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{fontWeight:"600"}}>ID</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Name</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Description</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>HOD</TableCell>
                        <TableCell align="center" sx={{fontWeight:"600"}}>Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allDepts?.length !== 0 ? (
                        <>
                        {allDepts.map(dept => (
                            <TableRow key={dept.id}>
                                <TableCell align="center">{dept.deptId || "------"}</TableCell>
                                <TableCell align="center">{dept.deptName || "------"}</TableCell>
                                <TableCell align="center">
                                    {dept.deptDescription.length > 60 ? dept.deptDescription.slice(0, 50) + "....." : dept.deptDescription || "------"}
                                </TableCell>
                                <TableCell align="center">{allUsers.find(user => user.id === +dept.HOD)?.userName || "------"}</TableCell>
                                <TableCell 
                                    align="center" 
                                    className='table__details' 
                                    onClick={() => previewDept(dept)}
                                >
                                    Show Details
                                </TableCell>
    
                            </TableRow> 
                        ))}
                        </>
                    ) : (
                        <TableRow className='table__no--data'>
                            <TableCell>No Data</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DeptTable