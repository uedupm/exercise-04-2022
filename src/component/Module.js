import React from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles, styled } from '@material-ui/core/styles';
import DialogContent from '@mui/material/DialogContent';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import DialogTitle from '@mui/material/DialogTitle';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@mui/material/IconButton';
import moduleimg from '../img/module_preview1.png'
import CloseIcon from '@mui/icons-material/Close';
import diaimg from '../img/module_preview.png'
import TabContext from '@mui/lab/TabContext';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Dialog from '@mui/material/Dialog';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@material-ui/core';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import './module.css'

function Module() {

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        imgDiag:{
            height: '500px',
            width: '100%',
            borderRadius: 30,            
        }
      });

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function createData(unit, content) {
        return { unit, content };
    }

    const rows = [
        createData('1', 'Talking About Oneself'),
        createData('2', 'Things at School',),
        createData('3', 'Parts of the Body'),
        createData('4', 'Holidays and Events and Ordinal Numbers'),
        createData('5', 'Holidays and Events and Ordinal Numbers 2'),
        createData('6', 'Holidays and Events and Ordinal Numbers 3'),
        createData('7', 'My Family'),
    ];
    const classes = useStyles();


  ///////////////////////FOR//DIALOG-BOX////////////////////
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

/////////////////////////////////////////////////////////
  
    return (        
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box >
              <TabList  onChange={handleChange} aria-label="modules-tab" value="1">
                <Tab label="Preview" value="1" />
                <Tab label="Study" value="2" />
                <Tab label="Review" value="3" />
                <Tab label="Write" value="4" />
              </TabList>
            </Box>

            {/* THIS IS FOR THE PREVIEW TAB */}
            <TabPanel  value="1">
                <div >
                    <Grid xs = {12}>
                    <img onClick={handleClickOpen} className={classes.imgDiag} src={moduleimg}  />
                    <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                    fullScreen={true}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>          
                    </BootstrapDialogTitle>
                    <DialogContent>
                    <img  src={diaimg}  width={'100%'}/>
                    </DialogContent>                    
                    </BootstrapDialog>
                    </Grid>
                </div>
            {/* THIS IS FOR THE Study TAB */}
            </TabPanel>
                <TabPanel value="2">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Unit</TableCell>
                            <TableCell align="center">Content</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.unit}>
                            <TableCell component="th" scope="row">
                                {row.unit}
                            </TableCell>
                            <TableCell  align="center">{row.content}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="3">Review</TabPanel>
            <TabPanel value="4">Write</TabPanel>
          </TabContext>
        </Box>
      );
  
}

export default Module