import React from "react";
import './App.css';
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import {Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {makeStyles} from "@material-ui/core/styles";
import Todaydeal from "./components/Todaydeal";
import Electronics from "./components/Electronics";
import Newarrival from "./components/Newarrival";


const useStyles = makeStyles({

  container:{
    display: "flex",
  }

});

function App() {
  const classes = useStyles();
  return (
    
    <div className={classes.container}>
      
      <Navbar />
      
      <Switch>
      
        <Route exact from="/" render={props => <Home {...props}/> }/>
        <Route exact path="/shop" render={props => <Shop {...props}/>}/>
        <Route exact path="/contact" render={props => <Contact {...props}/>}/>
        <Route exact path="/feedback" render={props => <Feedback {...props}/>}/>   
        <Route exact path="/todaydeal" render={props => <Todaydeal {...props}/>}/>   
        <Route exact path="/electronics" render={props => <Electronics {...props}/>}/>
        <Route exact path="/newarrival" render={props => <Newarrival {...props}/>}/>
      </Switch>
     
      
    </div>
  
    
  );
}

export default App;
