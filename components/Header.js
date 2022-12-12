import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';
import { Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Header = (props) => 
{
    const [userData, setUserData] = useState({});
    const [userType, setUserType] = useState(null);
    const navigate = useRouter();

    useEffect(()=>
    {
        setUserData(JSON.parse(sessionStorage.getItem("userData")));
        let type = sessionStorage.getItem("loggedInType");
        setUserType(type)
    }, [])


    const handleLogout = () =>
    {
        localStorage.removeItem("userData");
        navigate.push("/LoginPage")
    }
    
    return (
        <div className='header'>
            <div className='header__logo--container' onClick={()=>navigate.push("/")}>
                <img className="header__logo" src="/header__logo.webp" alt='header__logo'/>
                <div className="header__title--container">
                    <Typography className='header__title'>crm</Typography>
                    <p className='header__title--description'>Customer Relationship Management</p>
                </div>
            </div>
            <ul className='header__list'>           
                {/* <li className='header__list--item'>
                    <Link href="/Profile">
                        <PersonIcon className='header__list--icon' sx={{marginRight: "20px"}}/>
                    </Link>
                </li> */}
                <li className='header__list--item' onClick={handleLogout}>
                    <Link href="/LoginPage">
                        <LogoutIcon className='header__list--icon' />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header

// export function getStaticProps()
// {
//     const userData = JSON.parse(sessionStorage.getItem("userData"));
//     console.log(userData)
//     return{
//         props:{
//             userData
//         }
//     }
// }