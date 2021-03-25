import {  faBriefcase, faChartBar, faClipboard, faDollarSign, faListAlt, faListUl, faPlus, faSortDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../Images/DashboardImg/Logo.png';
import { Link } from 'react-router-dom';

const Sidebar = ({setSidebarVisibility}) => {
   

const sidebarFun = () => {
    setSidebarVisibility(false)
}
    return (
        <div className="sidebar ">
            <p className="text-right" onClick={sidebarFun}>
            <FontAwesomeIcon icon={faTimes}  className="sidebarBtn"/>
            </p>
             <h5 className="mb-4"><img src={logo} className="ml-2 mr-2 img-fluid" alt=""/> F-manager</h5>
             <hr/>
             <div className="text-center">
             <button className="btn btn-light rounded-pill ml-2"><FontAwesomeIcon icon={faPlus}/> New Order</button>
             </div>
            
             <Link to="/dashboard">
                 <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faChartBar} className="mr-3"/> Dashboard</h6>
             </Link>
<div className="dropdownWrapper">
   <h6 className="mt-5 sidebarBtn"><FontAwesomeIcon icon={faListUl} className="mr-3"/> Product <FontAwesomeIcon icon={faSortDown}/></h6>
   
   <div className="dropdownContent p-2">
        <Link to="/product/addNewCategory">
            <h6 className="mb-5 pt-2 sidebarBtn"> Add new category</h6>
        </Link>
        <Link to="/product/categoryAndSubCategory">
            <h6 className="my-5 sidebarBtn"> Category and sub-category</h6>
        </Link>
        <Link to="/product/productEntry">
            <h6 className="my-5 sidebarBtn"> Product entry</h6>
        </Link>
        <Link to="/product/productList">
            <h6 className="mt-5 mb-2 sidebarBtn"> Product list</h6>
        </Link>
   </div>
   </div>


             <Link to="/orders">
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faListAlt} className="mr-3"/> Orders</h6>
             </Link>
             <Link to="/expenses">
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faDollarSign} className="mr-3"/> Expenses</h6>
             </Link>
             <Link to="/companies">
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faBriefcase} className="mr-3"/> Companies</h6>
             </Link>
             <Link to="/report">
             <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faClipboard} className="mr-3"/> Report</h6>
             </Link>
             
           
            
              
        
        
        </div>
    );
};

export default Sidebar;