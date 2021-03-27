import { faCalendarAlt, faEye, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';
import './Report.css';

const DeliveryReport = () => {
    const topbarTitle = "Delivery Report";
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

                {/* topbar start */}
                <div className="row mt-4">
                     <span>
                         <select name="" id="" className="deliveryReportDropdown">
                             <option value="Select Company">Select Company</option>
                         </select>
                     </span>
                     <span className="mr-auto" >
                         <select name="" id="" className="deliveryReportDropdown">
                             <option value="Select Status">Select Status</option>
                         </select>
                     </span>

                    <span className="mx-1  mx-md-3"><button className="topbarBtn px-3">This week</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This month</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This year</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn eyeIcon px-3">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Calender</button>
                    </span>
                </div>
                {/* topbar end */}

                <div className="row mt-3">
                    <div className="col-4 ml-auto">
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

                {/* DeliveryReport list  */}
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
                        <button className="deliveryReportSeeAllBtn">See all</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                        <p className="text-success text-center">Paid</p>
                    </div>
                    <div className="col-1">
                       <button className="deliveryReportOrderStatusBtn">Order Placed</button>
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
                        <button className="deliveryReportSeeAllBtn">See all</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                        <p className="text-success text-center">Paid</p>
                    </div>
                    <div className="col-1">
                       <button className="deliveryReportOrderStatusBtn">Order Placed</button>
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
                        <button className="deliveryReportSeeAllBtn">See all</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                        <p className="text-success text-center">Paid</p>
                    </div>
                    <div className="col-1">
                       <button className="deliveryReportOrderStatusBtn">Order Placed</button>
                    </div>
                </div>
                {/* deliveryReport list end */}
            </div>
        </div>
    );
};

export default DeliveryReport;