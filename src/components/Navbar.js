import React from "react";
import clsx from 'clsx';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FeedbackIcon from '@material-ui/icons/Feedback';
import HomeIcon from '@material-ui/icons/Home';
import { ListItemIcon } from "@material-ui/core";
import { withRouter } from "react-router-dom";





const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 260,
        marginLeft: 30,
         
    },

    roots:{
        display: 'flex',
    },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

    },

    appBarShift: {
        width: `calc(100% -${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'],{
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),

    },

    titleShift: {
        marginLeft: 200,
        
    },


    hide: {
        display: 'none',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },

    drawerPaper: {
        width: drawerWidth,
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 0),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,

        
    },

    contentShift: {
        transition: theme.transitions.create('margin',{
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

})
);

const Navbar = props => {
const { history } = props;
  
const classes = useStyles();
const theme = useTheme();

const [open, setOpen] = React.useState(false);
const itemList = [
    {text: 'Home',
     icon: <HomeIcon/>,
     onClick: () => history.push('/')
    },
    {text:'Shop',
     icon: <ShoppingCartIcon/>,
     onClick: () => history.push('/shop')
     
     }, 
    {text:'Contact Us',
     icon: <ContactMailIcon/>,
     onClick: () => history.push('/contact')
     }, 
    {text:'Feedback',
     icon: <FeedbackIcon/>,
     onClick: () => history.push('/feedback')
     }
];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        < div className={classes.roots}>
          
        <AppBar position="fixed"
         className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
        })}
        >
            <Toolbar>
                <IconButton edge="start" color="inherit"  onClick={handleDrawerOpen} className={clsx( open && classes.hide)}>
                <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={clsx(classes.root,{[classes.titleShift]:open,})}>
                    BUY IT</Typography>
                <Grid container direction="row" justify="flex-end" alignItems="center" >
                <Button color="inherit">Login</Button>
                </Grid>       
            </Toolbar>
        </AppBar>

        <Drawer variant="persistent" anchor="left"
        className={classes.drawer}
        open={open}
        classes={{paper: classes.drawerPaper,}}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
            </div>
        <Divider/>
        <List>
            {itemList.map((item, index) => {
             const { text, icon, onClick } = item;
             return(<ListItem button key={text} onClick={onClick}>
                 {icon && <ListItemIcon>{icon}</ListItemIcon>}
                 <ListItemText primary={text}/>
             </ListItem>
                );
                })}
        </List>

        </Drawer>
        <main className={clsx(classes.content,{
            [classes.contentShift]: open,
        })}
        >
            
            </main>
        </ div>

        
    );

};

export default withRouter(Navbar);