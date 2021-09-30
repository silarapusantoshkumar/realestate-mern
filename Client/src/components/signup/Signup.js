import React, { useState, useEffect } from "react"
import "./styles.css"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
// import {browserHistory} from "react-router";
// import 'react-toastify/dist/ReactToastify.css';
// import M from "materialize-css"
const Signup = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false)
    // const [verify,setVerify] = useState([]);
    const [phonenumber, setPhonenumber] = useState("")
    const [otp, setotp] = useState("")
    const [code, setCode] = useState('')
    // const [modal,setModal] = useState([]);
    const [close, setclose] = useState({show: false});

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000)

    }, [])

    // for submiiting the form
    
    const PostData = () => {
        if (!name || !email || !phone || !password) {
            toast.error("Please Fill all the fileds")
            return
        }
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            toast.error("Invalid Email")
            // M.toast({html: "Invalid Email",classes:"#c62828 red darken-3"}) 
            return
        }
        else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)) {
            toast.error("Please enter valid phonenumber")
            return
        }
        fetch("http://localhost:5000/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                password: password

            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    // M.toast({html: data.error,classes:"#c62828 red darken-3"})
                    toast.error(data.error)
                } else {
                    console.log(data.token)
                    // M.toast({html:data.message,classes:"#2e7d32 green darken-3"})
                    localStorage.setItem("token", data.token)
                    toast.success(data.message)
                    props.history.push('/signin')
                }
            }).catch((err) => { console.log(err) })

    }

    // for setting the phone number 

    useEffect(() => {
        setPhonenumber(phone)
    }, [phone])
    // for setting the otp 

    useEffect(() => {
        setCode(otp)
    }, [otp])

    // sending otp to the client number
    const sendOTP = () => {

        console.log(phonenumber)
        fetch(`http://localhost:5000/sendotp?phonenumber=${phonenumber}&channel=sms`,
            {
                method: "get",

            }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.message)

                } else {
                    // setResult(data.myposts)

                    console.log(data.message)
                    // console.log(data)
                }
            })
    }

    // verifing the otp and the client number


    const validateOTP = () => {
        // console.log(code)
        // console.log(phonenumber)
        fetch(`http://localhost:5000/verifyotp?phonenumber=${phonenumber}&code=${code}`,
            {
                method: "get",

            }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    // console.log(`The given ${data.phonenumber} is ${data.message} `)
                        toast.error(data.error)
                        console.log(data.error)

                } else {
                    console.log(`The given ${phonenumber} is ${data.message} `)
                    toast.success(data.message)
                   

                }
               
            })
          
            
    }




    return (<>


        {
            loader ?
                <div className="loader">
                    {/* <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}/> */}
                    <img src="images/loader.gif" style={{ backgroundColor: "#fff" }} />
                </div> :
                <div className="container bg-white" id="signin" >
                    <div className="row">
                        <div className="col-lg-6">
                            <form className="form">
                                <h2 className="text-center">Signup</h2>
                                <div className="form-group fInput">
                                    <label for="exampleInputName"><i className="bx bxs-user"></i></label>
                                    <input type="text" className="form-control" value={name} id="exampleInputName" onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
                                </div>
                                <div className="form-group fInput">
                                    <label for="exampleInputEmail1"><i className="bx bxs-envelope"></i></label>
                                    <input type="email" className="form-control" value={email} id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />

                                </div>
                                <div className="form-group fInput">
                                    <label for="exampleInputPhone"><i className="bx bxs-envelope"></i></label>
                                    <input type="text" className="form-control" value={phone} id="exampleInputPhone" onChange={(e) => setPhone(e.target.value)} placeholder="Your phone" autoComplete="off" maxLength="12" />
                                    <button type="button" class="verify" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => sendOTP()}> Verify   </button>
                                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" >
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    {/* <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="  text-center">
                                                        <h6>Please enter the one time password <br /> to verify your account</h6>
                                                        {/* <div> <span>A code has been sent to</span> <small>*******9897</small> </div> */}
                                                        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-4">
                                                            <input type="text" className="form-control" id="exampleInputName" onChange={(e) => setotp(e.target.value)} placeholder="Enter OTP" maxLength="6" />
                                                        </div>
                                                        <div> <button type='button' class="btn btn-danger px-4 validate"  aria-label="Close"  data-dismiss="modal" onClick={() =>{ validateOTP()}} >Validate</button> </div>
                                                    </div>
                                                    <div class="card-2 mt-3">
                                                        <div class="content d-flex justify-content-center align-items-center"> <span>Didn't get the code</span> <a href="#" class="text-decoration-none ms-3"> Resend</a> </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group fInput">
                                    <label for="exampleInputPassword1"><i className="bx bxs-lock"></i></label>
                                    <input type="password" className="form-control" value={password} id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>

                                <div className="form-check fInput">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">I agree all statements in Terms of service</label>
                                </div>
                                <button type="button" className="btn  btn-md " id="reg-btn" onClick={() => PostData()}>Register</button>
                                <div className="social-login">
                                    <span className='social-title'>Or login with</span>
                                    <ul className="socials">
                                        <li><a href=""><i className="bx bxl-facebook"></i></a></li>
                                        <li><a href=""><i className="bx bxl-twitter"></i></a></li>
                                        <li><a href=""><i className="bx bxl-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt="" className="img-fluid" />
                            <div className="link">
                                <Link to="/signin" className="signup-image-link">Already have an account</Link>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={()=>double()}>click</button> */}
                </div>


        }
    </>)
}

export default Signup