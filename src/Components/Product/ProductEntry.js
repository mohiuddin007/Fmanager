import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';
import './AddNewCategory.css';

const ProductEntry = () => {
    const topbarTitle = "Product Entry";
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

                <form className="mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="font-weight">Choose category</label>
                                <div>
                                    <select name="" id="" className="chooseCategory form-control">
                                        <option value="">Company name</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="form-group">
                                <label className="font-weight">Product name</label>
                                <input type="text" className="form-control inputFieldStyle" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="font-weight">Cost Price</label>
                                <input type="text" className="form-control inputFieldStyle" id="exampleInputPassword1" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="form-group">
                                <label className="font-weight">Selling Price</label>
                                <input type="text" className="form-control inputFieldStyle" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group p-3">
                        <label className="font-weight">Description</label>
                        <textarea className="form-control inputFieldStyle" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="commonBtn px-5">Submit</button>
                    </div>

                </form>

                <div className="row mt-5">
                     
                    <div className="col-6">
                        <div className="container subCategoryName">
                            <div className="row p-5">
                                 Write new sub category name
                                <form className="mt-4">
                                <div className="form-group">
                                  <input type="text" className="form-control" placeholder="write here"/>
                                 
                                  </div>
                                 <button className="commonBtn mt-3 px-4">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductEntry;