import React, {Fragment, useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@mui/material/colors';
import { Button, CardContent, CircularProgress, Container, Typography } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import AddContact from './saveContactForm';


import { db } from './firebase';

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
}));
 



function Contact(){
      const classes = useStyles();
     
     
      
      // useEffect(()=>{
      //   let userInfo =[];
      //     db.collection('contacts').get()
      //     .then((res)=>{
      //         res.forEach(action =>{
      //             // let row =['', `${action.FirstName}`]
      //             userInfo.push({...action.data(), id: action.id})
      //             console.log(action.data())
      //         });
      //         setUserData(userInfo);    
      //         console.log(userData)         
      //     })
      // },[])


        // const deleteUserData = key => {
        //   if(confirm("Are you sure you want to delete the recond?")){

        //   }
        //     let userId = userId
        //   db.collection('contacts').doc(userId).delete()
        //   .then(()=>{console.log('user Deleted')})
        //   .catch((err)=>{console.log(err)})
        // }

      // const columns = [
      //   { name: "firstName", options: { filterOptions: { fullWidth: true } }},
      //   "lastName",
      //   "telephone",
      //   "email",
      //   {
      //     name: "Actions",
      //     options: {
      //       filter: false,
      //       customBodyRender: (key, tableMeta) => {
      //         return (
      //           <>
                  
      //               <CreateIcon
      //                 size="small"
      //                 variant="contained"
      //                 color="primary"
      //                 // onClick={() => farmActivities(value)}
      //                 style={{ marginRight: "1rem" }}
      //               />
                   
      //               <Button
      //                 size="small"
      //                 variant="contained"
      //                 color="secondary"
      //                 className={classes.redButton}
      //                 // id={action.id}
      //                 // onClick={() => deleteUserData(key)}
      //                 style={{ marginRight: "1rem" }}
      //               >
      //               Delete
      //               </Button>
      //           </>
      //         );
      //       },
      //     },
      //   },
        
      // ];
       
      //   const options = {
      //     search: searchBtn,
      //     download: downloadBtn,
      //     print: printBtn,
      //     viewColumns: viewColumnBtn,
      //     filter: filterBtn,
      //     filterType: "dropdown",
      //     responsive,
      //     tableBodyHeight,
      //     tableBodyMaxHeight,
      //     onTableChange: (action, state) => {
      //       console.log(action);
      //       console.dir(state);
      //     }
      //   };


      // const addUsers= Obj =>{

      // }

return(
  <>
  <ThemeProvider theme={createTheme()}> 
   {/* <MUIDataTable
        title={"Contact"}
        data={userData}
        columns={columns}
        options={options}
      /> */}
  <AddContact/>
  </ThemeProvider>
  </>
)}
export default withRouter (Contact);

























































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
//  }));
   
  
  
//  const AddContact= (props)=>{
//         const classes =useStyles();
//   // const { register, handleSubmit } = useForm();

//    const [firstName, setFirstName]= useState("");
//    const [lastName, setLastName]= useState("");
//    const [email, setEmail]=useState("");
//    const [telephone, setTelephone]= useState("");
//    const [loader, setLoader]= useState(false);
//    const [userData, setUserData]= useState([]);


//   //  useEffect(()=>{
//   //   let userInfo =[];
//   //     db.collection('contacts').get()
//   //     .then((res)=>{
//   //         res.forEach(action =>{
//   //             // let row =['', `${action.firstName}`]

//   //             userInfo.push(action.data())
//   //             console.log(action.data())
//   //         });
//   //     setUserData(userInfo);
     
//   //     })
//   // },[])

//    const handleSubmit=(e)=>{
//       e.preventDefault();
//       setLoader(true);

//       if (firstName === "" || lastName ==="" || telephone ==="" || email ===""){
//         alert("Field cannot be empty")
//         setLoader(false)
//         return;
//       }
      
//      db.collection('contacts').add({
//        firstName:firstName,
//        lastName:lastName,
//        email:email,
//        telephone:telephone
//       })
//       .then(()=>{
//         alert("Contact successfully saved 👍")
//         setLoader(false);
//       })
//       .catch((error) =>{
//         alert(error.message)
//         setLoader(false);
//       });
//       setFirstName("");
//       setLastName("");
//       setTelephone("");
//       setEmail("");
//    }

//  return (

//      <>
     
//     <div style={{backgroundColor: "#1e88e5"}}>
//         <Link to="/">Home</Link>
//     <Grid container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justify="center"
//     style={{ minHeight: '100vh' }}
//     >
//         <Card sx={{ minWidth: 305, minHeight: 400, marginTop:"8rem"}}> 
//          <CardContent> 
//             <div style={{ textAlign: 'center'}}><AccountCircleIcon
//                 style={{color: blue[500], fontSize: 50, marginLeft: 10, marginBottom: 10 }}/></div>
//           <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" label="First Name" variant="standard" value={firstName} 
//         onChange={(e)=>setFirstName(e.target.value)}/>
//       </Box>
//        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" label="Last Name" variant="standard" value={lastName}
//         onChange={(e)=>setLastName(e.target.value)} />
//       </Box>
//        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <MdPhone sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" label="Telephone" variant="standard" value={telephone} 
//         onChange={(e)=>setTelephone(e.target.value)} />
//       </Box>
//       <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//         <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//         <TextField id="input-with-sx" label="Email" variant="standard" value={email}
//         onChange={(e)=>setEmail(e.target.value)} />
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
    
//             <h1>I love to code</h1>
//       {
//        userData.map((action)=>(
//         <Card >
//         <CardContent>
//          <p className={classes.container}>{ action.firstName } </p>
//          <p>{action.telephone} </p>
//          </CardContent>
//           </Card>
//         ))         
//       }
//        </div>
//    </>
//  );
// }
// export default withRouter(AddContact);