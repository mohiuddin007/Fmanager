import { faEye, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';
import lux from '../../Images/DashboardImg/Group 1112.png';

const ProductList = () => {
    const topbarTitle = "Product List";
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

                <div className="row justify-content-between mt-5">
                    <div className="col-6">
                        <span className="eyeIcon">All</span>
                        <span className="mx-3"> <input type="checkbox" /> Top selling</span>
                        <span className="mx-3"> <input type="checkbox" /> High profit</span>
                        <span className="mx-3"> <input type="checkbox" /> Low profit</span>
                    </div>
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

                <div className="row justify-content-between mt-2">
                    <div className="col-6">
                        <span className="eyeIcon"> Category</span>
                        <span className="mx-1">
                            <select name="" id="">
                                <option value="all">All</option>
                            </select>
                        </span>
                        <span className="mx-1">
                            <button className="commonBtn">New Category</button>
                        </span>
                        <span className="mx-1">
                            <button className="commonBtn">New Product</button>
                        </span>
                    </div>
                    <div className="col-3 text-right ml-auto">
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        <input type="text" className="form-control rounded-pill searchField"
                            placeholder="Type here for search" />
                    </div>
                </div>

                {/* Product list design */}
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
                        <p>Type</p>
                    </div>
                    <div className="col-1">
                        <p>Color</p>
                    </div>
                    <div className="col-1">
                        <p>Sold</p>
                    </div>
                    <div className="col-1">
                    <p className="text-warning">Remain</p>
                    </div>
                    
                    <div className="col-1">
                        <p>Price</p>
                    </div>
                    <div className="col-1">
                        <p>profit</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                            <img src={lux} className="lux" alt=""/>
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Lux White</p>
                    </div>
                    <div className="col-1">
                        <p >Saban</p>
                    </div>
                    <div className="col-1">
                        <p >white</p>
                    </div>
                    <div className="col-1">
                        <p >132</p>
                    </div>
                    <div className="col-1">
                    <p className="text-info">
                        12 <br/> <button className="btn btn-warning updateStockBtn">Update Stock</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                    <div className="col-1">
                        <p>$124</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                          <img src={lux} className="lux" alt=""/>
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Lux White</p>
                    </div>
                    <div className="col-1">
                        <p >Saban</p>
                    </div>
                    <div className="col-1">
                        <p className="mx-3">white</p>
                    </div>
                    <div className="col-1">
                        <p className="mx-3">132</p>
                    </div>
                    <div className="col-1">
                    <p className="text-info">
                        122 <br/> <button className="btn btn-success updateStockBtn">Update Stock</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                    <div className="col-1">
                        <p>$124</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-1">
                        <p >
                          <img src={lux} className="lux" alt=""/>
                        </p>
                    </div>

                    <div className="col-1">
                        <p >Lux White</p>
                    </div>
                    <div className="col-1">
                        <p >Saban</p>
                    </div>
                    <div className="col-1">
                        <p >white</p>
                    </div>
                    <div className="col-1">
                        <p >132</p>
                    </div>
                    <div className="col-1">
                    <p className="text-danger">
                        0 <br/> <button className="btn btn-danger updateStockBtn">Update Stock</button>
                    </p>
                    </div>
                    <div className="col-1">
                        <p >$124532</p>
                    </div>
                    <div className="col-1">
                        <p >$124</p>
                    </div>
                </div>
                {/* Product list design */}

            </div>
        </div>
    );
};

export default ProductList;