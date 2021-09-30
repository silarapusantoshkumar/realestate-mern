import React from 'react'
import Signin from '../signin/Signin'
import "../Admin/styles.css"
import Payments from '../Payments/Payments'
import MyProperties from '../MyProperties/MyProperties'
import AddProperty from '../AddProperty/AddProperty'
import EditProperty from '../MyProperties/EditProperty/EditProperty'
import {BrowserRouter, Route, Switch,Link} from "react-router-dom"
import userprofile from "../Admin/house.png"
import {useSelector, useDispatch} from 'react-redux'
const Admin = (props)=>{

    const result = useSelector(state=>state)
    console.log(result)
    if(result.auth.data === null){
        return[
            props.history.push('/signin')
        ]
       
    }
    else{
    return(<>
      <BrowserRouter>
    <div className="Admin">
    <div className="row">
        <div className="col-lg-2">
          <div  id="sidebar" >
                      <nav class="navbar navbar-expand-lg navbar-light  mt-5 "  id="sidenavbar">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span ><i class="navbar-toggler-icon"></i> Navigation Toggle</span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav m-auto">
                      <li class="text-center img_1_1 mb-5"><img src={userprofile} alt="" class="img_2" />
                          <p style={{color:"rgb(197 192 192)"}}> Username</p>
                      </li>
                  <li  class="nav-item">
                      <a class="nav-link"  href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
                  </li>
                  <li class="nav-item">
                      <Link to="/admin/myproperties" class="nav-link" ><i class="fa fa-sign-out" aria-hidden="true"></i> My Properties </Link>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#"><i class="fa fa-heart" aria-hidden="true"></i> Favourite Properties</a>
                  </li>
                  <li class="nav-item">
                      <Link to="/admin/addproperty" class="nav-link" ><i class="fa fa-bars" aria-hidden="true"></i> Add Properties</Link>
                  </li>

                  {/* <li class="nav-item">
                  <Link to="/admin/payments" class="nav-link" ><i class="fa fa-sign-out" aria-hidden="true"></i> Payments </Link>
                  </li> */}
                  <li class="nav-item">
                      <a class="nav-link" href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> LogOut</a>
                  </li>
                  </ul>
              </div>
                </nav>
            </div>
            </div>
            <div className="col-lg-10">    
            {/* <Signin /> */}
          
            <Switch>
            {/* <Route path="/admin" exact  component={Admin}></Route> */}
            <Route path="/admin" exact  component={MyProperties}></Route> 
            <Route path="/admin/payments"  exact component={Payments}></Route> 
            <Route path="/admin/myproperties" exact  component={MyProperties}></Route> 
            <Route path="/admin/addproperty"   component={AddProperty}></Route> 
            <Route path="/admin/editproperty/edit/:idname"   component={EditProperty}></Route> 
            </Switch>
           
        
            </div>
    </div>
    </div>
    </BrowserRouter> 
    </>)
            
        }
}
export default Admin