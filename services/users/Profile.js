// import { Card, CardContent, Typography } from '@mui/material';
// import React, {useEffect, useState} from 'react'
// import Header from '../../components/Header';

// const Profile = () => 
// {
//     const [userData, setUserData] = useState({});
//     const [userType, setUserType] = useState(null);

//     useEffect(()=>
//     {
//         setUserData(JSON.parse(sessionStorage.getItem("userData")));
//         let type = sessionStorage.getItem("loggedInType");
//         setUserType(type)
//     }, [])
//     console.log(userData)
    
//     return (
//         <React.Fragment>
//             {(userType === "admin" || userType === "user") && (
//                 <Header/>
//             )}
//             <div className='center' style={{width: "60%"}}>
//                 <Card>
//                     <CardContent>
//                         <div style={{marginBottom: "20px"}}>
//                             <h3>Id</h3>
//                             <p>{userData.id}</p>
//                         </div>
//                         <div style={{marginBottom: "20px"}}>
//                             <h3>name</h3>
//                             <p>{userData.name}</p>
//                         </div>
//                         <div style={{marginBottom: "20px"}}>
//                             <h3>Department ID</h3>
//                             <p>{userData.deptId}</p>
//                         </div>
//                         <div style={{marginBottom: "20px"}}>
//                             <h3>Type</h3>
//                             <p>{userData.type}</p>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Profile

import React from 'react'

const Profile = () => 
{
    return (
        <div  className='home__right'>Profile</div>
    )
}

export default Profile