import React, {Fragment, useEffect} from 'react';
import {Link } from "react-router-dom";
import { styled } from '@mui/material/styles';


const useStyles = styled((theme) => ({
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
      marginTop: "3rem",
      marginBottom: "3rem",
    },
    header: {
      fontSize: "1.7rem",
      marginBottom: "1rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    headerDiv: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "2rem",
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
        justifyContent: "space-between",
        flexDirection: "column",
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
          justifyContent: "space-between",
        },
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

    const classes= useStyles()

    return(
        <Fragment >
            <div className={classes.headerDiv}>
            {/* <h1>Welcome to Your Contact List</h1> */}
            <Link to="/request">Contacts</Link>
            <> </>
            <Link to={{pathname: "/saveContact", hash: "#contact", search:"?contact"}}> Save Contact</Link>
            <> </>
            <Link to="/viewList">ViewContact</Link>
            </div>
        </Fragment>
    )
}
export default Home;