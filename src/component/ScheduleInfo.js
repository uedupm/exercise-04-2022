import React from 'react'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import Divider  from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import background from "../img/cardBg.jpg";
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      marginLeft: '1.5rem',
      marginRight: '1rem',
      maxHeight: '100%',
      borderRadius: 20,
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPositionY : '5%',
      align:'center',
      marginTop: '20px',
    },
    media: {
        paddingBottom: 60,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: blue[500],
    },
    avatar2: {
        backgroundColor: red[500],
      },
    txt: {
        marginTop: '.5rem',
        marginBottom: '.5rem',
        marginLeft: '.5rem'
    },    
    demo: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 20,
        align:'center'
    },
  }));
  


function ScheduleInfo() {    
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon color='primary'/>
          </IconButton>
        }
        subheader="TOEIC Speakin Test - Step 1"
        title="Teacher Logs"
        
        
      />
      
      <CardContent className={classes.media}>
        <div style={{justifyItems: "center"}}>
            <IconButton style={{fontSize: "2rem", padding: 0, color: "black", alignItems: "center"}}>
            <EventOutlinedIcon/> <Typography className={classes.txt}  paragraph>2021.08.23 - 2020.09.24</Typography>
            </IconButton>    
        </div>
        <div>
            <IconButton style={{fontSize: "2rem", padding: 0, color: "black", alignItems: "center"}}>
            <AccessTimeIcon /> <Typography className={classes.txt} paragraph>MWF 11:00 + 10</Typography>
            </IconButton>    
        </div>
        <div>
            <IconButton style={{fontSize: "2rem", padding: 0, color: "black", alignItems: "center"}}>
            <AutoStoriesOutlinedIcon/> <Typography className={classes.txt} paragraph>20 Lessons</Typography>
            </IconButton>    
        </div>


    
      </CardContent>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{padding: 0, color: "black", borderRadius: "20" }}>
        <div className={classes.demo}>
            <List >              
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar} aria-label="RC">
                        RC           
                    </Avatar>
                  </ListItemAvatar>                
                   <div>
                       <div>
                       <Typography align='center'>16:00 | </Typography>
                       <Typography style={{fontWeight: 'bold'}}>Ready</Typography>
                       <Divider/>
                       </div>                       
                    </div>   
                  <ListItemSecondaryAction>
                    <IconButton color='secondary' edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
                <ListItem button> 
                  <ListItemAvatar>
                    <Avatar className={classes.avatar2} aria-label="CC">
                        CC          
                    </Avatar>
                  </ListItemAvatar>
                  
                    <div>
                        <Typography>2 coupons available | </Typography>
                        <Typography style={{fontWeight: 'bold'}}>Redeem now!</Typography>
                        <Divider/>
                    </div>
                
                  <ListItemSecondaryAction>
                    <IconButton color='secondary' edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,              
            </List>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ScheduleInfo