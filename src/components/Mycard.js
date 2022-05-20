import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import dummy from "../images/deals.jpg";
import Grid from "@material-ui/core/Grid";
import dummy1 from "../images/gadgets.jpeg";
import dummy2 from "../images/clothing.jpg";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux'
import {fetchDataItem} from '../apicall/apiAction'





const useStyles = makeStyles(
    {
        root: {
            maxWidth: 340,


        },

    }
);


const Mycard = (props) =>{
    const {history, imagesData, fetchImageData} = props;
    useEffect(()=>{
        
        fetchImageData()
    
    }, [])
    /*const [images,setImages]= useState([]);
    useEffect(()=>{
        async function fetchData(){
        const res= await axios.get('https://run.mocky.io/v3/72c95083-6124-4a2e-9afd-384de42016a4')
        setImages(res.data);
        console.log(res.data);
    }
    fetchData();
    },[])*/
    /*const cardinfo=[
        {
            image: dummy,
            alt: "Today's Deal",
            heading: "Today's Deal",
            description: "Lets explore today's best deals. Upto 75% discount available on different payment methods.",
            // onClick: () => history.push('/todaydeal'),
            navigation: "todaydeal",
    
        },
    
        {
            image: dummy1,
            alt: "Electronics",
            heading: "Electronics",
            description: "Checkout new gadgets. Special deals for different models. Also checkout upcoming gadgets.",
            // onClick: () => history.push('/electronics'),
            navigation: "electronics",
        },
    
        {
            image: dummy2,
            alt: "New Arrivals",
            heading: "New Arrivals",
            description: "Explore latest fashion trends. More than 20000 latest fashion products. Hurry Up now !!!",
            // onClick: () => history.push('/newarrival'),
            navigation: "newarrival",
        },
    
    ];*/
    


    const classes = useStyles();
    return(
        <Container >
            <Grid container spacing={4}>
              {imagesData.map((item, index) => {
                  const {image, alt, heading, description, navigation} = item;
                  return( 
                    
                    <Grid item lg= {4}>
                  <Card >

                    <CardActionArea>
                        <CardMedia 
                        component="img"
                        alt={alt}
                        height="140"
                        image= {image}
                        title={alt}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {heading}
                            </Typography>
                            <Typography variant="body2" color="textSecondary"
                            component="p">
                                {description} 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => history.push(`/${navigation}`)}>
                            Explore
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
                
                );

              })}


            </Grid>
     
        </Container>
        
        
    );
};

const mapStateToProps = state => {
    return {
        imagesData: state.imageData
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchImageData: () => dispatch(fetchDataItem())
    }
}
export default withRouter(connect(mapStateToProps,
    mapDispatchToProps)(Mycard)); 
