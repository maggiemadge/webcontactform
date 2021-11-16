import React, { forwardRef, Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@mui/material/colors";
import {
  Button,
  CardContent,
  IconButton,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { Link, withRouter } from "react-router-dom";
// import CreateIcon from '@mui/icons-material/Create';
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import saveContactForm from "./saveContactForm";
import Card from "@mui/material/Card";
import { db } from "./firebase";
import Addcontact from "./viewListForm";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddBox from "@material-ui/icons/AddBox";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),

    "& .MuiTableCell-head": {
      color: "#263238",
      fontWeight: 700,
    },

    "&  .MuiTableCell-head .MuiButton-text .MuiButton-label": {
      fontWeight: 700,
    },

    "& .MuiToolbar-regular .MuiTypography-root.MuiTypography-h6": {
      opacity: 0.3,
      fontWeight: 700,
    },
  },

  container: {
    marginTop: "1rem",
    marginBottom: "3rem",
    alignItems: "flex-end",
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

  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    listStyle: "none",
    marginBottom: "1rem",
  },
}));

const ViewList = (props) => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState([]);
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);
  const [openNew, setOpenNew] = useState(false);
  const [allUserInfo, setAllUserInfo] = useState([]);
  const [id, setId] = useState("");

  // get data from db to display on the table
  useEffect(() => {
    let userInfo = [];
    let tableData = [];
    db.collection("contacts")
      .get()
      .then((res) => {
        res.forEach((action) => {
          userInfo.push({ ...action.data(), id: action.id });
        });
        console.log(userInfo);
        userInfo.forEach((val) => {
          let row = [
            "",
            `${val.firstName}`,
            `${val.lastName}`,
            `${val.telephone}`,
            `${val.email}`,
            `${val.id}`,
          ];
          tableData.push(row);
        });
        setUserInfo(tableData);
        setAllUserInfo(userInfo);
      });
  }, []);

  // delete functionality
  function deleteUserData(id) {
    db.collection("contacts")
      .doc(id)
      .delete()
      .then((res) => {
        console.log(id);
        alert("Contact record deleted", res);
      });
  }

  useEffect(() => {
    console.log(id);
  }, [id]);

  const columns = [
    {
      name: "S/N",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => {
          console.log(value);
          return <span>{tableMeta.rowIndex + 1}</span>;
        },
      },
    },
    "firstName",
    "lastName",
    "telephone",
    "email",
    {
      name: "Actions",
      options: {
        filter: false,
        customBodyRender: (id, tableMeta) => {
          console.log(id, tableMeta);
          return (
            <>
              <IconButton
                size="small"
                variant="contained"
                color="primary"
                onClick={() => handleClickOpen(id)}
                style={{ marginRight: "1rem" }}
              >
                <CreateIcon />
              </IconButton>
              <IconButton
                size="small"
                variant="contained"
                color="secondary"
                className={classes.redButton}
                onClick={() => deleteUserData(id)}
                style={{ marginRight: "1rem", color: "#FF0000" }}
              >
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    selectableRows: "none",
    selectableRowsHeader: false,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  const handleClickOpen = (id) => {
    // let userId = id
    console.log(id);
    setOpenNew(true);
    // console.log(userId)
    setId(id);
  };

  return (
    <>
      <Container className={classes.container}>
        <div className={classes.list}>
          <Link to="/saveContact" style={{color:'#fff', textDecoration:'none'}}>Save Contact</Link>
        </div>
        <ThemeProvider theme={createTheme()}>
          <MUIDataTable
            title={"Contact"}
            data={userInfo}
            columns={columns}
            options={options}
          />
          <Addcontact
            open={openNew}
            allUserInfo={allUserInfo}
            id={id}
            setId={setId}
            handleClickOpen={handleClickOpen}
          />
        </ThemeProvider>
      </Container>
    </>
  );
};

export default ViewList;
