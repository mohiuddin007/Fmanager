import { faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
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

const Dashboard = () => {
    const [sidebarVisibility, setSidebarVisibility] = useState(false);

    const sidebarShow = () => {
        setSidebarVisibility(true)
    }
    return (
        <div className="row pt-3 globalBg">
            <div className={sidebarVisibility == false ? "col-2 hidden" : "col-2 show"}>
                <Sidebar setSidebarVisibility={setSidebarVisibility} />
            </div>
            {
                sidebarVisibility == false && <FontAwesomeIcon icon={faSlidersH} onClick={sidebarShow} className="ml-4 sidebarToggle" />
            }
            <div class="col-10 ">

                <div class="row ml-3">

                    <span class="mx-1 mx-md-3"><button class="topbarBtn px-3">This week</button></span>
                    <span class="mx-1 mx-md-3"><button class="topbarBtn px-3">This month</button></span>
                    <span class="mx-1 mx-md-3"><button class="topbarBtn px-3">This year</button></span>
                    <span class="mx-1 mx-md-3"><button class="topbarBtn px-3">
                        Calender</button></span>
                    <span class="mt-3 mt-md-0 ml-auto"><button class="topbarProfitBtn px-3">Profit: $3434</button></span>
                    <span class="mt-3 mt-md-0 mx-3"><button class="topbarProfileBtn px-3">
                        Profile</button></span>
                </div>
                <div class="row justify-content-between mt-4">
                    <div class="col-4 col-md-2">
                        <img src={totalOrder} class="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span class="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div class="col-4 col-md-2">
                        <img src={OrderPlaced} class="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span class="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div class="col-4 col-md-2">
                        <img src={Packaged} class="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span class="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div class="col-4 col-md-2">
                        <img src={inShipping} class="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span class="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div class="col-4 col-md-2">
                        <img src={Delivered} class="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span class="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                    <div class="col-4 col-md-2">
                        <img src={cancel} class="totalOrder" alt="" />
                        <h5>Total Order</h5>
                        <h6><span class="font-weight-bold">120</span> ($1200)</h6>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                    <input type="text" className="form-control rounded-pill searchField"
                        placeholder="Type here for search" />

                    <div class="row justify-content-center p-2 m-2 productBg">
                        <div class="col-4">
                            <img src={product} class="img-fluid w-100" alt=""/>
                        </div>
                        <div class="col-8 marginRemove">
                            <span>Size:</span>
                            <span class="pdSizeStyle">S</span><span class="pdSizeStyle">M</span><span
                                class="pdSizeStyle">L</span>
                            <span>৳149</span>
                            <p class="mt-2 mb-0">Saban Lux White Beauty</p>

                            <small>Saban</small>
                            <small>Model: White Beauty</small>

                            <div class="row mt-2">
                                <div class="col-7">
                                    <span class="quantity">-</span>
                                    <span>1</span>
                                    <span class="quantity">+</span>
                                </div>
                                <div class="col-3 ">
                                    {/* <img src={} class="mt-1 ml-3 plus" alt=""/> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;