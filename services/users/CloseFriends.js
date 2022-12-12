// import { Card, CardContent, Typography } from '@mui/material';
// import React, {useState, useEffect} from 'react';
// import Header from '../../components/Header';
// import { usersSchema } from '../../components/userSchema';

// const CloseFriends = (props) => 
// {
//     const [userData, setUserData] = useState({});
//     const [userType, setUserType] = useState(null);
//     const [friends, setFriends] = useState([]);

//     useEffect(()=>
//     {
//         setUserData(JSON.parse(sessionStorage.getItem("userData")));
//         let type = sessionStorage.getItem("loggedInType");
//         setUserType(type)
//     }, [])

//     useEffect(()=>
//     {
//         setFriends(props.usersSchema.filter(user => user.deptId === userData.deptId))

//     }, [userData, props.usersSchema])

//     return (
//         <React.Fragment>
//             {(userType === "admin" || userType === "user") && (
//                 <Header />
//             )}
//             <div className='center' style={{width: "60%"}}>
//                 <Card>
//                     <CardContent>
//                         <Typography>Friends</Typography>
//                         {friends?.map(friend => (
//                             <p key={friend.id}>{friend.name}</p>
//                         ))}
//                     </CardContent>
//                 </Card>
//             </div>
//         </React.Fragment>
//     )
// }

// export default CloseFriends

// export function getStaticProps()
// {
//     return{
//         props:{
//             usersSchema
//         }
//     }
// }

import React from 'react'

const CloseFriends = () => 
{
    return (
        <div>CloseFriends</div>
    )
}

export default CloseFriends