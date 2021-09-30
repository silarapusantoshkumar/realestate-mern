import React, { useState, useEffect } from 'react'
import "../AddProperty/styles.css"
import { toast} from "react-toastify"
const AddProperty = (props) => {
    const [url,setUrl] = useState("")
    const [property,setProperty] = useState({
        pTitle:'',
        pDescription:'',
        status:'',
        type:'',
        rooms:'',
        price:'',
        sqft:'',
        image:'',
        address:'',
        city:'',
        State:'',
        country:'',
        gLat:'',
        gLng:'',
        sAge:'',
        sRooms:'',
        sBathrooms:'',
        name:'',
        uName:'',
        email:'',
        phone:'',
        Status:'',
        sType:'',
        airCondition:'',
        CentralHeating:'',
        SwimmingPool:'',
        LaundryRoom:'',
        WindowCovering:'',
        Refrigerator:'',
        Alarm:'',
        Gym:'',
        MicroWave:''
    })
   const { pTitle,pDescription,status,type,rooms,price,sqft,image,address,city,State,country,gLat,gLng,sAge,sRooms,sBathrooms,name,uName,email,phone,airCondition,
   CentralHeating,SwimmingPool,LaundryRoom,WindowCovering,Refrigerator,Alarm,Gym,MicroWave} = property
   const postData = ()=>{
    fetch("http://localhost:5000/createpost",{
                        method:"post",
                        headers:{
                            "Content-Type":"application/json"
                            
                        },
                        body:JSON.stringify({
                    PropertyTitle:pTitle,
                    PropertyDescription:pDescription,
                    PropertyStatus:status,
                    Propertytype:type,
                    Propertyrooms:rooms,
                    PropertyINR:price,
                    Propertysqft:sqft,
                    Propertyimage:url,
                    Propertyaddress:address,
                    Propertycity:city,
                    PropertyState:State,
                    Propertycountry:country,
                    PropertygLat:gLat,
                    PropertygLng:gLng,
                    PropertysAge:sAge,
                    PropertysRooms:sRooms,
                    PropertysBathrooms:sBathrooms,
                    Propertyname:name,
                    PropertyuName:uName,
                    Propertyemail:email,
                    Propertyphone:phone,
                    PropertyairCondition:airCondition,
                    PropertyCentralHeating:CentralHeating,
                    PropertySwimmingPool:SwimmingPool,
                    PropertyLaundryRoom:LaundryRoom,
                    PropertyWindowCovering:WindowCovering,
                    PropertyRefrigerator:Refrigerator,
                    PropertyAlarm:Alarm,
                    PropertyGym:Gym,
                    PropertyMicroWave:MicroWave
                        })
                    }).then(res=>res.json())
                    .then(data=>{
                        if(data.error){
                            toast.error(data.error)
                            // M.toast({html: data.error, classes:"#c62828 red darken-3"})
                        }else{
                            // M.toast({html:"Created post", classes:"#2e7d32 green darken-3"})
                            toast.success(data.message)
                            props.history.push('/admin/myproperties')
                        }
                    }).catch((err)=>{console.log(err)})
   }

    const formHandling = (e)=>{
        setProperty({...property,[e.target.name]:e.target.value})
    }
    const checkboxHandling = (e)=>{ 
        if(e.target.checked === true){
            setProperty({...property,[e.target.name]:e.target.value})
        }
    }
    const imageHandling = (e) =>{
        setProperty({...property,[e.target.name]:e.target.files[0]})
    }


useEffect(()=>{
         const data = new FormData();
        data.append("file",image);
        data.append("upload_preset","Test_post");
        data.append("cloud_name","dipak1243");
        fetch("https://api.cloudinary.com/v1_1/dipak1243/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        }).catch((err)=>{console.log(err)})
},[image])
    // const PostData = ()=>{
    //     const data = new FormData();
    //     data.append("file",state.image);
    //     data.append("upload_preset","Test_post");
    //     data.append("cloud_name","dipak1243");
    //     fetch("https://api.cloudinary.com/v1_1/dipak1243/image/upload",{
    //         method:"post",
    //         body:data
    //     }).then(res=>res.json())
    //     .then(data=>{
    //         setUrl(data.url)
    //     }).catch((err)=>{console.log(err)})
    // }

    return (<>
        <div className="addproperty">
            <div className="property">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 >Property Description And Price</h3>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Property Title</label>
                            <input type="text" name="pTitle"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your property title" onChange={formHandling.bind(this)}/>
                        </div>

                        <div class="form-group ">
                            <label for="exampleFormControlTextarea1">Property Description</label>
                            <textarea class="form-control" name="pDescription" id="exampleFormControlTextarea1" rows="6" placeholder="Describe about your property" onKeyUp={formHandling.bind(this)}></textarea>
                        </div>

                        <div class="form-group">
                            <div className='row'>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={formHandling.bind(this)} name="status">
                                        <option disabled selected>Select Status</option>
                                        <option >Rent</option>
                                        <option >Sale</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={formHandling.bind(this)} name="type">
                                        <option disabled selected>Type</option>
                                        <option >House</option>
                                        <option >Commercial</option>
                                        <option >Apartment</option>
                                        <option >Lot</option>
                                        <option >Garage</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={formHandling.bind(this)} name="rooms">
                                        <option disabled selected>Rooms</option>
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Price</label>
                                    <input type="text"  class="form-control" name="price" value={price} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="INR" onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Area</label>
                                    <input type="text" class="form-control" name="sqft" value={sqft} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sq.ft" onChange={formHandling.bind(this)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="property">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 >Property Media</h3>
                        <div class="property-form-group">
                            <div class="row">
                                <div class="col-md-12">
                                    <form class="dropzone dz-clickable">
                                        <div class="dz-default dz-message"><span>
                                            <i class="fa fa-cloud-upload"></i> Click here or drop files to upload</span>
                                            <input type="file" class="choose_file" name="image" placeholder="choose file" onChange={imageHandling.bind(this)}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="property">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 >Property Location</h3>
                        <div class="form-group">
                            <div className='row'>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Address</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Address" name="address" value={address} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">City</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your City" name="city" value={city} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">State</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your State" name="State" value={State} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Country</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Country" name="country" value={country} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Google Maps Latitude</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Google Maps latitude" name="gLat" value={gLat} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Google Maps Longitude</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Google Maps longitude" name="gLng" value={gLng} onChange={formHandling.bind(this)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="property">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 >Extra Information</h3>
                        <div class="form-group">
                            <div className='row'>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" name="sAge" onChange={formHandling.bind(this)}>
                                        <option disabled selected>Select Age</option>
                                        <option>0-20 Years</option>
                                        <option>20-50 Years</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" name="sRooms" onChange={formHandling.bind(this)}>
                                        <option disabled selected>Select Rooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" name="sBathrooms" onChange={formHandling.bind(this)}>
                                        <option disabled selected>Select Bathrooms</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="property">
                <h3 class="media" >Property Features</h3>
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="airCondition" class="form-check-input" id="exampleCheck1" value="Air Conditioning" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Air Conditioning</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="CentralHeating" class="form-check-input" id="exampleCheck1" value="Central Heating" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Central Heating</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="SwimmingPool" class="form-check-input" id="exampleCheck1" value="Swimming Pool" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Swimming Pool</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="LaundryRoom" class="form-check-input" id="exampleCheck1" value="Laundry Room" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Laundry Room</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="WindowCovering" class="form-check-input" id="exampleCheck1" value="Window Covering" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Window Covering</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="Refrigerator" class="form-check-input" id="exampleCheck1" value="Refrigerator" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Refrigerator</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="Alarm" class="form-check-input" id="exampleCheck1" value="Alarm" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Alarm</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="Gym" class="form-check-input" id="exampleCheck1" value="Gym" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Gym</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="MicroWave" class="form-check-input" id="exampleCheck1" value="MicroWave" onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Micro Wave</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="property">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 >Contact Information</h3>
                        <div class="form-group">
                            <div className='row'>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" name="name" value={name} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Username" name="uName" value={uName} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" value={email} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Phone</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile number" name="phone" value={phone} onChange={formHandling.bind(this)}/>
                                </div>
                                <button class="btn btn-dark btn-md mt-3" type="submit" onClick={()=>postData()}>Submit Property</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </>)
}
export default AddProperty