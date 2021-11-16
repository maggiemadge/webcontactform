import React, {Fragment, useEffect} from 'react';
import {Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Call from "./Images/Call.jpg";
import './App.css'


const useStyles = makeStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    
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
        listStyle:"none",       
      },
  
    // bgImg:{
    //  background:'#2E7D32',
    //   height: 'auto',
    //   backgroundSize: 'cover',
    //   marginTop:0
    //   // background:'url(C:/Users/mooletu/Downloads/webcontactform-master/webcontactform-master/src/Images/Call.jpg)', 
    //   // backgroundImage:'url(C:/Users/mooletu/Downloads/webcontactform-master/webcontactform-master/src/Images/Call.jpg)', 


    //  }
    tops:{
      color:'#fff'

    }
  }));


const Home=()=>{

  const classes = useStyles();

    
       
    return(
        <Fragment >
            <div className={classes.headerDiv}>
              <div className={classes.tops}>
            <ul className={classes.list} >
                        <li style={{marginRight:"2rem"}}><Link to="/request" style={{color:'#fff', textDecoration:'none'}} >Contacts</Link> </li>
                        <li style={{marginRight:"2rem"}}> <Link to="/saveContact" style={{color:'#fff', textDecoration:'none'}}> Save Contact</Link></li>
                        <li style={{marginRight:"2rem"}}><Link to="/viewList" style={{color:'#fff', textDecoration:'none'}}>ViewContact</Link></li>
                    </ul>
                    </div>
                    
              {/* <img src={Call} alt='calllogo'/> */}
              
                    


            </div>
            
        </Fragment>
    )
}
export default Home;