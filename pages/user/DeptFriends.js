import React, { useState, useEffect} from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

const DeptFriends = (props) => 
{
    const [userData, setUserData] = useState(null);
    const [users, setUsers] = useState();

    useEffect(()=>
    {
        let userData = JSON.parse(localStorage.getItem("userData"));
        if(!userData) navigate.push("/LoginPage")
        setUserData(userData);
        setUsers(props.allUsers.filter(user => user.deptId === userData.deptId).filter(user => user.id !== userData.id))
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className='home'>
                <Navigation userData={userData} />

                <div className='home__right'>
                    <Card className='home__right--container'>
                        <CardContent>
                        <Typography className="paper__small--header" sx={{marginBottom:"15px"}}>Friends in </Typography>
                            <ol className='paper__list'>
                                {users?.map(user => (
                                    <li key={user.id}>{user.userName}</li>
                                ))}

                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </div>
            newpage1
        </React.Fragment>
    )
}

export default DeptFriends

export async function getStaticProps()
{
    const res = await fetch("http://localhost:3000/api/getAllUsers");
    const data = await res.json();

    return{
        props:{
            allUsers: data
        }
    }
}