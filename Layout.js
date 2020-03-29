import {TEXT, setLang, getLang} from './text';
import {Controls} from './Controls';
import {LeftDrawer} from './LeftDrawer';
import {theme} from './theme';
import {config, locales} from './config';

const {
  makeStyles,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem, Button, Menu, Icon, Tooltip
} = MaterialUI;

const drawerWidth = 320;
const minDrawerWidth = 54;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    whiteSpace: 'nowrap',
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: minDrawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  toolbarHead: {
    dsiplay: 'flex',
    justifyContent: 'space-between'
  },
  lang: {
      display: 'flex',
  },
  langSelect: {
    marginLeft: theme.spacing(3),
    color: theme.palette.primary.contrastText
  },
  drawerPaper: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      width: minDrawerWidth,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  },
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  rootActive: {
    display: "flex",
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      'display': 'none'
    }
  },
}));


export function Layout() {
  const classes = useStyles();
  const [locale, setLocale] = React.useState(getLang());
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (val) => {
    setLocale(val)
    setLang(val);
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarHead}>
          <Typography variant="h6" noWrap>
            {config.name}
          </Typography>
          <Tooltip title={TEXT.CHOOSE_LANGUAGE} placement="bottom">
            <Button className={classes.langSelect} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} startIcon={<Icon className="fas fa-language" />} endIcon={<Icon className="fas fa-angle-down" />}>{locales[locale]}</Button>
          </Tooltip>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => handleClose(locale)}>
            {Object.entries(locales).map(([loc, lang]) => <MenuItem key={loc} onClick={() => handleClose(loc)}>{lang}</MenuItem>)}
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
        <div className={classes.toolbar} />
        <LeftDrawer minimized={!open} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Controls />
      </main>
    </div>
  );
}
