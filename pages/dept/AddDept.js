import { Alert, Button, Card, CardContent, CircularProgress, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useState, useEffect} from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

const AddDept = () => 
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
    
    const onSubmit = async values =>
    {
        setSubmittingForm(true);
        try
        {
            const res = await fetch("/api/addDept", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({deptId: values.deptId, name: values.name, description: values.description, HOD: values.HOD,})
            });
            const data = await res.json();
            console.log(data)
            setMessage(data.message)
        }
        catch(error)
        {
            console.log(error.message)
        }
        setSubmittingForm(false);
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            deptId:"",
            name: "",
            description: "",
            HOD:""
        },
        onSubmit,
        validationSchema: Yup.object({
            deptId: Yup.string().required("please enter department ID"),
            name: Yup.string().required("please enter department name"),
            description: Yup.string().required("please enter department description"),
            HOD: Yup.string().required("please enter ID of Head of department"),
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
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"name"}
                                            type={"text"}
                                            label={"Department Name"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.name && formik.touched.name)}
                                            helperText={(!formik.values.name && formik.touched.name) && formik.errors.name}
                                        />
                                        
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"description"}
                                            type={"text"}
                                            label={"Department Description"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.description && formik.touched.description)}
                                            helperText={(!formik.values.description && formik.touched.description) && formik.errors.description}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            sx={{marginBottom: "25px"}}
                                            autoComplete='false'
                                            name={"HOD"}
                                            type={"text"}
                                            label={"Head Of Department ID"}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.HOD}
                                            onChange={formik.handleChange}
                                            error={(!formik.values.HOD && formik.touched.HOD)}
                                            helperText={(!formik.values.HOD && formik.touched.HOD) && formik.errors.HOD}
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
                                                Add Dept
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

export default AddDept