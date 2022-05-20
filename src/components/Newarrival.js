import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles(
    {
        spacings:{
            marginTop: 100,

        }
    }
);

const Newarrival = () => {
    const classes = useStyles();
    
    return(
        <div className={classes.spacings}>
            <Typography paragraph>This is New Arrival Products Page.</Typography>
        </div>
    );

}
export default Newarrival;