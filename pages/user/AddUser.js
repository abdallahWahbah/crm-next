import { Alert, Button, Card, CardContent, CircularProgress, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useState, useEffect} from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

const AddUser = () => 
{
    const [userData, setUserData] = useState(null);
    const [submittingForm, setSubmittingForm] = useState(false);
    const [message, setMessage] = useState();

    useEffect(()=>
    {
        let userData = JSON.parse(localStorage.getItem("userData"));
        if(!userData) navigate.push("/LoginPage")
        setUserData(userData);
    }, [])

    const handleAddUser = async values => 
    {
        setSubmittingForm(true)

        try
        {
            const response = await fetch("/api/addUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                                        email: values.email, 
                                        userName: values.userName, 
                                        userPassword: values.userPassword,
                                        deptId: values.deptId, 
                                        userType: values.userType, 
                                        dateOfBirth: values.dateOfBirth,
                                        position: values.position, 
                                        startDate: values.startDate, 
                                        country: values.country,
                                     })
            })
            const data = await response.json();
            console.log(data);
            setMessage(data.message);
        }
        catch(error)
        {
            console.log(error.message)
        }
        setSubmittingForm(false);
    }

    const onSubmit = values =>
    {
        console.log(values);
        handleAddUser(values);
        // formik.resetForm();
    }
    

    const formik = useFormik({
        initialValues: {
            email: "",
            userName: "",
            userPassword:"",
            deptId:"",
            userType: "",
            dateOfBirth: "",
            position:"",
            startDate:"",
            country:"",
        },
        onSubmit,
        validationSchema: Yup.object({
            email: Yup.string().required("please enter email"),
            userName: Yup.string().required("please enter name"),
            userPassword: Yup.string().required("please enter password"),
            deptId: Yup.string().required("please enter department ID"),
            userType: Yup.string().required("please enter user type"),
            dateOfBirth: Yup.string().required("please enter date of birth"),
            position: Yup.string().required("please enter position"),
            startDate: Yup.string().required("please enter start date"),
            country: Yup.string().required("please enter country")
        })
    })

    return (
        <React.Fragment>
            <Header />
            <div className='home'>
                <Navigation userData={userData} />

                    <div className='home__right'>
                    <Card className="home__right--container">
                        <CardContent>
                            {message  && (
                                <Alert severity="success" sx={{marginBottom: "25px"}}>{message}</Alert>
                            )}
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"email"}
                                            type={"text"}
                                            label={"User Email"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.email && formik.touched.email)}
                                            helperText={(!formik.values.email && formik.touched.email) && formik.errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"userName"}
                                            type={"text"}
                                            label={"User Name"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.userName}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.userName && formik.touched.userName)}
                                            helperText={(!formik.values.userName && formik.touched.userName) && formik.errors.userName}
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"userPassword"}
                                            type={"password"}
                                            label={"User Password"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.userPassword}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.userPassword && formik.touched.userPassword)}
                                            helperText={(!formik.values.userPassword && formik.touched.userPassword) && formik.errors.userPassword}
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"deptId"}
                                            type={"text"}
                                            label={"Department ID"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.deptId}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.deptId && formik.touched.deptId)}
                                            helperText={(!formik.values.deptId && formik.touched.deptId) && formik.errors.deptId}
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"userType"}
                                            type={"text"}
                                            label={"User Type"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.userType}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.userType && formik.touched.userType)}
                                            helperText={(!formik.values.userType && formik.touched.userType) && formik.errors.userType}
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"dateOfBirth"}
                                            type={"date"}
                                            label={"Date of birth"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.dateOfBirth}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.dateOfBirth && formik.touched.dateOfBirth)}
                                            helperText={(!formik.values.dateOfBirth && formik.touched.dateOfBirth) && formik.errors.dateOfBirth}
                                        />
                                        
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"position"}
                                            type={"text"}
                                            label={"Position"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.position}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.position && formik.touched.position)}
                                            helperText={(!formik.values.position && formik.touched.position) && formik.errors.position}
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"startDate"}
                                            type={"date"}
                                            label={"Start date"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.startDate}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.startDate && formik.touched.startDate)}
                                            helperText={(!formik.values.startDate && formik.touched.startDate) && formik.errors.startDate}
                                        />
                                    </Grid>
                                    <Grid item xs={6}> 
                                        <TextField
                                            fullWidth
                                            required
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"country"}
                                            type={"text"}
                                            label={"Country"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.country}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.country && formik.touched.country)}
                                            helperText={(!formik.values.country && formik.touched.country) && formik.errors.country}
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={6}> 
                                        <div style={{display: "flex"}}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                className="btn__yellow"
                                                sx={{flex: "1", height: "55px"}}
                                                disabled={!!submittingForm}
                                                endIcon={!!submittingForm && <CircularProgress size={"2rem"} sx={{color:"white", margin: "0 0 0 15px"}}/>}        
                                            >
                                                Add User
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                        </Card>
                    </div>
            </div>
        </React.Fragment>
    )
}

export default AddUser