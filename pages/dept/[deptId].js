import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { Card, Typography } from '@mui/material';

const DeptDetails = (props) => 
{
    const [userData, setUserData] = useState(null);
    const location = useRouter();

    console.log(props, location.query.deptId)
    useEffect(()=>
    {
        let userData = JSON.parse(localStorage.getItem("userData"));
        if(!userData) navigate.push("/LoginPage")
        setUserData(userData);
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className='home'>
                <Navigation userData={userData} />
                
                <div className='home__right'>
                    <div className='home__right--container' style={{boxShadow: "none"}}>
                        <Card sx={{ minWidth: 275 }} className="home__card paper__details">
                            <div className="paper">
                                <Typography variant="h5" className="paper__header">{props.dept.deptName}</Typography>
                                <Typography className="paper__description">{props.dept.deptDescription}</Typography>
                                {props.allUsers.filter(user => user.deptId === props.dept.deptId).length !== 0 && (
                                    <>
                                    <Typography className="paper__small--header">Users inside the department</Typography>
                                        <ol className='paper__list'>
                                            {props.allUsers.filter(user => user.deptId === props.dept.deptId).map(item => (
                                                <li key={item.id}>{item.userName}</li>
                                            ))}
                                        </ol>
                                    </>
                                )}
                                {props.allUsers.find(user => user.id === +props.dept.HOD)?.userName && (
                                    <>
                                        <Typography className="paper__small--header">Head Of Department</Typography>
                                        <Typography>{props.allUsers.find(user => user.id === +props.dept.HOD)?.userName}</Typography>
                                    </>
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DeptDetails


export async function getStaticPaths()
{
    const resDepts = await fetch("http://localhost:3000/api/getAllDepts");
    let dataDepts = await resDepts.json();

    return{
        fallback: false,
        paths: dataDepts.map(dept => ({
            params: { deptId: String(dept.deptId)}
        }))
        // paths:
        // [
        //     {
        //         params: 
        //         {
        //             deptId: "admin"
        //         }
        //     },
        //     {
        //         params: 
        //         {
        //             deptId: "react"
        //         }
        //     }
        // ]
    }  
}
    

export async function getStaticProps(context)
{
    console.log(context)
    const resUsers = await fetch("http://localhost:3000/api/getAllUsers");
    const dataUsers = await resUsers.json();

    const resDept = await fetch("http://localhost:3000/api/getDeptById", {
        method: "POST",
        header:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({deptId: context.params.deptId})
    });
    const dept = await resDept.json();

    return{
        props:{
            allUsers: dataUsers,
            dept,
        }
    }
}