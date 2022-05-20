import { Typography, Container, Card, CardActionArea, CardMedia, CardActions, CardContent, Grid } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import dummy from "../images/clothes.jpg";
import dummy1 from "../images/books.jpeg";
import dummy2 from "../images/dailyuse.jpg";
import axios from "axios";


const useStyles = makeStyles(
    {
     spacings: {
       marginTop: 100,
     },
    }
  );


const Shop = () => {
const[images,setImages]=useState([]);
useEffect(()=>{
  async function fetchData(){
    const res=await axios.get('https://run.mocky.io/v3/bc7ae256-73b6-4159-98fb-905f563bf021')
    setImages(res.data);
    console.log(res.data);
  }
  fetchData();
},[])
  /*const cardinfo = [
    {
      image: dummy,
      alt: "Clothes",
      heading: "Clothing",
      description: "Clothing section with various styles for summers and winters.",
    },

    {
      image: dummy1,
      alt: "Books",
      heading: "Books",
      description:"Books available for School, colleges and various entrance exam preparations.",
    },

    {
      image: dummy2,
      alt: "Daily Use",
      heading: "Daily Use",
      description: "All daily use items at one stop. From kitchen items to home appliances.",
    }
  ];*/

    const classes= useStyles();
    return (
           <div className={classes.spacings}>
            <Container>
            <Grid container spacing={3}>


              {images.map((item, index) => {
                const {image, alt, heading, description} = item;
                return(
                  <Grid item  lg={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" 
                alt={alt}
                height="140"
                image={image}
                title={alt}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h5">
                     {heading}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Button 1
                </Button>
                <Button>
                  Button 2
                </Button>
              </CardActions>
            </Card>
            </Grid>


                );
              })}
            
           

            </Grid>
            </Container>
             
          </div>
          );
}

export default Shop;