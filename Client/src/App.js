import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Allposts from "./components/Allposts"
import Signin from "./components/signin/Signin"
import Signup from './components/signup/Signup'
import Createposts from "./components/Createposts";
import {useDispatch} from 'react-redux'
import DefaultHome from "./components/Home/DefaultHome.js"
import Footer  from "./components/Footer/Footer";
import List from "./components/List/List";
import About from "./components/About/About"
import Admin from "./components/Admin/Admin"
import AddProperty from "./components/AddProperty/AddProperty";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Home from "./components/Allposts";
import PlaceDetails from "./components/PlaceDetails";
// const Routings = ()=>{
//   const history = useHistory();
//   const dispatch = useDispatch()
//   const result = useSelector(state=>state)

//   useEffect(()=>
//   {
//     // const user = localStorage.getItem("user")
//     if(result.auth.data){
//       console.log(result)
      
//     }else{
//       // history.push("/signin")
//       console.log("not exists")
//       history.push('/')
//     }
  
//   },[])

//   return(<>
    
//      </>)
// }



function App() {
  const result = useSelector(state=>state)

  return (
    <BrowserRouter>
     <Navbar/>
     <Route path="/" exact component={DefaultHome}></Route>
      <Route path="/signin"  component={Signin}></Route>
      <Route path="/signup"  component={Signup}></Route>
      <Route path="/addproperty"  component={AddProperty}></Route>
      <Route path="/allposts"  component={Allposts}></Route>
      <Route path="/createposts"  component={Createposts}></Route>
      <Route path="/list"  component={List}></Route>
      <Route path="/about"  component={About}></Route>
      {/* <Route exact component={Home}></Route> */}
      <Route path="/admin"  component={Admin}></Route>
      <Route path="/placedetails"  component={PlaceDetails}></Route>
      <ToastContainer />
    </BrowserRouter>
    
  );
}

export default App;
