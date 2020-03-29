import {TEXT} from './text';
import {config} from './config';
import {theme} from './theme.js';

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
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon ,
  Paper,
  FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Switch, Tooltip
} = MaterialUI;


const useStyles = makeStyles(theme => ({
  nested: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
    }
  },
  hideXs: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  drawerHeader: {
    marginRight: theme.spacing(12),
  },
}));


function handleClick(event) {
  switch(event) {
    case 'PREVIEW': console.log('show preview');
    break;
    default:
    console.log('open link', event);
    window.open(event, '_blank');
  }
}

export function LeftDrawer(props) {
  const classes = useStyles();
  const extens = Object.entries(config.similar_extensions);
  const {minimized} = props;

  return (
    <>
    <List>
      <ListItem button key={TEXT.PREVIEW} onClick={() => handleClick('PREVIEW')}>
        <ListItemIcon>
          <Tooltip title={TEXT.PREVIEW} placement="right" arrow>
            <Icon color="primary" className="fas fa-compress" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary={TEXT.PREVIEW} />
      </ListItem>
      <Divider />
      <ListItem button key={TEXT.REQUEST_SUPPORT} onClick={() => handleClick(config.store_support)}>
        <ListItemIcon>
          <Tooltip title={TEXT.REQUEST_SUPPORT} placement="right" arrow>
          <Icon color="primary" className="fas fa-question" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary={TEXT.REQUEST_SUPPORT} />
      </ListItem>
      <ListItem button key={TEXT.RATE_EXTENSION} onClick={() => handleClick(config.store_link)}>
        <ListItemIcon>
          <Tooltip title={TEXT.RATE_EXTENSION} placement="right" arrow>
            <Icon color="primary" className="fas fa-star" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary={TEXT.RATE_EXTENSION} />
      </ListItem>
      <Divider />
      <ListItem className={classes.hideXs} key={TEXT.SOCIAL_MEDIA}>
        <ListItemText primary={TEXT.SOCIAL_MEDIA} />
      </ListItem>
      <Divider className={classes.drawerHeader}/>
      <List className={classes.nested}>
        <ListItem button key={TEXT.FACEBOOK} onClick={() => handleClick(config.socials.facebook)}>
          <ListItemIcon>
            <Tooltip title={TEXT.FACEBOOK} placement="right" arrow>
              <Icon color="primary" className="fab fa-facebook" />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={TEXT.FACEBOOK} />
        </ListItem>
        <ListItem button key={TEXT.TWITTER} onClick={() => handleClick(config.socials.twitter)}>
          <ListItemIcon>
            <Tooltip title={TEXT.TWITTER} placement="right" arrow>
              <Icon color="primary" className="fab fa-twitter" />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={TEXT.TWITTER} />
        </ListItem>
        <ListItem button key={TEXT.WEBSITE} onClick={() => handleClick(config.socials.website)}>
          <ListItemIcon>
            <Tooltip title={TEXT.WEBSITE} placement="right" arrow>
              <Icon color="primary" className="fas fa-globe" />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={TEXT.WEBSITE} />
        </ListItem>
      </List>
      <Divider />
      <ListItem className={classes.hideXs} key={TEXT.SIMILAR_EXTENSION}>
        <ListItemText primary={TEXT.SIMILAR_EXTENSION} />
      </ListItem>
      <Divider className={classes.drawerHeader}/>
      <List className={classes.nested}>
      {extens.map(([name, link]) => (
        <ListItem button key={name} onClick={() => handleClick(link)}>
          <ListItemIcon>
            <Tooltip title={name} placement="right" arrow>
              <Icon color="primary" className="fa fa-external-link-alt" />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
      </List>
      <Divider />
    </List>
    </>
  );
}