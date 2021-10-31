import React, {forwardRef, Fragment, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@mui/material/colors';
import { Button, CardContent, IconButton, CircularProgress, Container, Typography } from '@material-ui/core';
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
import {Link, withRouter} from 'react-router-dom';
// import CreateIcon from '@mui/icons-material/Create';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import saveContactForm from './saveContactForm';
import Card from '@mui/material/Card';
import { db } from './firebase'
import Addcontact from './viewListForm';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import AddBox from '@material-ui/icons/AddBox';

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
        fontWeight: 700
      }
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
    list:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      listStyle:"none",
      marginTop:'1rem'
    },
    // redButton: {
    //   color: '#fff',
    //   background: '#dc3545 !important',
    //   '&:hover': {
    //     color: '#fff',
    //     background: '#dc3545 !important',
    //   }
    // }
  }));


    const ViewList=(props)=>{
        // let theme = createTheme();
        // theme = responsiveFontSizes(theme);

        const classes = useStyles();
        const [userData, setUserData]= useState([]);
        const [responsive, setResponsive] = useState("vertical");
        const [tableBodyHeight, setTableBodyHeight] = useState("400px");
        const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
        const [searchBtn, setSearchBtn] = useState(true);
        const [downloadBtn, setDownloadBtn] = useState(true);
        const [printBtn, setPrintBtn] = useState(true);
        const [viewColumnBtn, setViewColumnBtn] = useState(true);
        const [filterBtn, setFilterBtn] = useState(true);
        const [openNew, setOpenNew] = useState(false);

        const [contactObjects, setContactObjects] = useState({})
        const [ currentId, setCurrentId] = useState(" ");
        
        // useEffect(() =>{
        //     db.collection('contacts').on('value', snapshot =>{
        //       if(snapshot.val()!= null)
        //       setContactObjects({
        //         ...snapshot.val()
        //       })
        //     })
        // },[])

        const tableIcons ={
          Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        }

        useEffect(()=>{
          let userInfo =[];
            db.collection('contacts').get()
            .then((res)=>{
                res.forEach(action =>{
                    // let row =['', `${action.FirstName}`]
                    userInfo.push({...action.data(), id: action.id})
                    console.log(action.data())
                    // console.log("userId",action.id)
                });
                setUserData(userInfo);    
                console.log(userData)         
            })
        },[])

          // function handleClick(id){
          //   console.log("Hello");
          //  setOpen(true);
          //  setCurrentId(id)
          // }
        // function userEdit(){
        //   setCurrentId();
         
        // }



          // const deleteUserData = key => {
          //   if(confirm("Are you sure you want to delete the recond?")){

          //   }
          //     let userId = userId
          //   db.collection('contacts').doc(userId).delete()
          //   .then(()=>{console.log('user Deleted')})
          //   .catch((err)=>{console.log(err)})
          // }

        const columns = [
          { name: "firstName", options: { filterOptions: { fullWidth: true } }},
          "lastName",
          "telephone",
          "email",
          "id",
          {
            name: "Actions",
            options: {
              filter: false,
              customBodyRender: (value, tableMeta) => {
                return (
                  <>
                    
                      <IconButton
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() =>{handleClickOpen(value)}}
                        style={{ marginRight: "1rem" }}
                      >
                      <CreateIcon/>
                      </IconButton>
                      <IconButton
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes.redButton}
                        // onClick={() => deleteUserData(value)}
                        style={{ marginRight: "1rem", color: '#FF0000'}}
                      >
                        <DeleteIcon/>
                        </IconButton>
                      
                  </>
                );
              },
            },
          },
          
        ];
        


        // const actions = [
        //   {
            
        //     icon: "AddBox",
        //     tooltip: 'Edit',
        //     onClick: (event, rowData) => {
        //       // Do save operation
        //     }
        //   }
        // ]
         
          const options = {
            search: searchBtn,
            download: downloadBtn,
            print: printBtn,
            viewColumns: viewColumnBtn,
            filter: filterBtn,
            filterType: "dropdown",
            responsive,
            tableBodyHeight,
            tableBodyMaxHeight,
            onTableChange: (action, state) => { 
              console.log(action);
              console.dir(state);
            }
          };

          const handleClickOpen = (id) => {
            debugger;
            setOpenNew(true);
            setCurrentId(id);
            
          };

          

return(
  <>

    <div className={classes.list}>
      <Link to="/saveContact">Save Contact</Link>
    </div>  
      <Container className={classes.container}>
        <ThemeProvider theme={createTheme()}>     
          {/* <Dialog  open={openNew}>
              <DialogTitle>Set backup account</DialogTitle> */}
              {/* open={openNew} */}
            {/* </Dialog>   */}


        {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button> */}
      
    {/* {
       userData.map((action)=>(
         <p className={classes.container}>{ action.firstName } </p>
         <p>{action.telephone} </p>
         <button>Edit</button>
         <button>Delete</button>
        ))         
      } */}
 <MUIDataTable
        title={"Contact"}
        data={userData}
        columns={columns}
        options={options}
       icons={tableIcons}
       actions={[
        {
          icon: 'Add',
          tooltip: 'Add user',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        }
      ]}
      />


      
      <Addcontact
      open={openNew}
      setCurrentId={setCurrentId}
      />
   </ThemeProvider>
  </Container>
  </>
)}

export default ViewList;


