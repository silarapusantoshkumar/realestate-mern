import React, { useState,useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const Maps = ({places,setChildClicked})=>{

    
    const dispatch = useDispatch();
    const result = useSelector(state=>state)
    const [isOpen, setOpen] = useState(-1);
    const [bounds,setBounds] = useState()
    const handleToggleOpen = (selected) => {
      setOpen(selected);
    }
    const handleToggleClose = () => {
      setOpen(-1);
    }
   useEffect(()=>{
    dispatch({type:"MAP",payload:bounds})
   },[bounds])

    return(
       
        <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyBQDw_AoPGLrFnsea6UeXmJUoNvWMis7eQ'}}
        defaultCenter={result.coords}
        center={result.coords}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{           
           setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne })
            // setCoords({lat:e.center.lat, lng:e.center.lng})
            dispatch({type:"coords",payload:{lat:e.center.lat, lng:e.center.lng}})
        }}   
       >   
                { places?.map((place, i) => {
                    
                    return(
                            
                            <div lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}
                            onClick={()=>setChildClicked(i)}
                            onMouseEnter={() => handleToggleOpen(i)}
                            onMouseLeave={()=>handleToggleClose()}
                            style={{cursor: "pointer"}}
                            >
                              
                            <div className="SuperAwesomePin">
                            <i className="fa fa-home" style={{fontSize:"30px",color:"#37517e"}}></i> 
                            </div> 
                                {
                                    (isOpen === i) && 
                                    <div style={{width: "18rem",backgroundColor:"#fff"}}>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img style={{width:"100px ",height:"100px"}} src={place.photo ? place.photo.images.small.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} /> 
                                            </div>
                                            <div className="col-lg-8">    
                                            <h5>{place.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                          
                                }
                            </div>
                            
                            
                     )}
                     
     
                    )}
                    
                    </GoogleMapReact>
                
        
    )
}

export default Maps