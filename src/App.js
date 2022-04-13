import { createTheme, ThemeProvider, Button} from '@material-ui/core/styles'
import ScheduleInfo from './component/ScheduleInfo';
import Schedule from './component/Schedule';
import Profile from './component/Profile';
import { Grid } from '@material-ui/core';
import Module from './component/Module';
import Menu from './component/Menu';
import './App.css';



function App() {
  
  return (

    <ThemeProvider>
      <Grid container spacing = {2} direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={3}>
          <Profile/>
        </Grid>

        <Grid item xs={9} alignItems="flex-end" direction="row">
          <Menu/>
        </Grid>

        <Grid item xs={12}>
          <Schedule />
        </Grid>

        <Grid item xs = {12} md={3}>
         <ScheduleInfo/>
        </Grid>

        <Grid item xs = {12} md={9}>
          <Module/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
