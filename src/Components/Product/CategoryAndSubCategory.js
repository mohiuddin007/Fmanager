import { faEye, faPlus, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';

const CategoryAndSubCategory = () => {
    const topbarTitle = "Category & Sub-category list";
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
                <Topbar topbarTitle={topbarTitle}/>  

                <div className="row mt-5">
                    <div className="col-4">
                    <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        <input type="text" className="form-control rounded-pill searchField"
                            placeholder="Type here for search" />
                    </div>
                    <div className="col-2">
                        <button className="commonBtn"><FontAwesomeIcon icon={faPlus}/> Add New Category</button>
                    </div>
                    <div className="col-4 ml-auto">
                        <p className="text-right">
                            <FontAwesomeIcon icon={faEye} className="eyeIcon"/> Show 
                            <select name="show" id="1">
                                <option value="1">10</option>
                                <option value="2">9</option>
                            </select>
                            entries
                        </p>
                    </div>
                </div>

                <div className="row p-2 mt-2 font-weight-bold bgCategory">
                     <div className="col-2">
                         <h6>Id</h6>
                      </div>
                     <div className="col-3">
                         <h6>Category</h6>
                     </div>
                     <div className="col-3">
                         <h6>Sub-Category</h6>
                     </div>
                     <div className="col-3">
                         <h6>Sub's Sub-Category</h6>
                     </div>
                 </div>

                 <div className="row p-2 mt-2 bgCategory">
                     <div className="col-2">
                         <p>12</p>
                      </div>
                     <div className="col-3">
                         <p>Clothing</p>
                     </div>
                     <div className="col-3">
                         <p>Gents Clothing</p>
                     {/* <button className="commonBtn"><FontAwesomeIcon icon={faPlus}/> Add New Category</button> */}
                     </div>
                     <div className="col-3">
                         <p>Gents Shirt</p>
                     </div>
                 </div>

                 <div className="row p-2 mt-2 bgCategory">
                     <div className="col-2">
                         <p>12</p>
                      </div>
                     <div className="col-3">
                         <p>Clothing</p>
                     </div>
                     <div className="col-3">
                         <p>Gents Clothing</p>
                     {/* <button className="commonBtn"><FontAwesomeIcon icon={faPlus}/> Add New Category</button> */}
                     </div>
                     <div className="col-3">
                     <button className="commonBtn"><FontAwesomeIcon icon={faPlus}/> Sub's sub Category</button>
                     </div>
                 </div>

                 <div className="row p-2 mt-2 bgCategory">
                     <div className="col-2">
                         <p>12</p>
                      </div>
                     <div className="col-3">
                         <p>Clothing</p>
                     </div>
                     <div className="col-3">
                     <button className="commonBtn"><FontAwesomeIcon icon={faPlus}/> Sub Category</button>
                     </div>
                     <div className="col-3">
                    
                     </div>
                 </div>

                 <div className="row mt-4">
                    <div className="col-6">

                    </div>
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

export default CategoryAndSubCategory;