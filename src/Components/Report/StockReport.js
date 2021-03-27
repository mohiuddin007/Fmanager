import { faCalendarAlt, faEye, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';

const StockReport = () => {
    const topbarTitle = "Stock Report";
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
                    <span className="mx-1  mx-md-3"><button className="topbarBtn px-3">This week</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This month</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This year</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn eyeIcon px-3">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Calender</button>
                    </span>
                </div>

                <div className="row mt-5">
                    <div className="col-3">
                        <span>Select status: </span>
                        <span>
                            <select name="" id="" className="stockReportDropdown">
                                <option value="all">All</option>
                            </select>
                        </span>
                    </div>
                    <div className="col-3 ml-auto">
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        <input type="text" className="form-control rounded-pill searchField"
                            placeholder="Type here for search" />
                    </div>
                    <div className="col-3 text-center">
                        <p >
                            <FontAwesomeIcon icon={faEye} className="eyeIcon" /> Show <select name="show" id="1">

                                <option value="1">10</option>
                                <option value="2">9</option>
                            </select>  entries

                        </p>
                    </div>
                </div>
                {/* topbar end */}

                {/* Stock Report list  */}
                <div className="row justify-content-between p-2 mt-2 font-weight-bold bgCategory">
                    <div className="col-1">
                        <p>Id</p>
                    </div>
                    <div className="col-1">
                        <p>Photo</p>
                    </div>

                    <div className="col-1">
                        <p>Name</p>
                    </div>
                    <div className="col-1">
                        <p>Category</p>
                    </div>
                    <div className="col-1">
                        <p>Color</p>
                    </div>
                    <div className="col-1">
                        <p>SKU</p>
                    </div>
                    <div className="col-1">
                        <p>Unit Cost</p>
                    </div>

                    <div className="col-1">
                        <p>Total cost price</p>
                    </div>
                    <div className="col-1">
                        <p>Quantity</p>
                    </div>
                    <div className="col-1">
                        <p>Total sell price</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p ></p>
                    </div>

                    <div className="col-1">
                        <p >Lux White</p>
                    </div>
                    <div className="col-1">
                        <p >Saban</p>
                    </div>
                    <div className="col-1">
                        <p >White</p>
                    </div>
                    <div className="col-1">
                        <p >132</p>
                    </div>
                    <div className="col-1">
                        <p >$123</p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                    <div className="col-1">
                        <span className="text-danger">12</span>
                        <button className="btn btn-danger">Pending </button>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p ></p>
                    </div>

                    <div className="col-1">
                        <p >Lux White</p>
                    </div>
                    <div className="col-1">
                        <p >Saban</p>
                    </div>
                    <div className="col-1">
                        <p >White</p>
                    </div>
                    <div className="col-1">
                        <p >132</p>
                    </div>
                    <div className="col-1">
                        <p >$123</p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                    <div className="col-1">
                        <span className="text-danger">12</span>
                        <button className="btn btn-danger">Pending </button>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p ></p>
                    </div>

                    <div className="col-1">
                        <p >Lux White</p>
                    </div>
                    <div className="col-1">
                        <p >Saban</p>
                    </div>
                    <div className="col-1">
                        <p >White</p>
                    </div>
                    <div className="col-1">
                        <p >132</p>
                    </div>
                    <div className="col-1">
                        <p >$123</p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                    <div className="col-1">
                        <span className="text-danger">12</span>
                        <button className="btn btn-danger">Pending </button>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                </div>
                {/* Stock Report list end */}
            </div>
        </div>
    );
};

export default StockReport;