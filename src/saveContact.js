import React from "react";
import {Link, withRouter} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';


import saveData from "./viewList";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { minHeight } from "@mui/system";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


 const useStyles  = makeStyles ((theme)=>({

    body:{
        background:'red'
    },
    background: "red",
    padding: '20px',
    h1: {
      borderBottom: "1px solid white",
      color: '#3d3d3d',
      fontFamily: "sans-serif",
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '24px',
      padding: '10px',
      textAlign: 'center',
    },
    box: {
        background: 'black',
        border: '1px solid #dedede',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '0 auto',
        maxWidth: '500px',
        padding: '30px 50px',
      },
       
        input: {
        border: "1px solid #d9d9d9",
        borderRadius: '4px',
        boxSizing: 'border-box',
        padding: '10px',
        width: '100%',
      },
     
    //   label {
    //     color: #3d3d3d;
    //     display: block;
    //     font-family: sans-serif;
    //     font-size: 14px;
    //     font-weight: 500;
    //     margin-bottom: 5px;
    //   },
     
    //   error {
    //     color: red;
    //     font-family: sans-serif;
    //     font-size: 12px;
    //     height: 30px;
    //   }
     
    //   submitButton: {
    //     background-color: #6976d9;
    //     color: white;
    //     font-family: sans-serif;
    //     font-size: 14px;
    //     margin: 20px 0px;
    //   }
 }));
   
  
  
 const AddContact= (props)=>{
        const classes =useStyles();
    
    const { register, handleSubmit } = useForm();
   
 return (

     <>
     
    <div style={{backgroundColor: "#1e88e5"}}>
        <Link to="/">Home</Link>
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
    >
        <Card sx={{ minWidth: 305, minHeight: 400, marginTop:"8rem"}}> 
         <CardContent> 
            <div style={{ textAlign: 'center'}}><AccountCircleIcon
                style={{color: blue[500], fontSize: 50, marginLeft: 10, marginBottom: 10 }}/></div>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="First Name" variant="standard" />
      </Box>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Last Name" variant="standard" />
      </Box>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <MdPhone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Telephone" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" />
      </Box>
        </CardContent> 
    </Card>
    </Grid>
    </div>
   </>
 );
}
export default withRouter(AddContact);