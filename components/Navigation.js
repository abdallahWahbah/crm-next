import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddHomeIcon from '@mui/icons-material/AddHome';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const Navigation = ({userData}) => 
{
    const [path, setPath] = useState("")
    const router = useRouter();
    const navigate = useRouter();

    useEffect(()=>
    {
        if(router.pathname === "/") // means you reached the homePage from LoginPage (initial acces to Home Page)
        {
            // setPath(userData?.userType === "admin" ? "/dept/AllDepts" : "/user/DeptFriends");
            // navigate.push(userData?.userType === "admin" ? "/dept/AllDepts" : "/user/DeptFriends");
            if(userData?.userType === "admin")
            {
                setPath("/dept/AllDepts") // for list styling
                navigate.push("/dept/AllDepts")
            }
            if(userData?.userType === "user")
            {
                setPath("/user/DeptFriends")
                navigate.push("/user/DeptFriends")
            }
        }
        else
        {
            setPath(router.pathname);
            
        }
    }, [userData])

    return (
        <div className="nav">
            <div className='nav__name--container'>
                <AccountCircleIcon  className='nav__name--icon'/>                    
                <Typography className='nav__name' variant="h4" >{userData?.userName}</Typography>
            </div>
            <ul className='nav__list'>
                {userData?.userType === "admin" && (
                    <React.Fragment>
                        <li>
                            <Link className={`nav__list--item ${path === "/dept/AllDepts" ? "selected" : ""}`} href="/dept/AllDepts">
                                <ApartmentIcon className="nav__list--icon"/>
                                <Typography className="nav__list--label" variant='h5'>All Departments</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav__list--item ${path === "/user/AllUsers" ? "selected" : ""}`} href="/user/AllUsers">
                                <Diversity3Icon className="nav__list--icon"/>
                                <Typography className="nav__list--label" variant='h5'>All Users</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav__list--item ${path === "/dept/AddDept" ? "selected" : ""}`} href="/dept/AddDept">
                                <AddHomeIcon className="nav__list--icon"/>
                                <Typography className="nav__list--label" variant='h5'>Add Department</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link className={`nav__list--item ${path === "/user/AddUser" ? "selected" : ""}`} href="/user/AddUser">
                                <PersonAddIcon className="nav__list--icon"/>
                                <Typography className="nav__list--label" variant='h5'>Add User</Typography>
                            </Link>
                        </li>

                    </React.Fragment>
                )}
                {userData?.userType === "user" && (
                    <li>
                        <Link className={`nav__list--item ${path === "/user/DeptFriends" ? "selected" : ""}`} href="/user/DeptFriends">
                            <PersonIcon className="nav__list--icon"/>
                            <Typography className="nav__list--label" variant='h5'>Department Friends</Typography>
                        </Link>
                    </li>
                )}
                <li>
                    <Link className={`nav__list--item ${path === "/Profile" ? "selected" : ""}`} href="/Profile">
                        <PersonIcon className="nav__list--icon"/>
                        <Typography className="nav__list--label" variant='h5'>Profile</Typography>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation