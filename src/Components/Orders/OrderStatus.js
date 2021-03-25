import { faEye, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';
import icon from '../../Images/orderImg/Icon.png';
import icon2 from '../../Images/orderImg/Icon (5).png';
import icon3 from '../../Images/orderImg/Icon (4).png';
import icon4 from '../../Images/orderImg/Icon (3).png';
import icon5 from '../../Images/orderImg/Icon (2).png';
import icon6 from '../../Images/orderImg/Icon (1).png';
import './Order.css';



const OrderStatus = () => {
    const topbarTitle = "Orders & Order Status";
    const [sidebarVisibility, setSidebarVisibility] = useState(false);

    const sidebarShow = () => {
        setSidebarVisibility(true)
    }
    return (
        <div className="row pt-3 globalBg">
            {/* Sidebar start */}
            <div className={sidebarVisibility == false ? "col-12 col-md-2  hidden" : "col-12 col-md-2 show"}>
                <Sidebar setSidebarVisibility={setSidebarVisibility} />
            </div>
            {
                sidebarVisibility == false && <FontAwesomeIcon icon={faSlidersH} onClick={sidebarShow} className="ml-4 sidebarToggle" />
            }
            {/* Sidebar end */}
            <div className="col-10 pl-0 pl-md-5">
                <Topbar topbarTitle={topbarTitle} />

                <div class="row mt-5">
                  <div class="col-9"> 
                    <span class="mx-2 eyeIcon"> All</span>
                    <span class="mx-2"><img src={icon} class="mr-1  orderIconImg" alt=""/>Total Order</span>
                    <span class="mx-2"><img src={icon2} class="mr-1 orderIconImg" alt=""/>Order Placed</span>
                    <span class="mx-2"><img src={icon3} class="mr-1 orderIconImg" alt=""/>Packaged </span>
                    <span class="mx-2"><img src={icon4} class="mr-1 orderIconImg" alt=""/>In Shipping</span>
                    <span class="mx-2"><img src={icon5} class="mr-1 orderIconImg" alt=""/>Delivered</span>
                    <span class="mx-2"><img src={icon6} class="mr-1 orderIconImg" alt=""/>Canceled</span>
                  </div>
                  <div className="col-3 ml-auto">
                        <p className="text-right">
                            <FontAwesomeIcon icon={faEye} className="eyeIcon" /> Show
                            <select name="show" id="1">
                                <option value="1">10</option>
                                <option value="2">9</option>
                            </select>
                            entries
                        </p>
                    </div>
              </div>

              {/* order list */}
              <div className="row justify-content-between p-2 mt-2 font-weight-bold bgCategory">
                    <div className="col-1">
                        <p>Id</p>
                    </div>
                    <div className="col-1">
                        <p className="dateTime">Date & Time</p>
                    </div>

                    <div className="col-1">
                        <p>Name</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>Email</p>
                    </div>
                    <div className="col-1">
                        <p>Phone</p>
                    </div>
                    <div className="col-2">
                        <p>Address</p>
                    </div>
                    <div className="col-1">
                    <p>Product Qty</p>
                    </div>
                    
                    <div className="col-1">
                        <p>Price</p>
                    </div>
                    <div className="col-1">
                        <p>Status</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                            12.01.20 <br/> 10.23pm
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Imran khan</p>
                    </div>
                    <div className="col-2">
                        <p >imran234@gmail.com</p>
                    </div>
                    <div className="col-1">
                        <p >012546325</p>
                    </div>
                    <div className="col-2">
                        <p >Dhaka Banhladesh 
                          Mirpur 10. R23, D21</p>
                    </div>
                    <div className="col-1">
                    <p >
                        90pcs <br/>
                        <button className="btn btn-dark orderStatusBtn">See all</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                        <p className="text-success text-center">Paid</p>
                    </div>
                    <div className="col-1">
                       <button className="btn btn-warning orderStatusBtn">Order Placed</button>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                            12.01.20 <br/> 10.23pm
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Imran khan</p>
                    </div>
                    <div className="col-2">
                        <p >imran234@gmail.com</p>
                    </div>
                    <div className="col-1">
                        <p >012546325</p>
                    </div>
                    <div className="col-2">
                        <p >Dhaka Banhladesh 
                          Mirpur 10. R23, D21</p>
                    </div>
                    <div className="col-1">
                    <p >
                        90pcs <br/>
                        <button className="btn btn-dark orderStatusBtn">See all</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                        <p className="text-success text-center">Paid</p>
                    </div>
                    <div className="col-1">
                       <button className="btn btn-warning orderStatusBtn">Order Placed</button>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                            12.01.20 <br/> 10.23pm
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Imran khan</p>
                    </div>
                    <div className="col-2">
                        <p >imran234@gmail.com</p>
                    </div>
                    <div className="col-1">
                        <p >012546325</p>
                    </div>
                    <div className="col-2">
                        <p >Dhaka Banhladesh 
                          Mirpur 10. R23, D21</p>
                    </div>
                    <div className="col-1">
                    <p >
                        90pcs <br/>
                        <button className="btn btn-dark orderStatusBtn">See all</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                        <p className="text-success text-center">Paid</p>
                    </div>
                    <div className="col-1">
                       <button className="btn btn-warning orderStatusBtn">Order Placed</button>
                    </div>
                </div>
              {/* order list end */}
            </div>    
        </div>
    );
};

export default OrderStatus;