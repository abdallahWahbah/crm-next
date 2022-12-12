import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { Alert, Box, Button, Card, CircularProgress, Grid, Snackbar, TextField, Typography } from '@mui/material'
import { usersSchema } from '../components/userSchema'
import { useFormik } from 'formik';
import * as Yup from "yup";

const LoginPage = (props) => 
{
    const [userType, setUserType] = useState(null);
    const [message, setMessage] = useState(null);
    const [submittingForm, setSubmittingForm] = useState(false);
    const navigate = useRouter();

    const onSubmit = async values =>
    {
        setSubmittingForm(true);

        try
        {
            const res = await fetch("http://localhost:3000/api/login",{
                method: "POST",
                header:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email: values.email, userPassword: values.password })
            })
            const data = await res.json();
            console.log(data)
            if(res.status === 200)
            {
                setUserType(data.data.userType)
                setMessage(data.message);
                localStorage.setItem("userData", JSON.stringify(data.data));
                data?.data && navigate.push("/");
            }
            else
            {
                setUserType(undefined)
                setMessage(data.message);
            }
        }
        catch(error)
        {
            console.log(error.message)
        }
        
        setSubmittingForm(false);
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit,
        validationSchema: Yup.object({
            email: Yup.string().required("please enter user email"),
            password: Yup.string().required("please enter user password"),
        })
    })

    return (
        <Box className='login'>
            <Grid container className='login__container'>
                <Grid item xs={6}>
                    <img className='login__logo' src="/logo.webp" alt="login"/>
                </Grid>
                <Grid item xs={6} className="login__form">
                    <Typography variant="h6" className='login__header'>User Login</Typography>
                    <p style={{marginBottom: "65px"}}>Welcome</p>

                    <form onSubmit={formik.handleSubmit}>
                        {userType === undefined  && (
                            <Alert severity="error" sx={{marginBottom: "25px"}}>{message}</Alert>
                        )}
                        {userType && (
                            <Alert severity="success" sx={{marginBottom: "25px"}}>{message}</Alert>
                        )}
                        <TextField
                            fullWidth
                            sx={{marginBottom: "25px"}}
                            autoComplete='false'
                            name={"email"}
                            type={"text"}
                            label={"Email Address"}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={(!formik.values.email && formik.touched.email)}
                            helperText={(!formik.values.email && formik.touched.email) && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            sx={{marginBottom: "25px"}}
                            autoComplete='false'
                            name={"password"}
                            type={"password"}
                            label={"User Password"}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={(!formik.values.password && formik.touched.password)}
                            helperText={(!formik.values.password && formik.touched.password) && formik.errors.password}
                        />
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Button
                                variant="contained"
                                type="submit"
                                className="btn__yellow login__button"
                                disabled={!!submittingForm}
                                endIcon={!!submittingForm && <CircularProgress size={"2rem"} sx={{color:"white", margin: "0 0 0 15px"}}/>}
                            >
                                Login
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginPage

export function getStaticProps()
{
    return {
        props: {
            usersSchema
        }
    }
}