import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const HomePage = () => 
{
    const [userData, setUserData] = useState(null);
    const navigate = useRouter();

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
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage