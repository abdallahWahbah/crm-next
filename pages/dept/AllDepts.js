import React, { useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import NumberCard from '../../components/dept/NumberCard';
import DeptTable from '../../components/dept/DeptTable';

const AllDepts = (props) => 
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
                    <div className='home__right--container' style={{boxShadow: "none"}}>
                        <Grid container spacing={3} sx={{marginBottom: "20px"}}>
                            <Grid item xs={4}>
                                <NumberCard
                                    title="Num Of Depts"
                                    number={props.allDepts.length}
                                    Icon={ApartmentIcon}
                                />
                            </Grid>
                            <Grid item xs={4}> 
                                <NumberCard
                                    title="Num Of Users"
                                    number={props.allUsers?.filter(user => user.userType === "user").length}
                                    Icon={Diversity3Icon}
                                />
                            </Grid>
                            <Grid item xs={4}> 
                                <NumberCard
                                    title="Num Of Admins"
                                    number={props.allUsers?.filter(user => user.userType === "admin").length}
                                    Icon={AdminPanelSettingsIcon}
                                />
                            </Grid>
                        </Grid>
                        <DeptTable
                            allDepts={props.allDepts}
                            allUsers={props.allUsers}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AllDepts

export async function getStaticProps()
{
    const resDepts = await fetch("http://localhost:3000/api/getAllDepts");
    const dataDepts = await resDepts.json();
    
    const resUsers = await fetch("http://localhost:3000/api/getAllUsers");
    const dataUsers = await resUsers.json();
    
    return{
        props:{
            allDepts: dataDepts,
            allUsers: dataUsers
        }
    }
}