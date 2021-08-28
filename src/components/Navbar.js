import React from 'react';
import Logo from '../images/logol.png'
import './Navbar.css'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ReservasiIcon from '@material-ui/icons/Assignment';
import PesananIcon from '@material-ui/icons/ShoppingCart';
import KaryawanIcon from '@material-ui/icons/SupervisorAccount';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

import { Link } from 'react-router-dom';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    // const [auth,] = React.useState(true);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);

    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <span>
                        <img src={Logo} alt="" width='50px' height='50px' />
                    </span>
                    <Typography variant="h6" noWrap className='nama'>
                        D'Original Resto & Café
                    </Typography>
                    {/* {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )} */}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem>
                            <Link to='/' className='liIcon'>
                                <ListItemIcon>
                                    <HomeIcon className='liIcon' />
                                </ListItemIcon>
                                <ListItemText primary='Beranda' className='liIconText' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to='/menu' className='liIcon'>
                                <ListItemIcon>
                                    <RestaurantMenuIcon className='liIcon' />
                                </ListItemIcon>
                                <ListItemText primary='Menu' className='liIcon' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to='/pesanan' className='liIcon'>
                                <ListItemIcon>
                                    <PesananIcon className='liIcon' />
                                </ListItemIcon>
                                <ListItemText primary='Pesanan' className='liIcon' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to='/reservasi' className='liIcon'>
                                <ListItemIcon>
                                    <ReservasiIcon className='liIcon' />
                                </ListItemIcon>
                                <ListItemText primary='Reservasi' className='liIcon' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to='/karyawan' className='liIcon'>
                                <ListItemIcon>
                                    <KaryawanIcon className='liIcon' />
                                </ListItemIcon>
                                <ListItemText primary='Karyawan' className='liIcon' />
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
            </main>
        </div>
    );
}