import { faCalendar, faEdit, faEye, faSlidersH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';

const ExpenseList = () => {
    const topbarTitle = "Expense List";
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

                <div className="row justify-content-between mt-4">
                    <div className="col-5">
                        <span className="eyeIcon">Today</span>
                        <span className="mx-3"> <FontAwesomeIcon icon={faCalendar} className="eyeIcon" /> to <FontAwesomeIcon icon={faCalendar} className="eyeIcon" /></span>
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

                <div className="row justify-content-between p-2 mt-2 font-weight-bold bgCategory">
                    <div className="col-1">
                        <p>Id</p>
                    </div>
                    <div className="col-2">
                        <p>Date & Time</p>
                    </div>

                    <div className="col-2">
                        <p>Expense Way</p>
                    </div>
                    <div className="col-1 ">
                        <p>Amount</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>Payment Way</p>
                    </div>
                    <div className="col-2">
                        <p>Note</p>
                    </div>
                    <div className="col-2">
                    <p >Action</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>13</p>
                    </div>
                    <div className="col-2">
                        <p>25-03-21 <br/> 04.57pm</p>
                    </div>

                    <div className="col-2">
                        <p className="font-weight-bold">Labour</p>
                    </div>
                    <div className="col-1">
                    <p className="font-weight-bold">$400</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>Cash</p>
                    </div>
                    <div className="col-2">
                        <p>safd salkfj wkjhdfns</p>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-between text-center">
                            <div className="col-6">
                                <span><FontAwesomeIcon icon={faEdit} className="eyeIcon" /> <br/> Edit</span>
                            </div>
                            <div className="col-6">
                            <span ><FontAwesomeIcon icon={faTrash} className="text-danger"/>  Delete</span>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>13</p>
                    </div>
                    <div className="col-2">
                        <p>25-03-21 <br/> 04.57pm</p>
                    </div>

                    <div className="col-2">
                        <p className="font-weight-bold">Labour</p>
                    </div>
                    <div className="col-1">
                    <p className="font-weight-bold">$400</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>Cash</p>
                    </div>
                    <div className="col-2">
                        <p>safd salkfj wkjhdfns</p>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-between text-center">
                            <div className="col-6">
                                <span><FontAwesomeIcon icon={faEdit} className="eyeIcon" /> <br/> Edit</span>
                            </div>
                            <div className="col-6">
                            <span ><FontAwesomeIcon icon={faTrash} className="text-danger"/>  Delete</span>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>13</p>
                    </div>
                    <div className="col-2">
                        <p>25-03-21 <br/> 04.57pm</p>
                    </div>

                    <div className="col-2">
                        <p className="font-weight-bold">Labour</p>
                    </div>
                    <div className="col-1">
                    <p className="font-weight-bold">$400</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>Cash</p>
                    </div>
                    <div className="col-2">
                        <p>safd salkfj wkjhdfns</p>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-between text-center">
                            <div className="col-6">
                                <span><FontAwesomeIcon icon={faEdit} className="eyeIcon" /> <br/> Edit</span>
                            </div>
                            <div className="col-6">
                            <span ><FontAwesomeIcon icon={faTrash} className="text-danger"/>  Delete</span>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default ExpenseList;