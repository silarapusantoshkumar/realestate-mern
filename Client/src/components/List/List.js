import React ,{useEffect, useState, createRef}from 'react'
import { useLocation } from 'react-router';
import { getPlacesData } from '../Api/api'
import Maps from '../Map/Map'
import { useSelector } from 'react-redux';
import axios from 'axios';
import useStyles from './styles.js';
import {Grid} from "@material-ui/core"
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import Pager from './pager';
import Search from '../Search/search';

const List = ()=>{
    
    const result = useSelector(state=>state)
    const neLat = result?.map?.result?.ne?.lat
    const neLng = result?.map?.result?.ne?.lng
    const swLat = result?.map?.result?.sw?.lat
    const swLng = result?.map?.result?.sw?.lng
    const [places,setPlaces] = useState([])
    const [chidlClicked,setChildClicked] = useState("")
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();
    const [maxPostsPerAction] = useState(10)
    const [DefaultButton,setStateDefaultButton] = useState(1)
    const lastPostIndex = DefaultButton*maxPostsPerAction;
    const firstPostIndex = lastPostIndex-maxPostsPerAction;
    const Currentpage = places.slice(firstPostIndex,lastPostIndex);
    const TotalPosts = places.length;
    const ChangeButtonNumbers=(no)=>{
      setStateDefaultButton(no)
    }
    useEffect(() => {

      setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    useEffect(async() => {
    try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
        params: {
          bl_latitude: swLat,
          bl_longitude: swLng,
          tr_longitude: neLng,
          tr_latitude: neLat, 
        },
        headers: {
          'x-rapidapi-key': "0d27b51d7dmsh0a3544824e312d1p194578jsnbf7124990b4b",
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      });
      setPlaces(data)
    } catch (error) {
      console.log(error);
    }
    },[result.map, result.coords]);

    return(<>
          <div style={{marginTop:"5rem"}}>

          </div>
           <div style={{marginTop:"5rem"}}>    
          <Search />
              
               
            <Grid container spacing={3} style={{ width: '100%',marginTop:"50px" }}>
             
               
             
                    <Grid item xs={12} md={4}>
                    <Grid container spacing={3} className={classes.list}>
                        {
                            Currentpage?.map((place,i)=>{
                              if (Number(chidlClicked) === i) elRefs[i]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                          
                                return(<>
                                
                                      <Card elevation={6} key={i}  ref={elRefs[i]} >
                                            <CardMedia
                                              style={{ height: 350 }}
                                              image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                              title={place.name}
                                            />
                                            <CardContent>
                                              <Typography gutterBottom variant="h5">{place.name}</Typography>
                                              <Box display="flex" justifyContent="space-between" my={2}>
                                                <Rating name="read-only" value={Number(place.rating)} readOnly />
                                                <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                                              </Box>
                                              <Box display="flex" justifyContent="space-between">
                                                <Typography component="legend">Price</Typography>
                                                <Typography gutterBottom variant="subtitle1">
                                                  {place.price_level}
                                                </Typography>
                                              </Box>
                                              <Box display="flex" justifyContent="space-between">
                                                <Typography component="legend">Ranking</Typography>
                                              <Typography gutterBottom variant="subtitle1">
                                              {place.ranking}
                                            </Typography>
                                          </Box>
                                          {place?.awards?.map((award) => (
                                            <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                                              <img src={award.images.small} />
                                              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                                            </Box>
                                          ))}
                                          {place?.cuisine?.map(({ name }) => (
                                            <Chip key={name} size="small" label={name} className={classes.chip} />
                                          ))}
                                          {place.address && (
                                            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                                              <LocationOnIcon />{place.address}
                                            </Typography>
                                          )}
                                          {place.phone && (
                                            <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                                              <PhoneIcon /> {place.phone}
                                            </Typography>
                                          )}
                                        </CardContent>
                                        <CardActions>
                                          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                                            Trip Advisor
                                          </Button>
                                          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                                            Website
                                          </Button>
                                        </CardActions>
                                      </Card>
                                      <div class="row">
                                        <div class="col-sm-6 col-lg-12">
                                          <div class="card">
                                            <div class="card-body">
                                              <h5 class="card-title">Special title treatment</h5>
                                              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                              <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                          </div>
                                        </div>
                                        </div>  
                                
                                </>)
                            })
                        }
                        
                          <Pager MaxPostPerAction={maxPostsPerAction}
                              TotalPosts={TotalPosts}
                              ChangeButtonNumbers={(no)=>ChangeButtonNumbers(no)} />
                        </Grid>
                        
                        </Grid>
            
               
                            <Grid item xs={12} md={8} >
                            <Maps places={places} setChildClicked={setChildClicked}/>
                            </Grid>
                           
                            </Grid>
                            </div>      
    </>)
}
export default List