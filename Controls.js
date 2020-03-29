const {
  createStyles,
  Theme,
  makeStyles,
  Drawer,
  AppBar,
  Tabs,
  Tab,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  Icon ,
  Paper,
  FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Switch,
  Slider, Grid, Input, Select, MenuItem, TextField,
} = MaterialUI;
import {theme} from './theme.js';
import {TEXT} from './text';
import {displayControls, slideshowControls} from './config';
import {Control} from './Control';
import {setProp, getProp} from './service';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: "flex",
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: theme.spacing(3)
  },
  input: {
    width: '42px'
  },
  select: {
    minWidth: '60px'
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    minWidth: '150px'
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
    <Box component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other} p={3}>
    {children}
    </Box>
    </>
  );
}

export function Controls() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const defaultState = {active: true};
  [...displayControls, ...slideshowControls].forEach((c) => defaultState[c.name] = getProp(c.name));
  const [state, setState] = React.useState(defaultState);

  const handleState = (name, value) => {
    setProp(name, value);
    setState({ ...state, [name]: value });
  };

  const handleOnState = (event, value) => {
    handleState(event.target.name, value)
  };
  return (
    <div className={classes.controls}>
    <AppBar position="static" color="primary">
      <Box m={2} justifyContent="space-between" display='flex'>
        <Typography variant="h6" noWrap>{`${TEXT.SCREENSAVER_IS}: ${state.active ? TEXT.ON : TEXT.OFF}`}</Typography>
        <Switch checked={state.active} onChange={handleOnState} name="active" />
      </Box>
        <Tabs
          value={value}
          onChange={handleTabChange}
          color="default"
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label=""
        >
          <Tab label={TEXT.SLIDE_SHOW_CONTROLS} {...a11yProps(0)} />
          <Tab label={TEXT.DISPLAY_CONTROLS} {...a11yProps(1)} />
        </Tabs>
        
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <List className={classes.root}>
          {slideshowControls.map((control) => (
            <div key={control.name}>
              <ListItem className={classes.list}>
                <ListItemText className={classes.header} id={`list-text-{control.state}`} primary={TEXT[control.header]} secondary={TEXT[control.subheader]}/>
                <Control stateObject={state} required={control.required} type={control.type} state={state[control.name]} name={control.name} header={control.header} options={control.options} handleState={handleState} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <List className={classes.root}>
          {displayControls.map((control) => (
            <div  key={control.name}>
              <ListItem className={classes.list}>
                <ListItemText className={classes.header} id={`list-text-{control.state}`} primary={TEXT[control.header]} secondary={TEXT[control.subheader]}/>
                <Control stateObject={state} required={control.required} type={control.type} state={state[control.name]} name={control.name} header={TEXT[control.header]} options={control.options} handleState={handleState} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </TabPanel>
    </div>
  );
}