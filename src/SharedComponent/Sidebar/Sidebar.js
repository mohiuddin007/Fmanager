import {  faBriefcase, faChartBar, faChartLine, faChartPie, faClipboard, faDollarSign, faListAlt, faListOl, faListUl, faPaperclip, faPlus, faSyringe, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../Images/DashboardImg/Logo.png';

const Sidebar = ({setSidebarVisibility}) => {
   

const sidebarFun = () => {
    setSidebarVisibility(false)
}
    return (
        <div className="sidebar ">
            <p className="text-right" onClick={sidebarFun}>
            <FontAwesomeIcon icon={faTimes}  className="sidebarBtn"/>
            </p>
             <h5 className="mb-4"><img src={logo} className="ml-2 mr-2 img-fluid" alt=""/> Inventory</h5>
             <hr/>
             <div className="text-center">
             <button className="btn btn-light rounded-pill ml-2"><FontAwesomeIcon icon={faPlus}/> New Order</button>
             </div>
            

             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faChartBar} className="mr-3"/> Dashboard</h6>
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faListUl} className="mr-3"/> Product</h6>
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faListAlt} className="mr-3"/> Orders</h6>
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faDollarSign} className="mr-3"/> Expenses</h6>
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faBriefcase} className="mr-3"/> Companies</h6>
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faClipboard} className="mr-3"/> Report</h6> 
        
        
        </div>
    );
};

export default Sidebar;