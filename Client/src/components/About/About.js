import React,{useEffect,useState} from "react";
import ClientReview from "../ClientReview/ClientReview";
import Partners from "../Partners/Partners";
import Wcu from "../Wcu/Wcu";
import Footer from "../Footer/Footer";
import "./About.css";
import image1 from "./images/3.png";
// import image2 from "../images/2.png";

const About = () => {
  const [loader, setLoader] = useState(false)

 useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
        setLoader(false)
    },1000)
 },[])
        
  return (
    <>
    {
        loader? 
        <div className="loader">
        {/* <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}/> */}
        <img src="images/loader.gif" style={{backgroundColor:"#fff"}}/>
      </div>:
      <section>
        <div id="bg-image">
         </div>
        <section className="about-area pd-top-98 pd-bottom-110">
        
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 align-self-center">
                <div className="about-wrap">
                  <h2> Who We Are </h2>
                  <p>
                    {" "}
                    Extremity direction existence as dashwoods do up.Securing
                    marianne led welcomed offended but offering six raptures.{" "}
                  </p>
                  <p>
                    {" "}
                    Ever man are put down his very.And marry may table him
                    avoid.Hard sell it were into parties of assured to me
                    windows.{" "}
                  </p>
                  <p>
                    {" "}
                    In to am attended desirous raptures declared diverted
                    confined at.Collected instantly remaining up certainly to
                    necessary as.Over walk dull into son boy door went new.At or
                    happiness commanded daughters as.Is handsome an declared at
                    received.{" "}
                  </p>
                </div>
              </div>{" "}
              <div className="col-md-6 col-sm-12 align-self-end">
                <div className="thumb text-md-right">
                  <img src={process.env.PUBLIC_URL + image1} alt="img" />
                  {/* <div className="date ">
                    <h2 className="mb-0 p-1 mr-2"> 12 </h2>
                    <h4> YEARS </h4>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Wcu />

        <section className="about-area pd-top-98 pd-bottom-110">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 align-self-center ">
                <div className="thumb text-md-right">
                  <img src={process.env.PUBLIC_URL + image1} alt="img" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 align-self-center">
                <div className="about-wrap">
                  <h3>
                    
                    At Property <br /> Real Estate Company
                  </h3>
                  <p>
                   
                    Extremity direction existence as dashwoods do up.Securing
                    marianne led welcomed offended but offering six raptures.
                  </p>
                  <p>
                    
                    Collected instantly remaining up certainly to necessary
                    as.Over walk dull into son boy door went new.At or happiness
                    commanded daughters as.Is handsome an declared at received.
                  </p>

                  <div className="clearfix">
                    <ul>
                      <li>
                       
                        <i className="fas fa-check" /> Help sellers get the most
                        for their properties.
                      </li>
                      <li>
                        
                        <i className="fas fa-check" /> Help sellers price their
                        properties fairly.
                      </li>
                      <li>
                       
                        <i className="fas fa-check" /> Help buyers find the
                        property that fits their needs.
                      </li>
                      <li>
                      
                        <i className="fas fa-check" /> Help buyers avoid paying
                        by strategically negotiating purchase.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientReview />
        <Partners />
        <Footer />
        
      </section>
}
            
    </>
  );
};

export default About;
