import React, { useState, useEffect}  from "react"
import "../signin/styles.css"
import { Link } from "react-router-dom"
// import M from "materialize-css"
// import "materialize-css/dist/css/materialize.css"
import Admin from "../Admin/Admin"
import { toast} from "react-toastify"
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";

const Signin = ()=>{
    let history = useHistory();
    const [input,setInput]= useState("");
    const [password,setPassword]= useState("");
    const dispatch = useDispatch();
    // const data = useSelector(state=>state.data)
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)
        },1000)
    },[])
            
    const PostData = ()=>{
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        //     // M.toast({html: "Invalid Email",classes:"#c62828 red darken-3"}) 
        //     toast.error("Invalid Email or Phone")
        //     return
        // }
        fetch("http://localhost:5000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                input:input,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                // M.toast({html: data.error, classes:"#c62828 red darken-3"})
                toast.error(data.error)
            }
             else if(data.user.email === "admin@gmail.com"){
                console.log(data.user.email)
                localStorage.setItem("jwt",data.usertoken)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                toast.success("Signin Successful")
                history.push('/admin')
                 
            }
            else{
                localStorage.setItem("jwt",data.usertoken)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                // M.toast({html:"Signin Successful", classes:"#2e7d32 green darken-3"})
                toast.success("Signin Successful")
                history.push('/admin')
                
                
            }
        }).catch((err)=>{console.log(err)})
    }
    return(<>
    {
        loader? 
        <div className="loader">
        {/* <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}/> */}
        <img src="images/loader.gif" style={{backgroundColor:"#fff"}}/>
      </div> :
        <div className="container bg-white" id="signin" >
            <div className="row">
                <div className="col-lg-6 text-center">
                <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="" className="img-fluid" />
                <div className="link"> 
                <Link to="/signup" className="signup-image-link">Create an account</Link>
                </div>
                </div>
                <div className="col-lg-6">
                <form className="form">
                    <h2 className="text-center">Signin</h2>
                    <div className="form-group fInput"  >
                        <label for="exampleInputEmail1"><i className="bx bxs-envelope"></i></label>
                        <input type="email" className="form-control" value={input} id="exampleInputEmail1" placeholder="Your email" onChange={(e)=>setInput(e.target.value)} autoComplete="off"/>   
                    </div>
                    <div className="form-group fInput" >
                        <label for="exampleInputPassword1"><i className="bx bxs-lock"></i></label>
                        <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} autoComplete="off"/>
                    </div>
                    <div className="form-check fInput">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="button" className="btn  btn-md" id="reg-btn" onClick={()=>PostData()}>Login</button>
                    <div className="social-login">
                        <span  className='social-title'>Or login with</span>
                        <ul className="socials">
                            <li><a href=""><i className="bx bxl-facebook"></i></a></li>
                            <li><a href=""><i className="bx bxl-twitter"></i></a></li>
                            <li><a href=""><i className="bx bxl-google-plus"></i></a></li>
                        </ul>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        
    }
 
    </>)
}

export default Signin