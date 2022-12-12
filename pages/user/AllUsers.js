import React, { useState, useEffect} from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import UserTable from '../../components/users/UserTable';

const AllUsers = (props) => 
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
                        <UserTable
                            allUsers={props.allUsers}
                            allDepts={props.allDepts}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AllUsers


export async function getStaticProps()
{
    const resUsers = await fetch("http://localhost:3000/api/getAllUsers");
    const dataUsers = await resUsers.json();

    const resDepts = await fetch("http://localhost:3000/api/getAllDepts");
    const dataDepts = await resDepts.json();
    
    return{
        props:{
            allUsers: dataUsers,
            allDepts: dataDepts
        }
    }
}