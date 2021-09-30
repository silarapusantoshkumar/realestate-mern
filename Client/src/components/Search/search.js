import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Autocomplete } from '@react-google-maps/api';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import zIndex from '@material-ui/core/styles/zIndex';
const Search = ()=>{

    // const [autocomplete, setAutocomplete] = useState(null)
    const dispatch = useDispatch();
    // const [coords, setCoords] = useState({});
    const result = useSelector(state=>state)
    // const onLoad = (autoC) =>{
    //     setAutocomplete(autoC);
        
    // }

    // const [location,setLocation]=useState()

    const handleChange = address => {
        dispatch({type:"location", payload:address}) 

      };
     
      const handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => dispatch({type:"coords", payload:latLng}))
          .catch(error => console.error('Error', error));
          dispatch({type:"location", payload:address}) 
      };
    //  console.log(result.location)

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    //       setCoords({ lat: latitude, lng: longitude });
    //     });
    //   }, []);
    // const onPlaceChanged = (e) => {
    //   const lat = autocomplete.getPlace().geometry.location.lat();
    //   const lng = autocomplete.getPlace().geometry.location.lng();
    //   setCoords({ lat, lng });
    //   dispatch({type:"location", payload:autocomplete.getPlace().formatted_address})                                                                                                                                                                                                                                                                
    // };
    const setData = ()=>{  
        
        dispatch({type:"coords", payload:result.coords})
    }
    // useEffect(()=>{
    //     const handleSelect = address => {
    //         geocodeByAddress(address)
    //           .then(results => getLatLng(results[0]))
    //           .then(latLng => dispatch({type:"coords", payload:latLng}))
    //           .catch(error => console.error('Error', error));
    //           dispatch({type:"location", payload:address}) 
    //       };
    // },[])
    return(
        <div class="filter-area mt-4 container">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link buy " data-toggle="pill" href="#pills-home-2">Buy</a>
            </li>
        {/* <li class="nav-item">
            <a class="nav-link rent border-0" data-toggle="pill" href="#pills-profile-2">Rent</a>
        </li> */}
    </ul>
    <div class="search-content" style={{position:'relative'}}>
    <div class="row ">
    
        <div class="col-lg-4">
     
        {/* <Autocomplete onLoad={onLoad}  value={location} onSelect={(e)=>console.log(e)}>
            <input type="text" class="form-control" placeholder="Search Location"  />
        </Autocomplete> */}
        <PlacesAutocomplete 
        value={result.location}
        onChange={(e)=>handleChange(e)}
        onSelect={(e)=>handleSelect(e)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) =>  
        (
          <div>
            <input 
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: "form-control",
              })}
            />
            <div className="autocomplete-dropdown-container" style={{position:"absolute",zIndex:"9999"}}>
              {/* {loading && <div>Loading...</div>} */}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer'}
                  : { backgroundColor: '#ffffff', cursor: 'pointer',width:"auto"};
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        </div>
        <div class="col-lg-8">
        <div class="row">
        <div class="col-lg-4 col-sm-6">
        <select class="form-control form-select">
        <option>Residental </option>
        </select>
        </div>
        <div class="col-lg-4 col-sm-6">
        <select class="form-control form-select">
        <option>Price(INR)</option>
        </select>
        </div>
        <div class="col-lg-4 col-sm-12">
        <Link to='/list'><button type="button" class="btn btn-primary btn-lg"  onClick={setData}>Search</button></Link>
        </div>
        </div>
        </div>
            </div>
         </div>
        </div>
    )
}

export default Search