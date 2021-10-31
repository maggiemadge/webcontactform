import React, {Fragment, useEffect} from 'react';
import {Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@mui/material/colors';
import Call from "./Images/Call.jpg";

const useStyles = makeStyles((theme) => ({
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
        fontWeight: 600
      }
    },
    body:{
      backgroundColor: red[500],
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    dangerButton: {
      color: "#fff",
      backgroundColor: "#dc3545",
  
      "&:hover": {
        backgroundColor: "#dc3545",
      },
    },
    container: {
      marginTop: "4rem",
      marginBottom: "3rem",
      alignItems: 'flex-end',
      
    },
    header: {
      fontSize: "1.7rem",
      marginBottom: "1rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    headerButton: {
      outline: "none",
      "&:focus": {
        outline: "none",
      },
      background: "#2E7D32",
      color: "#fff",
      "&:hover": {
        background: "#fff",
        color: "#2E7D32",
        outline: "#2E7D32 solid 1px",
      },
    },
    headerDiv: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
          justifyContent: "flex-end",
        },
      },
      list:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
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


const Home=()=>{

  const classes = useStyles();

    
      //  <div className="clv_counter_wrapper clv_section">
      //   <div className="container">
      //     <div className="row justify-content-center">
      //       <div className="col-lg-6 col-md-6">
      //         <div className="clv_heading">
      //           <h3>we are an expert in this field</h3>
      //           <div className="clv_underline">
      //             {/* <img src={Call} alt="image" /> */}
      //           </div>
      //            <p>We offer myriads of products which include: Dairy products, Crops and Edible forestry products etc...</p> 
      //         </div>
      //       </div>
      //     </div>
      //     <div className="counter_section">
      //       <div className="row">
      //         <div className="col-lg-3 col-md-3">
      //           <div className="counter_block">
      //             <div className="counter_img">
      //               <span>
      //                 <img
      //                   // src={Call}
      //                   alt="image"
      //                   className="img-fluid"
      //                 />
      //               </span>
      //             </div>
      //             <div className="counter_text">
      //               <h4 className="yellow_color">
      //                 <span
      //                   className="count_no"
      //                   // data-to={}
      //                   data-speed="3000"
      //                 >
      //                   {/* {Call} */}
      //                 </span>
      //               </h4>
      //               <h5>Registered Farmers</h5>
      //             </div>
      //           </div>
      //         </div>
      //         </div>
      //         </div>
      //         </div>
      //         </div>
      
       


    return(
        <Fragment >
            <div className={classes.headerDiv}>
              <img src={Call} alt='calllogo'/>
              <ul className={classes.list} >
              <li style={{marginRight:"2rem"}}><Link to="/request" >Contacts</Link> </li>
              <li style={{marginRight:"2rem"}}> <Link to="/saveContact"> Save Contact</Link></li>
              <li><Link to="/viewList">ViewContact</Link></li>
          </ul>
            </div>
            
        </Fragment>
    )
}
export default Home;