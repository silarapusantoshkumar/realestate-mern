import React from "react"
import {Link} from "react-router-dom"
import"./Agent.css"
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';

const Agent = () =>{
    return(
        <>
           
            <section className = "agent-page-area text-center pd-top-80 pd-bottom-80" >
            <div className = "container" >
            <div className = "row justify-content-center" >
            <div className = "col-lg-3 col-sm-6" >
            <div className = "single-agent-wrap" >
            <div className = "thumb" >
            <img src = {image1}alt = "img" />
            </div> 
            <div className = "agent-wrap-details" >
            <p className = "agent-position" > Seller </p> 
            <h5 > Clarissa Muir </h5> 
            <div className = "view-all-btn" >
            <Link className = "initiate-scripts"
            to = {
                '/'
            } > View Profile < i className = "fa fa-angle-right"
            ariahidden = "true" /> </Link> 
            </div> </div> </div> </div>

            <div className = "col-lg-3 col-sm-6" >
            <div className = "single-agent-wrap" >
            <div className = "thumb" >
            <img src = {image2}alt = "img" />
            </div> <div className = "agent-wrap-details" >
            <p className = "agent-position" > Seller </p> 
            <h5 > Soren Davidson </h5> 
            <div className = "view-all-btn" >
            <Link className = "initiate-scripts"
            to = {
                '/'
            } > View Profile < i className = "fa fa-angle-right"
            ariahidden = "true" /> </Link> 
            </div> </div> </div> </div>
            <div className = "col-lg-3 col-sm-6" >
            <div className = "single-agent-wrap" >
            <div className = "thumb" >
            <img src = {image3}alt = "img" />
            </div> <div className = "agent-wrap-details" >
            <p className = "agent-position" > Seller </p> 
            <h5 > Aimee Bradshaw </h5> 
            <div className = "view-all-btn" >
            <Link className = "initiate-scripts"
            to = {
                '/'
            } > View Profile < i className = "fa fa-angle-right"
            ariahidden = "true" /> </Link> 
            </div> </div> </div> </div>
            <div className = "col-lg-3 col-sm-6" >
            <div className = "single-agent-wrap" >
            <div className = "thumb" >
            <img src = {image4}alt = "img" />
            </div> <div className = "agent-wrap-details" >
            <p className = "agent-position" > Seller </p> 
            <h5 >  Lukasz Mitchell </h5> 
            <div className = "view-all-btn" >
            <Link className = "initiate-scripts"
            to = {
                '/'
            } > View Profile < i className = "fa fa-angle-right"
            ariahidden = "true"/> </Link> 
            </div> </div> </div> </div>
              
            
             </div>  </div> 
             </section> 


        </>
    )
}

export default Agent;