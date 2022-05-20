import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(
    {
        spacing: {
            marginTop: 100,
        }
    }
);

const Todaydeal = () => {
 const classes = useStyles();

 return(
    <div className={classes.spacing}>
        <Typography paragraph>This is Today's deal page.</Typography>
    </div>
 );

}
export default  Todaydeal;