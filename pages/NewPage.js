import React, { useState, useEffect} from 'react';
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const NewPage = () => 
{
    const [userData, setUserData] = useState(null);
    const [selectedSection, setSelectedSection] = useState("");

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
                <Navigation 
                    userData={userData}
                    setSection={setSelectedSection} 
                />
            </div>
            newpage1
        </React.Fragment>
    )
}

export default NewPage