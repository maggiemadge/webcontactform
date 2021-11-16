// import React, { useEffect, useState } from "react";
// import {Link, withRouter} from 'react-router-dom'
// import { useForm } from "react-hook-form";
// import { makeStyles } from '@mui/styles';
// import saveData from "./viewList";
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';
// import Grid from '@mui/material/Grid';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { minHeight } from "@mui/system";
// import TextField from '@mui/material/TextField';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MdPhone from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';


// import { db } from './firebase'


//  const useStyles  = makeStyles ((theme)=>({

    
//     h1: {
//       borderBottom: "1px solid white",
//       color: '#3d3d3d',
//       fontFamily: "sans-serif",
//       fontSize: '20px',
//       fontWeight: '600',
//       lineHeight: '24px',
//       padding: '10px',
//       textAlign: 'center',
//     },
//     box: {
//         background: 'black',
//         border: '1px solid #dedede',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         margin: '0 auto',
//         maxWidth: '500px',
//         padding: '30px 50px',
//       },
       
//         input: {
//         border: "1px solid #d9d9d9",
//         borderRadius: '4px',
//         boxSizing: 'border-box',
//         padding: '10px',
//         width: '100%',
//       },
//       list:{
//         display:"flex",
//         flexDirection:"row",
//         justifyContent:"flex-end",
//         listStyle:"none",
//         // marginTop:'2rem'
//       },

      
//  }));
   
  
  
//  function AddContact(props){
//         const classes =useStyles();
//         const [loader, setLoader]= useState(false);
//         const [userData, setUserData]= useState([]);
//         const [states, setStates]= useState({
//           firstName:'',
//           lastName:'',
//           email:'',
//           telephone:''
//         })

//         function handleChange(evt) {
//           const value = evt.target.value;
//           setStates({
//             ...states,
//             [evt.target.name]: value
//           });
//         }


//    const handleSubmit=(e)=>{
//       e.preventDefault();
//       setLoader(true);

//       if (states.firstName === "" || states.lastName ==="" || states.telephone ==="" || states.email ===""){
//         alert("Field cannot be empty")
//         setLoader(false)
//         return;
//       }
      
//      db.collection('contacts').add(states)
//       .then(()=>{
//         alert("Contact successfully saved 👍")
//         setLoader(false);
//       })
//       .catch((error) =>{
//         alert(error.message)
//         setLoader(false);
//       });
//        setStates({
//         firstName:"",
//         lastName:"",
//         telephone:"",
//         email:""
//        })
//    }

//  return (

//      <>
     
//     <div style={{backgroundColor: "#1e88e5"}}>
//     <div className={classes.headerDiv}>
//               <ul className={classes.list} >
//               <li style={{marginRight:"2rem"}}><Link to="/" style={{color:"#fff", textDecoration:'none'}} >Home</Link> </li>
//               <li style={{marginRight:"2rem"}}><Link to="/viewList"  style={{color:"#fff", textDecoration:'none'}}>ViewContact</Link></li>
//           </ul>
//             </div>
//     <Grid container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justify="center"
//     style={{ minHeight: '100vh' }}
//     >
//         <Card sx={{ minWidth: 330, minHeight: 430, marginTop:"8rem"}}> 
//          <CardContent> 
//             <div style={{ textAlign: 'center'}}><AccountCircleIcon
//                 style={{color: blue[500], fontSize: 50, marginLeft: 10, marginBottom: 10 }}/></div>
//           <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx"  name='firstName' label="First Name" variant="standard" value={states.firstName} 
//         onChange={handleChange}
//         />
//       </Box>
//        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" name='lastName'label="Last Name" variant="standard" value={states.lastName}
//         onChange={handleChange} />
//       </Box>
//        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <MdPhone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" name='telephone' label="Telephone" variant="standard" value={states.telephone} 
//         onChange={handleChange} />
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" name='email'label="Email" variant="standard" value={states.email}
//         onChange={handleChange} />
//       </Box>        
//         </CardContent>
//         <Button
//               autoFocus
//               variant="contained"
//               style={{ marginLeft: "10rem", marginTop:'1rem', background: loader ? "#cccccc" : blue[500]}}
//               onClick={handleSubmit}
//         >
//              Submit
//             </Button> 
//     </Card>
//     </Grid>

//        </div>
//    </>
//  );
// }
// export default withRouter(AddContact);