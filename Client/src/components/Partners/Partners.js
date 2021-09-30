import React from "react";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import "./Partner.css"

const Partners = () => {
  return (
    <>
      <div className="partner-area pd-top-100 pd-bottom-100">
        <div className="container">
          <div className="row">
            {/* <div className="partner-slider " style={{display:"flex"}}> */}
              <div className="col-lg-3 col-md-3 col-xs-6">
               
                  <div className="thumb">
                    <img src={image1} alt="img" />
                  </div>
                
                </div>
                <div className="col-lg-3 col-md-3 col-xs-6">
              
                  <div className="thumb">
                    <img src={image2} alt="img" />
                  </div>
                
                </div>
                <div className="col-lg-3 col-md-3 col-xs-6">
                
                  <div className="thumb">
                    <img src={image4} alt="img" />
                  </div>
               
                </div>
                <div className="col-lg-3 col-md-3 col-xs-6">
                
                  <div className="thumb">
                    <img src={image3} alt="img" />
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        
      {/* </div> */}
    </>
  );
};
export default Partners;
