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
  root: {
    margin: 0,
    padding: theme.spacing(2),
  
    '& .MuiTableCell-head': {
      color: '#263238',
      fontWeight: 700,
    },
   
    '&  .MuiTableCell-head .MuiButton-text .MuiButton-label':{
      fontWeight: 700,
    },

    '& .MuiToolbar-regular .MuiTypography-root.MuiTypography-h6': {
      opacity: 0.3,
      fontWeight: 700
    }
  },
    
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
    // const [firstName, setFirstName]= useState("");
    // const [lastName, setLastName]= useState("");
    // const [email, setEmail]=useState("");
    // const [telephone, setTelephone]= useState("");
    const [loader, setLoader]= useState(false);
    const [userDetails, setUserDetails]= useState("");
    const [allDetails, setAllDetails] = useState({})
    
    const [states, setStates]= useState({
      firstName:'',
      lastName:'',
      email:'',
      telephone:''
    })

    // 
    function checkId(userInfo) {
      return userInfo.id === props.id;
    }

   useEffect(() =>{
        if (props.open ===false){
          setStates({
            firstName:'',
            lastName:'',
            telephone:'',
            email:''

          })

          // setFirstName("")
          // setLastName('')
          // setEmail('')
          // setTelephone('')
        }else  {
          console.log(props.allUserInfo)
          // a variable that holds alluserinfo and check if the id matches what's in the object
         let user= props.allUserInfo.find(checkId);   
         console.log(user.firstName);

         setStates({
          firstName:(user.firstName),
          lastName:(user.lastName),
          email:(user.email),
          telephone:(user.telephone)
         })
           
         

        //  setFirstName(user.firstName)
        //  setLastName(user.lastName)
        //  setEmail(user.email)
        //  setTelephone(user.telephone)

         
          console.log(userDetails)
        }
       
   },[props.open])


   function handleChange(evt) {
    const value = evt.target.value;
    setStates({
      ...states,
      [evt.target.name]: value
    });
  }


   const handleSubmit=(e)=>{
      e.preventDefault();
      setLoader(true);

      db.collection('contacts').doc(props.id).update(states
      //   {
      //   firstName:firstName,
      //   telephone: telephone,
      //   lastName: lastName,
      //   email:email
      // }
      )
      .then(()=>{
            alert("Contact was successfully updated 👍")
            setLoader(false);
          })
          .catch((error) =>{
            alert(error.message)
            setLoader(false);
          });
         
   }

 return (

     <>
     <Dialog 
     aria-labelledby="customized-dialog-title"
    open={props.open}
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
        <TextField id="input-with-sx"  name='firstName' label="First Name" variant="standard" value={states.firstName} 
        onChange={handleChange}
        />
      </Box>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" name='lastName'label="Last Name" variant="standard" value={states.lastName}
        onChange={handleChange} />
      </Box>
       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <MdPhone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" name='telephone' label="Telephone" variant="standard" value={states.telephone} 
        onChange={handleChange} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" name='email'label="Email" variant="standard" value={states.email}
        onChange={handleChange} />
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