import { faCalendarAlt, faEye, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';

const SalesReport = () => {
    const topbarTitle = "Sales Report";
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
                    <span className="mr-auto">
                        <select name="" id="" className="deliveryReportDropdown">
                            <option value="Select Company">Select Company</option>
                        </select>
                    </span>
                    {/* <span className="mr-auto" >
                         <select name="" id="" className="deliveryReportDropdown">
                             <option value="Select Status">Select Status</option>
                         </select>
                     </span> */}

                    <span className="mx-1  mx-md-3"><button className="topbarBtn px-3">This week</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This month</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This year</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn eyeIcon px-3">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Calender</button>
                    </span>
                </div>
                {/* topbar end */}

                <div className="row mt-5">

                    <div className="col-4 mr-auto">
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        <input type="text" className="form-control rounded-pill searchField"
                            placeholder="Type here for search" />
                    </div>

                    <div className="col-4 text-right">
                        <p >
                            <FontAwesomeIcon icon={faEye} className="eyeIcon" /> Show <select name="show" id="1">
                                <option value="1">10</option>
                                <option value="2">9</option>
                            </select> entries

                        </p>
                    </div>
                </div>
                {/* sales Report list */}
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
                    <div className="col-1">
                        <p>Product Qty</p>
                    </div>
                    <div className="col-1">
                        <p>Price</p>
                    </div>
                    <div className="col-1">
                        <p>Profit</p>
                    </div>
                    <div className="col-1">
                        <p>Due</p>
                    </div>
                    <div className="col-1">
                        <p>Company</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                            12.01.20 <br /> 10.23pm
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Imran khan</p>
                    </div>
                    <div className="col-1">
                        <p >50pcs</p>
                        <button className="deliveryReportSeeAllBtn">See all</button>
                    </div>
                    <div className="col-1">
                        <p >$125325</p>
                        <button className="salesReportPriceBtn">Paid</button>
                    </div>
                    <div className="col-1">
                        <p >$12</p>
                    </div>
                    <div className="col-1">
                        <p >$3212 </p>
                    </div>
                    <div className="col-1">
                        <p >Softify Digital</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                            12.01.20 <br /> 10.23pm
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Imran khan</p>
                    </div>
                    <div className="col-1">
                        <p >50pcs</p>
                        <button className="deliveryReportSeeAllBtn">See all</button>
                    </div>
                    <div className="col-1">
                        <p >$125325</p>
                        <button className="salesReportPriceBtn">Paid</button>
                    </div>
                    <div className="col-1">
                        <p >$12</p>
                    </div>
                    <div className="col-1">
                        <p >$3212 </p>
                    </div>
                    <div className="col-1">
                        <p >Softify Digital</p>
                    </div>
                </div>
                {/* sales Report list  */}

            </div>
        </div>
    );
};

export default SalesReport;