import { Button, Grid } from '@material-ui/core'
import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Schedule() {

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

  return (
    <Grid container xs = {12} md = {7} direction="row"  alignItems="flex-start" justifyContent="space-evenly">
        
    
      
        <Chip Button label="RC MWF 11:00" onClick={handleClick} color="primary" />
        <Chip Button label="RC MWF 16:00" onClick={handleClick} color="default" />
        <Chip Button label="RC MWF 17:00" onClick={handleClick} color="default" />
        <Chip Button label="Add Class" onClick={handleClick} color="default" />

      

      
    
    </Grid>
  )
}

export default Schedule