import React, { useState } from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles= makeStyles(
    {
        spacing: {
            marginTop: 100,
        }
    }
);



const Feedback = () => {
    const [myname, setMyName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [processdata,setprocessdata] = useState("");
  // const [alldata, setAlldata] = useState("");
    
    const onSubmits = (e)=>{
        e.preventDefault();
        setprocessdata([myname,email,description]);
        //setAlldata([myname,email,description]);
    };

    const onResets = (e) => {
        e.preventDefault();
        setprocessdata(["","",""]);
        //setAlldata(["","",""]);
        setMyName("");
        setEmail("");
        setDescription("");

    };

    

    const inputName = (e) => {
        setMyName(e.target.value);
        setprocessdata(["","",""]);
        
    };

    const inputEmail = (e) => {
        setEmail(e.target.value);
        setprocessdata(["","",""]);
    };

    const inputDescription = (e) => {
        setDescription(e.target.value);
        setprocessdata(["","",""]);
    };

    const classes= useStyles();
    return(
        <div className={classes.spacing}>
            <form onSubmit={onSubmits} onReset={onResets}>
                <TextField label="Name" variant="outlined" 
                onChange={inputName}
                value={myname}
                />
                <br/><br/>
                <TextField label="Email" variant="outlined"
                onChange={inputEmail}
                value={email}
                />
                <br/><br/>
                <TextField label="Description" variant="outlined"
                onChange={inputDescription}
                value={description}
                multiline/><br/><br/>
                <input variant="contained" type="submit"></input>
                <input variant="contained" type="reset"></input>
                <p>{processdata[0]}<br/>
                   {processdata[1]}<br/>
                   {processdata[2]}<br/>
                </p>
                
            </form>
            

        </div>
    );
}

export default Feedback;