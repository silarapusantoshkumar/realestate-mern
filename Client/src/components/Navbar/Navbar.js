import React, { useEffect, useState } from "react"
import "../Navbar/styles.css"
import {  useHistory, NavLink } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import mapReducer from "../../redux/mapReducer"


const Navbar = ()=>{
    const [collapse,setCollapse]= useState();
    const [id,setId] = useState();
    const [width,setWidth]=useState(window.innerWidth)
    const dispatch = useDispatch()
    const result = useSelector(state=>state)
   console.log(result)
    const history = useHistory();
    const Resize = ()=>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener("resize",Resize)
    },[])
    useEffect(()=>{
        if(width<991){
            setCollapse("collapse")
            setId("#navbarNavAltMarkup")
        }else{
            setCollapse("")
            setId("")
        }
    },[width])

        const renderList = ()=>{
            if(result.auth.data !== null){
                return[
                    // <NavLink exact activeClassName="text-white "  to="/"> <li key="1" className="nav-item  mx-3 active "> Home  </li> </NavLink>,
                    // <NavLink exact activeClassName="text-white "  to="/createposts"> <li key="2" className="nav-item mx-3 ">Post Property </li> </NavLink>,
                    <NavLink exact activeClassName="text-white "  to="/admin"><li key="7" className="nav-item mx-3"> Admin </li></NavLink>,
                    <li key="3" >
                        <button type="button" className="btn btn-danger"  id="button" style={{marginLeft:"45px"}}
                        onClick={()=>{
                        localStorage.clear() 
                        dispatch({type:"CLEAR",})
                        history.push("/")}}>LOGOUT</button></li>      
                ]
            }else{
                return[
                    
                    <NavLink exact activeClassName="text-white "  to="/"> <li key="1" className="nav-item  mx-3 active ">  Home </li> </NavLink> ,
                    <NavLink exact activeClassName="text-white "  to="/about"><li key="6" className="nav-item mx-3"> AboutUs </li></NavLink>,
                    <NavLink exact activeClassName="text-white "  to="/signin"><li key="4" className="nav-item mx-3"> Signin  </li> </NavLink>,
                    <NavLink exact activeClassName="text-white "  to="/signup"><li key="5" className="nav-item mx-3"> Signup </li></NavLink>,
                    // <NavLink exact activeClassName="text-white "  to="/admin"><li key="7" className="nav-item mx-3"> Admin </li></NavLink>,

                ]
            }
        }
  
    
    return(<>



     
     
                {/* <!-- ======= Header ======= --> */}
                <header id="header" className="fixed-top header-scrolled">
                    <div className="container ">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <NavLink to={"/"} className="logo" >Creative</NavLink> 
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" id="toggler"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="ml-auto nav-menu">
                                    <ul className="navbar-nav" data-toggle={collapse} data-target={id} >
                                        {renderList()}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                
                {/* <!-- End Header --> */}
          
    </>)
}

export default Navbar