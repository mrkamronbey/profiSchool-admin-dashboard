import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logotip from '../../img/logotip.jpg'
/* ==================================== */
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
/* ==================================== */
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ListAltIcon from '@mui/icons-material/ListAlt';


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
/* ================Main================== */
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);
/* ================================= */
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }))
/* ===============DrawerHeader================== */
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
/* ===============Search================== */

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  /* ================SearchIconWrapper==================== */
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  /* =================StyledInputBase=================== */
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
/* ==================================== */


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const Header = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  /* ==================================== */
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <MailIcon />
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
        <IconButton
           size="large"
           aria-label="show 17 new notifications"
           color="inherit"
        >
            <i class='bx bxs-megaphone'></i>
        </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <Link className='added' to='/added'>
              <Button font-size="16px" className='btn' variant="contained" color="error" size="small">
                  <span className='spans'>+</span> Добавить ученика
              </Button>
            </Link>
        </MenuItem>
      </Menu>
    );
/* ==================================== */
    return (
        <>
        <header>
           <div className="container">
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon className='iconss' />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon className='icons' />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Поиск"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <MailIcon  className='iconss'/>
                        </IconButton>
                        <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        >
                            <i class='bx bxs-megaphone iconss'></i>
                        </IconButton>
                        <IconButton
                         size="large"
                         aria-label="show 17 new notifications"
                         color="inherit"
                         >
                        <HelpIcon className='iconss'/>
                        </IconButton>
                            <Link className='added' to='/added'>
                              <Button font-size="16px" className='btn' variant="contained" color="error" size="small">
                                  <span className='spans'>+</span> Добавить ученика
                              </Button>
                            </Link>
                            <Link  className='addeds1' to='/added1'>
                              <Button style={{display: "none", padding: '20px 0'}} font-size="16px" className='btn1' variant="contained" color="error" size="small">
                                  <span className='spans'>+</span> Добавить сотрудника
                              </Button>
                            </Link>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                        <MoreIcon />
                        </IconButton>
                    </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                </Box>
           </div>
        </header>
                        <Box
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                          >
                    <Drawer
                        sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader>
                          <img src={logotip} width='200' height='70' alt="" />
                            <IconButton className='close-btn' onClick={handleDrawerClose}>
                              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <br />
                       
                        <Tabs
                          orientation="vertical"
                          variant="scrollable"
                          value={value}
                          onChange={handleChange}
                          aria-label="Vertical tabs example"
                          sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                          {/* <Link className='links' to='/'> */}
                          <Tab  label="Главная" icon={<HomeIcon />} iconPosition="start" {...a11yProps(0)} />
                          {/* </Link> */}
                          
                          <Link className='links' to='/group'>
                              <Tab  label="Ученики" icon={<GroupsIcon />} iconPosition="start" {...a11yProps(1)} />
                          </Link>
                         <Link  className='links' to='stuff'>
                            <Tab label="Сотрудники" onClick={() =>(
                              document.querySelector('.btn').style.display = 'none',
                              document.querySelector('.btn1').style.display = 'block'
                            )} icon={<PeopleIcon />} iconPosition="start" {...a11yProps(2)} />
                         </Link>
                         <Link className='links' to='/jurnal'>
                            <Tab label="Классный журнал" icon={<PlayLessonIcon />} iconPosition="start" {...a11yProps(3)} />
                         </Link>
                          <Link  className='links' to='/pilans'>
                          <Tab label="Тематический план" icon={<MailIcon />} iconPosition="start" {...a11yProps(4)} />
                          </Link>
                          <Link className='links' to='/pilans1'>
                            <Tab label="Учебный план" icon={<FactCheckIcon />} iconPosition="start" {...a11yProps(5)} />
                          </Link>
                          <Tab label="Расписание" icon={<DateRangeIcon />} iconPosition="start" {...a11yProps(6)} />
                          <Link className='links' to='/role'>
                            <Tab label="Управление ролями" icon={<AssignmentIndIcon />} iconPosition="start" {...a11yProps(7)} />
                          </Link>
                          <Tab label="Составление счета" icon={<CreditCardIcon />} iconPosition="start" {...a11yProps(8)} />
                          <Tab label="Список" icon={<ListAltIcon />} iconPosition="start" {...a11yProps(9)} />

                        </Tabs>
                       </Drawer>
                  </Box>
      </>
    );
}

export default Header;
