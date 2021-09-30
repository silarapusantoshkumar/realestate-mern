import React,{useEffect, useState} from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../Home/styles.css"
import Footer from '../Footer/Footer';
import TopProperty from "../TopProperty/TopProperty";
import Wcu from '../Wcu/Wcu';
import Agent from '../Agent/Agent';
import ClientReview from "../ClientReview/ClientReview";
import Partners from '../Partners/Partners';
import Search from '../Search/search';

// import { Autocomplete } from '@react-google-maps/api';

const DefaultHome = ()=>{
 const [loader, setLoader] = useState(false)

 useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
        setLoader(false)
    },2000)
 },[])
        

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
      <div> <section id="hero" className="d-flex align-items-center">
      <div className="container hero-container">
          <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                  <h1>Better Solutions For Your Business</h1>
                  <h2>We are team of talented designers making websites </h2>
                      <div className="d-lg-flex">
                          <a href="#about" className="btn-get-started scrollto">Get Started</a>
                          {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a> */}
                      </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img " data-aos="zoom-in" data-aos-delay="200">
                  <img src="images/home.gif" className="img-fluid animated" alt=""/>
              </div>
          </div>
      </div>    
    </section>

        <Search />
        <TopProperty />
        <Wcu/>
        <Agent/>
        <ClientReview/>
        <Partners/>
        <Footer />
  </div>
    } 
    
    </>    )
}

export default DefaultHome