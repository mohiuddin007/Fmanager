import { faCalendarAlt, faEdit, faEye, faSearch, faSlidersH, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';

const ExpenseReport = () => {
    const topbarTitle = "Expense Report";
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
                             <option value="Expense type">Expense Type</option>
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

                {/* Expense report list */}
                <div className="row justify-content-between p-2 mt-2 font-weight-bold bgCategory">
                    <div className="col-1">
                        <p>Id</p>
                    </div>
                    <div className="col-2">
                        <p className="dateTime">Date & Time</p>
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

                <div className="row justify-content-between p-2 mt-2 font-weight-bold bgCategory">
                    <div className="col-1">
                        <p>12</p>
                    </div>
                    <div className="col-2">
                    <p >
                            12.01.20 <br /> 10.23pm
                        </p>
                    </div>

                    <div className="col-2">
                        <p>Labour</p>
                    </div>
                    <div className="col-1 ">
                        <p>$400</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>Cash</p>
                    </div>
                    <div className="col-2">
                        <p>skjdfskdjf ksdfjjhf dfjd</p>
                    </div>
                    <div className="col-2">
                        <div className="row justify-content-between text-center">
                            <div className="col-6">
                                <span><FontAwesomeIcon icon={faEdit} className="eyeIcon" /> <br /> Edit</span>
                            </div>
                            <div className="col-6">
                                <span ><FontAwesomeIcon icon={faTrash} className="text-danger" />  Delete</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Expense report list */}
            </div>
        </div>
    );
};

export default ExpenseReport;