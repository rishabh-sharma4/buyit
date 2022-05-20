import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import {Grid, Card, CardContent} from "@material-ui/core";


const useStyles = makeStyles(
    {
     spacings: {
       marginTop: 100, 
     },
    }
  );

const Contact = () => {
    const classes= useStyles();
    return(
      
          
         <Grid className={classes.spacings} container justify ="center">
            <Card>
              <CardContent>
              <Typography paragraphy variant="h4" component="h4" style={{color:'red'}}>
              Contact Page
              </Typography>
              <Typography variant="body2" component="p">Email: buyit@gmail.com</Typography>
              </CardContent>
            </Card>
          </Grid>
         
        
    );
};

export default Contact;