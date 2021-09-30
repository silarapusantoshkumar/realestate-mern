import React from "react";

const Payments = ()=>{
    return(<>
    <div class="wrapper mt-5 ">
        <div class="container-fluid ">
            <div class="row">
                            <div class="col-lg-6">
                                <div class="bill_info">
                                    <h4 class="bill_heading"><span><i class="fas fa-address-card"
                                                style={{color: "#274abb"}}></i></span> <span class="bill">Billing
                                            Information</span></h4>
                                    <hr class="mb-4" />
                                    <div class="forms">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label for="#">Name</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div class=" col-lg-6">
                                                    <label for="#">Email</label>
                                                    <input type="email" class="form-control" />
                                                </div>
                                            </div>
                                        </form>
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label for="#">Phone</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div class="col-lg-6">
                                                    <label for="#">City</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                        </form>
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label for="#">State</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div class=" col-lg-6">
                                                    <label for="#">Country</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                        </form>
                                        <form>
                                            <div class="row">
                                                <div class=" col-lg-6">
                                                    <label for="#">Address</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div class=" col-lg-6">
                                                    <label for="#">Zip</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ezy">

                                <div class="pay_mtd">
                                    <h4 class="payment"><span><i class="fa fa-credit-card credit_card"
                                                aria-hidden="true"></i></span><span class="mtd">Payment Method</span>
                                    </h4>
                                    <hr/>

                               

                                    <div class="paypal">
                                        <header class="payment-card-header cursor-pointer" data-toggle="collapse"
                                            data-target="#paypal" aria-expanded="true">
                                            <div class="payment-card-title flexbox">
                                                <h4>PayPal</h4>
                                            </div>
                                            <div class="pull-right">
                                                <img src="images/paypal.png" class="img-responsive" alt="" />
                                            </div>
                                        </header>
                                        <div class="collapse" id="paypal" role="tablist" aria-expanded="false">
                                            <div class="payment-card-body">
                                                <div class="row mrg-bot-20">
                                                    <div class="col-sm-6">
                                                        <span class="custom-checkbox d-block font-12 mb-2">
                                                            <input type="checkbox" id="promo1" />
                                                            <label for="promo1"></label>
                                                            Have a promo code?
                                                        </span>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                    <div class="col-sm-6 padd-top-10 text-right">
                                                        <label>Total Order</label>
                                                        <h2 class="mrg-0"><span class="theme-cl">$</span>950</h2>
                                                    </div>
                                                    <div class="col-sm-12 bt-1 padd-top-15 pt-3">
                                                        <span class="custom-checkbox d-block font-12 mb-3">
                                                            <input type="checkbox" id="privacy" />
                                                            <label for="privacy"></label>
                                                            By ordering you are agreeing to our <a href="#"
                                                                class="theme-cl">Privacy policy</a>.
                                                        </span>
                                                        <button type="submit"
                                                            class="btn btn-m btn-success">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                           
                                    <div class="payment-card mb-0">
                                        <header class="payment-card-header cursor-pointer" data-toggle="collapse"
                                            data-target="#debit-credit" aria-expanded="true">
                                            <div class="payment-card-title flexbox">
                                                <h4>Credit / Debit Card</h4>
                                            </div>
                                            <div class="pull-right">
                                                <img src="images/credit.png" class="img-responsive" alt="" />
                                            </div>
                                        </header>
                                        <div class="collapse" id="debit-credit" role="tablist" aria-expanded="false">
                                            <div class="payment-card-body">
                                                <div class="row mrg-bot-20">
                                                    <div class="col-sm-6">
                                                        <label>Card Holder Name</label>
                                                        <input type="text" class="form-control"
                                                            placeholder="Chris Seail" />
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <label>Card No.</label>
                                                        <input type="email" class="form-control"
                                                            placeholder="1800 5785 6758 2458" />
                                                    </div>
                                                </div>
                                                <div class="row mrg-bot-20">
                                                    <div class="col-sm-4 col-md-4">
                                                        <label>Expire Month</label>
                                                        <input type="text" class="form-control" placeholder="09" />
                                                    </div>
                                                    <div class="col-sm-4 col-md-4">
                                                        <label>Expire Year</label>
                                                        <input type="email" class="form-control" placeholder="2022" />
                                                    </div>
                                                    <div class="col-sm-4 col-md-4">
                                                        <label>CCV Code</label>
                                                        <input type="email" class="form-control" placeholder="258" />
                                                    </div>
                                                </div>
                                                <div class="row mrg-bot-20">
                                                    <div class="col-sm-7">
                                                        <span class="custom-checkbox d-block font-12 mb-2">
                                                            <input type="checkbox" id="promo" />
                                                            <label for="promo"></label>
                                                            Have a promo code?
                                                        </span>
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                    <div class="col-sm-5 padd-top-10 text-right">
                                                        <label>Total Order</label>
                                                        <h2 class="mrg-0"><span class="theme-cl">$</span>987</h2>
                                                    </div>
                                                    <div class="col-sm-12 bt-1 padd-top-15 pt-3">
                                                        <span class="custom-checkbox d-block font-12 mb-3">
                                                            <input type="checkbox" id="privacy1" />
                                                            <label for="privacy1"></label>
                                                            By ordering you are agreeing to our <a href="#"
                                                                class="theme-cl">Privacy policy</a>.
                                                        </span>
                                                        <button type="submit"
                                                            class="btn btn-m btn-success">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="tr-single-box mb-0">
                                    <div class="tr-single-body">
                                        <div class="tr-single-header">
                                            <h4><i class="fa fa-star-o"></i>Booking Summary</h4>
                                        </div>
                                        <div class="booking-price-detail side-list no-border mb-3">
                                            <h5>Reservation Details</h5>
                                            <ul>
                                                <li>Date<strong class="pull-right">18 Jun 2018</strong></li>
                                                <li>Time<strong class="pull-right">9pm 10pm</strong></li>
                                                <li>From<strong class="pull-right">10 jan 2019</strong></li>
                                            </ul>
                                        </div>
                                        <div class="booking-price-detail side-list no-border">
                                            <h5>Pricing Details</h5>
                                            <ul>
                                                <li>Dining<strong class="pull-right">$150</strong></li>
                                                <li>Reservation<strong class="pull-right">$60</strong></li>
                                                <li>Tax<strong class="pull-right">$53</strong></li>
                                                <li class="red pb-0">Total Cost<strong class="pull-right">$263</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        

    </>)
}
export default Payments