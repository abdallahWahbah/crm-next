import React, { useState, useEffect} from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const Profile = (props) => 
{
    const [userData, setUserData] = useState(null);

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
                    <Card className='home__right--container'>
                        <CardContent>
                            <Grid container spacing={2}>
                                {/* {userData && Object.entries(userData)?.map(item => (
                                    <>
                                    <Grid item xs={6}>
                                    <h4>{item[0]}</h4>
                                    <p style={{color: "#656565", fontSize: "16px", marginBottom: "10px"}}>{item[1]}</p>
                                    </Grid>
                                    </>
                                ))} */}
                                <Grid item xs={12}>
                                    <Typography variant="h5" className="paper__header">{userData?.userName}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <h4>Email</h4>
                                    <p style={{color: "#656565", fontSize: "16px", marginBottom: "10px"}}>{userData?.email}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <h4>Department</h4>
                                    <p style={{color: "#656565", fontSize: "16px", marginBottom: "10px"}}>
                                        {props.allDepts.find(dept => dept.deptId === userData?.deptId)?.deptName}
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <h4>Date Of Birth</h4>
                                    <p style={{color: "#656565", fontSize: "16px", marginBottom: "10px"}}>{userData?.dateOfBirth}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <h4>Position</h4>
                                    <p style={{color: "#656565", fontSize: "16px", marginBottom: "10px"}}>{userData?.position}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <h4>Start Date</h4>
                                    <p style={{color: "#656565", fontSize: "16px", marginBottom: "10px"}}>{userData?.startDate}</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <h4>Country</h4>
                                    <p style={{color: "#656565", fontSize: "16px", marginBottom: "10px"}}>{userData?.country}</p>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default Profile

export async function getStaticProps()
{
    const res = await fetch("http://localhost:3000/api/getAllDepts");
    const data = await res.json();

    return{
        props:{
            allDepts: data
        }
    }
}