import React, { useEffect, useState } from "react";
import {Link, withRouter} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import saveData from "./viewList";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MdPhone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { db } from './firebase'
import { Dialog } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import DialogTitle from '@mui/material/DialogTitle';



 const useStyles  = makeStyles ((theme)=>({

    
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
      list:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        listStyle:"none"
      },
      Dialog: {
        "& *:focus": {
          outline: "none",
        },
      },
      gridContainer: {
        "& > div": {
          padding: ".5rem",
        },
      },
      DialogTitle: {
        "& h2": {
          fontSize: "1.5rem",
        },
      },
 }));
   
  
    

 const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


 function AddContact(props){
    const classes =useStyles();
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]=useState("");
    const [telephone, setTelephone]= useState("");
    const [loader, setLoader]= useState(false);
    const [formName, setFormName]= useState('Edit')
    const [userData, setUserData]= useState([]);

    // const initialStates={
    //     email:'',
    //    firstName:'',
    //    lastName:'',
    //    telephone:'',
    //     textButton: 'Save',
    //     formName:'Edit'
    // }

    // const initialValues={
    //    email:'',
    //    firstName:'',
    //    lastName:'',
    //    telephone:'',
    // }


//    useEffect(() =>{
//         if (props.currentId ="")
//         state({...
//         setFirstName, setLastName, setEmail, setTelephone})  
//         else   
//         state({... setFirstName, setLastName, setEmail, setTelephone})
//    },[props.currentId, props.userData])

  
useEffect(() =>{
    // debugger
    console.log(props.open)
},[props.open])

 

   const handleSubmit=(e)=>{
      e.preventDefault();
      setLoader(true);

      if (firstName === "" || lastName ==="" || telephone ==="" || email ===""){
        alert("Field cannot be empty")
        setLoader(false)
        return;
      }
      
     db.collection('contacts').add({
       firstName:firstName,
       lastName:lastName,
       email:email,
       telephone:telephone
      })
      .then(()=>{
        alert("Contact successfully saved 👍")
        setLoader(false);
      })
      .catch((error) =>{
        alert(error.message)
        setLoader(false);
      });
      setFirstName("");
      setLastName("");
      setTelephone("");
      setEmail("");
   }

 return (

     <>
     {/* <Dialog  open={props.open}>
              <DialogTitle>Set backup account</DialogTitle>
              </Dialog> */}
     <Dialog 
     aria-labelledby="customized-dialog-title"
    open={props.open}
    // style={{
    //     zIndex: 1000,
    //     }}
        className={classes.Dialog}
        fullWidth={true}
        TransitionComponent={Transition}
           
        maxWidth="md" >
    <div style={{backgroundColor: "#1e88e5"}}>        
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
        <TextField id="input-with-sx" label="First Name" variant="standard" value={firstName} 
        onChange={(e)=>setFirstName(e.target.value)}/>
      </Box>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Last Name" variant="standard" value={lastName}
        onChange={(e)=>setLastName(e.target.value)} />
      </Box>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <MdPhone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Telephone" variant="standard" value={telephone} 
        onChange={(e)=>setTelephone(e.target.value)} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" value={email}
        onChange={(e)=>setEmail(e.target.value)} />
      </Box>        
        </CardContent>
        <Button
              autoFocus
              variant="contained"
              style={{ marginLeft: "10rem", marginTop:'1rem', background: loader ? "#cccccc" : blue[500]}}
              onClick={handleSubmit}
        >
             Submit
            </Button> 
    </Card>
    </Grid>

       </div>
       </Dialog>
     
   </>
 );
}
export default withRouter(AddContact);