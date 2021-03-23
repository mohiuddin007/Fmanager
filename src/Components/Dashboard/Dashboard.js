import { faBell, faCalendarAlt, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import './Dashboard.css';
import totalOrder from '../../Images/DashboardImg/Icon1.png';
import OrderPlaced from '../../Images/DashboardImg/Icon2.png';
import Packaged from '../../Images/DashboardImg/Icon3.png';
import inShipping from '../../Images/DashboardImg/Oval4.png';
import Delivered from '../../Images/DashboardImg/Oval5.png';
import cancel from '../../Images/DashboardImg/cancel.png';
import product from '../../Images/DashboardImg/Group 1112.png';
import plus from '../../Images/DashboardImg/+.png';
import minus from '../../Images/DashboardImg/-.png';
import increment from '../../Images/DashboardImg/++.png';

const Dashboard = () => {
    const [sidebarVisibility, setSidebarVisibility] = useState(false);

    const sidebarShow = () => {
        setSidebarVisibility(true)
    }
    return (
        <div className="row pt-3 dashboardBg">
            {/* Sidebar start */}
            <div className={sidebarVisibility == false ? "col-12 col-md-2  hidden" : "col-12 col-md-2 show"}>
                <Sidebar setSidebarVisibility={setSidebarVisibility} />
            </div>
            {
                sidebarVisibility == false && <FontAwesomeIcon icon={faSlidersH} onClick={sidebarShow} className="ml-4 sidebarToggle" />
            }
            {/* Sidebar end */}

            <div className="col-10 ">

                {/* topbar start */}
                <div className="row ml-3">

                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This week</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This month</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">This year</button></span>
                    <span className="mx-1 mx-md-3"><button className="topbarBtn px-3">
                        <FontAwesomeIcon icon={faCalendarAlt} /> Calender</button>
                    </span>
                    <span className="mt-3 mt-md-0 ml-auto notificationTopIcon"><FontAwesomeIcon icon={faBell} /></span>
                    <span className="mt-3 mt-md-0"><button className="topbarProfitBtn px-3">Profit: $3434</button></span>
                    <span className="mt-3 mt-md-0 mx-3"><button className="topbarProfileBtn px-3">
                        Profile</button></span>
                </div>
                {/* topbar end */}

                {/* Order history section start */}
                <div className="row justify-content-between mt-4">
                    <div className="col-4 col-md-2">
                        <img src={totalOrder} className="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span className="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src={OrderPlaced} className="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span className="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src={Packaged} className="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span className="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src={inShipping} className="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span className="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src={Delivered} className="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span className="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div className="col-4 col-md-2">
                        <img src={cancel} className="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span className="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                </div>
                {/* Order history section end */}


                <div className="row justify-content-center mt-4">
                    {/* Product section start */}
                    <div className="col-md-4">
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        <input type="text" className="form-control rounded-pill searchField"
                            placeholder="Type here for search" />

                        <div className="row justify-content-center p-2 m-2 productBg">
                            <div className="col-4">
                                <img src={product} className="img-fluid w-100" alt="" />
                            </div>
                            <div className="col-8">
                                <span className="productText">Size:
                                    <select name="" id="" className="productDropdown">
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                </span>
                                <span className="productText ml-1">Color:
                                    <select name="" id="" className="productDropdown">
                                        <option value="Red">Red</option>
                                        <option value="Green">Green</option>
                                        <option value="Orange">Orange</option>
                                    </select>
                                </span>
                                <span className="ml-1 productFontWeight">৳149</span>
                                <p className="mt-1 mb-0 font-weight-bold productName">Saban Lux White Beauty</p>

                                <span className="productText">Saban</span>
                                <span className="productText ml-3">Model: White Beauty</span>

                                <div className="row justify-content-between mt-2">
                                    <div className="col-7">
                                        <span>
                                            <img src={minus} className="quantity" alt=""/>
                                        </span>
                                        <span>1</span>
                                        <span >
                                            <img src={increment} className="quantity" alt=""/>
                                        </span>
                                    </div>
                                    <div className="col-3 ">
                                        <img src={plus} className=" plus" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-right mt-2">
                            <a href="#">See all</a>
                        </p>
                    </div>
                    {/* Product section end */}

                    {/* Closing To Stock Out start */}
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-8">
                                <h6>Closing To Stock Out<span className="text-danger">(12)</span></h6>

                            </div>
                            <div className="col-4">
                                <select name="" id="" className="stockOutDropdown">
                                    <option value="1">today</option>
                                    <option value="2">last day</option>
                                </select>
                            </div>
                        </div>
                        <div className="row productBg p-2 m-3">
                            <div className="col-3">
                                <img src={product} className="img-fluid" alt="" />
                            </div>
                            <div className="col-9">
                                <div className="row ">
                                    <div >
                                        <span className="productText">Size: S</span> 
                                        <span className="productText ml-3">Color: Orange</span>
                                        <span className="ml-3 productFontWeight">$120</span>
                                        <span className="text-danger ml-4 productFontWeight">0 pcs</span>
                                    </div>
                                </div>
                                <h6 className="font-weight-bold mt-2">Saban Lux White Beauty</h6>
                                <div className="row">
                                        <spann className="productText">Saban</spann>
                                        <span className="productText ml-4">Modal: White Beauty</span>
                                       <button className="btn btn-outline-success rounded-pill ml-auto p-1 px-2 productText">Update</button>
                                  
                                </div>
                            </div>
                        </div>

                        {/* dami design */}
                        <div className="row productBg p-2 m-3">
                            <div className="col-3">
                                <img src={product} className="img-fluid" alt="" />
                            </div>
                            <div className="col-9">
                                <div className="row ">
                                    <div >
                                        <span className="productText">Size: S</span> 
                                        <span className="productText ml-3">Color: Orange</span>
                                        <span className="ml-3 productFontWeight">$120</span>
                                        <span className="text-danger ml-4 productFontWeight">0 pcs</span>
                                    </div>
                                </div>
                                <h6 className="font-weight-bold mt-2">Saban Lux White Beauty</h6>
                                <div className="row">
                                        <spann className="productText">Saban</spann>
                                        <span className="productText ml-4">Modal: White Beauty</span>
                                       <button className="btn btn-outline-success rounded-pill ml-auto p-1 px-2 productText">Update</button>
                                  
                                </div>
                            </div>
                        </div>
                        {/* dami design */}
                        <p className="text-right mt-2">
                            <a href="#">See all</a>
                        </p>
                    </div>
                    {/* Closing To Stock Out end */}

                    {/* Profit-Expenses-Sales section design start */}
                    <div className="col-md-3">
                        <h6>Profit-Expenses-Sales</h6>
                        {/* chart is here */}

                        <div className="row">
                            <div className="col-8">
                                <h6>New Order<span className="text-danger">(12)</span></h6>

                            </div>
                            <div className="col-4">
                                <select name="" id="" className="stockOutDropdown">
                                    <option value="1">today</option>
                                    <option value="2">last day</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                        
                            <h6 className="font-weight-bold ml-3">Sadia afrin <span className="textClr">($200)</span> </h6>
                                <span className="lightText ml-3">Dhaka, Dhanmondi sukrabad</span>
                            
                        </div>
                        <div className="row mt-2">
                                <h6 className="font-weight-bold ml-3">Liza Khondokar <span className="textClr">($200)</span> </h6>
                                <span className="lightText ml-3">Dhaka, Mirpur 14</span>
                        </div>
                        <div className="row mt-2">
                        
                                <h6 className="font-weight-bold ml-3">Liza Khondokar <span className="textClr">($200)</span> </h6>
                                <span className="lightText ml-3">Dhaka</span>
                            
                        </div>
                        <p className="text-right mt-2">
                            <a href="#">See all</a>
                        </p>
                    </div>
                    {/* Profit-Expenses-Sales section design end */}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;