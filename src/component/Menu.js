import React from 'react'
import './menu.css'
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';



function Menus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
  <div className='menu'>
    <div >
    <div>
        Today
      <IconButton aria-label="date" style={{padding: 0, marginLeft: '1rem'}}>
        <DateRangeOutlinedIcon style={{fontSize: "2rem", padding: 0, color: "black"}}/>
      </IconButton>
        <IconButton 
          aria-label="settings" 
          aria-controls="my-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{padding: 0}}>
          <MoreVertIcon style={{fontSize: "2rem",padding: 0, color: "black"}}/>
        </IconButton>
        <Menu 
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>CURRICULUM</MenuItem>
          <MenuItem onClick={handleClose}>LEVEL TEST</MenuItem>
          <MenuItem onClick={handleClose}>OFFERS</MenuItem>
          <MenuItem onClick={handleClose}>PROFILE</MenuItem>
          <MenuItem style={{color: "orange"}} onClick={handleClose}>LOG OUT</MenuItem>
        </Menu>
      </div>       
    </div>    
  </div>
  )
}

export default Menus