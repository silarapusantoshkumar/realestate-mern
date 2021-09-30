import React, {useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "../MyProperties/styles.css"
const MyProperties = (props)=>{
    const [result,setResult]=useState([])
    useEffect(()=>{
      
        fetch("http://localhost:5000/myproperties",{
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
               
                setResult(data)
                // console.log(data)
            }
        })
    },[])

    const deletePost=(id)=>{
        fetch(`http://localhost:5000/deletepost/${id}`,{
          method:"delete",
          headers:{
            "Authorization":"Bearer "+localStorage.getItem('jwt')
        }
        }).then(res=>res.json())
        .then(data=>{
            const newData = result.filter(item=>{
              return item._id !== data._id
            })
            setResult(newData)
        })
      }

    return(<>
    <div className="mt-5">
    </div>
    { result?.map((res)=>{
         return(

         <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="content_1">
                        <div class="tab_1">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5">
                                        <h4 class="my_properties">My Properties</h4>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                        <p class="date">Date Added</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                        <p class="date">Views</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                        <p class="date">Actions</p>
                                    </div>
                                    <div class="col-lg-1 col-md-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab_2">
                            <div class="container-fluid tab">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5">


                                        <div class="container-fluid tab">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5">
                                                    <div class="image">
                                                        <a ><img alt="my-properties-3"
                                                                src={res.Propertyimage}
                                                                class="img-fluid" /></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-7 col-md-7">
                                                    <div class="inner">
                                                        <a >
                                                            <h2 class="luxary">{res.PropertyTitle}</h2>
                                                        </a>
                                                        <figure><i class="lni-map-marker"></i> {res.Propertyaddress}
                                                        </figure>
                                                        <ul class="starts text-left mb-0">
                                                            <li class="mb-0"><i class="fa fa-star"></i>
                                                            </li>
                                                            <li class="mb-0"><i class="fa fa-star"></i>
                                                            </li>
                                                            <li class="mb-0"><i class="fa fa-star"></i>
                                                            </li>
                                                            <li class="mb-0"><i class="fa fa-star"></i>
                                                            </li>
                                                            <li class="mb-0"><i class="fa fa-star-o"></i>
                                                            </li>
                                                            <li class="ml-3">(6 Reviews)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                        <p class="tab_2_content">08.14.2020</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                        <p class="tab_2_content">163</p>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                        <Link to={`editproperty/edit/${res._id}`}><p class="tab_2_content">Edit</p> </Link>
                                        
                                    </div>
                                    <div class="col-lg-1 col-md-1">
                                        <Link>
                                        <p class="tab_2_content" onClick={()=>deletePost(res._id)}><i class="fas fa-trash-alt" style={{color: "red"}}></i>
                                        </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
 )
})} 
    </>)
}
export default MyProperties