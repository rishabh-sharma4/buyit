import React from "react";
import '../App.css';
import Mycard from "./Mycard";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(
  {
   spacings: {
     marginTop: 100,
   },
  }
);

function Home() {

  const classes = useStyles();
    return(
        <div className={classes.spacings}>
          <Mycard/>
        </div>
    );
}
export default Home;