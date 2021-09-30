import React from "react";


const PlaceDetails = () => {

    return (<>
        <div class="container-fluid mt-5 pt-5">
            <div class="row">
                <div class="col-lg-5">
                    <div class="card mt-4">
                        <div class="card-content ">
                            <div class="row">
                                <div class="col-lg-6">
                                    <img src="https://cdn.pixabay.com/photo/2020/06/25/10/21/architecture-5339245_960_720.jpg" style={{ width: "100%",height:"100%" }} />
                                </div>
                                
                                <div class="col-lg-6">
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">madharpur Hyd</p>
                                    <ul class='d-inline-block'>
                                        <li>
                                            <span>6 Beds</span>
                                        </li>
                                        <li>
                                            <span>3 Baths</span>
                                        </li>
                                        <li>
                                            <span>720 sq ft</span>
                                        </li>
                                        <li>
                                            <span>2 Garages</span>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 mt-4 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3373724399585!2d78.33990291537134!3d17.4914014043997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9260f7ceb215%3A0xd9baf7040f380b4f!2sNSK&#39;S%20Bliss%20Meadows!5e0!3m2!1sen!2sin!4v1631858823123!5m2!1sen!2sin"
                        width="100%" height="800px" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

        </div>
    </>)
}
export default PlaceDetails