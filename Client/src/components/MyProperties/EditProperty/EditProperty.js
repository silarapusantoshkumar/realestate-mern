import React, {useState, useEffect} from "react";
import { toast} from "react-toastify"
import Axios from 'axios'
const EditProperty = (props)=>{
    const [url,setUrl] = useState("")

    const [property,setProperty] = useState([])
   const { PropertyTitle,PropertyDescription,PropertyStatus,Propertytype,Propertyrooms,PropertyINR,Propertysqft,Propertyimage,Propertyaddress,Propertycity,PropertyState,Propertycountry,
    PropertygLat,PropertygLng,PropertysAge,PropertysRooms,PropertysBathrooms,Propertyname,PropertyuName,Propertyemail,Propertyphone,
    PropertyairCondition,PropertyCentralHeating,PropertySwimmingPool,PropertyLaundryRoom,PropertyWindowCovering,PropertyRefrigerator,PropertyAlarm,PropertyGym,PropertyMicroWave} = property

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
   data.append("file",Propertyimage);
   data.append("upload_preset","Test_post");
   data.append("cloud_name","dipak1243");
   fetch("https://api.cloudinary.com/v1_1/dipak1243/image/upload",{
       method:"post",
       body:data
   }).then(res=>res.json())
   .then(data=>{
       setUrl(data.url)
   }).catch((err)=>{console.log(err)})
},[Propertyimage])

useEffect(()=>{
    fetch(`http://localhost:5000/updatepost/${props.match.params.idname}`,{
        method:"get",
        headers:{
            "Authorization":"Bearer "+localStorage.getItem('jwt')
        }
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
            props.history.push('/signin')
            
        }else{
            // setResult(data.myposts)
           
            setProperty(data)

        }
    })
},[])

const updateData = ()=>{
    const url = `http://localhost:5000/updatepost/${props.match.params.idname}`
    Axios.put(url,property).then(()=>{props.history.push('/admin/myproperties')})                    
}
    return(<>
        <div className="addproperty">
            <div className="property">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 >Property Description And Price</h3>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Property Title</label>
                            <input type="text" name="PropertyTitle" value={PropertyTitle} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your property title" onChange={formHandling.bind(this)}/>
                        </div>

                        <div class="form-group ">
                            <label for="exampleFormControlTextarea1">Property Description</label>
                            <textarea class="form-control" name="PropertyDescription" value={PropertyDescription}  id="exampleFormControlTextarea1" rows="6" placeholder="Describe about your property" onChange={formHandling.bind(this)}></textarea>
                        </div>

                        <div class="form-group">
                            <div className='row'>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={formHandling.bind(this)} name="PropertyStatus" value={PropertyStatus}>
                                        <option disabled selected>Select Status</option>
                                        <option >Rent</option>
                                        <option >Sale</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={formHandling.bind(this)} name="Propertytype" value={Propertytype}>
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
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={formHandling.bind(this)} name="Propertyrooms" value={Propertyrooms}>
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
                                    <input type="text"  class="form-control" name="PropertyINR" value={PropertyINR} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="INR" onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Area</label>
                                    <input type="text" class="form-control" name="Propertysqft" value={Propertysqft} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sq.ft" onChange={formHandling.bind(this)}/>
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
                                            <input type="file" class="choose_file" name="Propertyimage" placeholder="choose file" onChange={imageHandling.bind(this)} />
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
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Address" name="Propertyaddress" value={Propertyaddress} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">City</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your City" name="Propertycity" value={Propertycity} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">State</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your State" name="PropertyState" value={PropertyState} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Country</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Country" name="Propertycountry" value={Propertycountry} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Google Maps Latitude</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Google Maps latitude" name="PropertygLat" value={PropertygLat} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Google Maps Longitude</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Google Maps longitude" name="PropertygLng" value={PropertygLng} onChange={formHandling.bind(this)}/>
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
                                    <select class="form-control" id="exampleFormControlSelect1" name="PropertysAge" onChange={formHandling.bind(this)} value={PropertysAge}>
                                        <option disabled selected>Select Age</option>
                                        <option>0-20 Years</option>
                                        <option>20-50 Years</option>
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                    <label for="exampleFormControlSelect1"></label>
                                    <select class="form-control" id="exampleFormControlSelect1" name="PropertysRooms" onChange={formHandling.bind(this)} value={PropertysRooms} >
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
                                    <select class="form-control" id="exampleFormControlSelect1" name="PropertysBathrooms" onChange={formHandling.bind(this)} value={PropertysBathrooms}>
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
                                <input type="checkbox" name="PropertyairCondition" class="form-check-input" id="exampleCheck1" value={PropertyairCondition} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Air Conditioning</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertyCentralHeating" class="form-check-input" id="exampleCheck1" value={PropertyCentralHeating} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Central Heating</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertySwimmingPool" class="form-check-input" id="exampleCheck1" value={PropertySwimmingPool} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Swimming Pool</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertyLaundryRoom" class="form-check-input" id="exampleCheck1" value={PropertyLaundryRoom} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Laundry Room</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertyWindowCovering" class="form-check-input" id="exampleCheck1" value={PropertyWindowCovering} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Window Covering</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertyRefrigerator" class="form-check-input" id="exampleCheck1" value={PropertyRefrigerator} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Refrigerator</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertyAlarm" class="form-check-input" id="exampleCheck1" value={PropertyAlarm} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Alarm</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertyGym" class="form-check-input" id="exampleCheck1" value={PropertyGym} onChange={checkboxHandling.bind(this)}/>
                                <label class="form-check-label" for="exampleCheck1">Gym</label>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div class="form-check">
                                <input type="checkbox" name="PropertyMicroWave" class="form-check-input" id="exampleCheck1" value={PropertyMicroWave} onChange={checkboxHandling.bind(this)}/>
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
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" name="Propertyname" value={Propertyname} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Username" name="PropertyuName" value={PropertyuName} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="Propertyemail" value={Propertyemail} onChange={formHandling.bind(this)}/>
                                </div>
                                <div className="col-lg-6">
                                    <label for="exampleInputEmail1">Phone</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile number" name="Propertyphone" value={Propertyphone} onChange={formHandling.bind(this)}/>
                                </div>
                                <button class="btn btn-dark btn-md mt-3" type="submit" onClick={()=>updateData()}>Update Property</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </>)
}
export default EditProperty