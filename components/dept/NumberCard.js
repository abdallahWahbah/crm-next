import { Card, Grid, Typography } from '@mui/material'
import React from 'react'

const NumberCard = ({title, number, Icon}) => 
{
    return (
        <Card sx={{ minWidth: 275 }} className="home__card">
            <div className='home__card--text'>
                <Typography className="home__card--title">{title}</Typography>
                <Typography className="home__card--number">{number}</Typography>
            </div>
            <Icon className="home__card--icon" />
        </Card>
    )
}

export default NumberCard