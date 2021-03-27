import { faBriefcase, faChartBar, faClipboard, faDollarSign, faListAlt, faListUl, faPlus, faShoppingBasket, faSortDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../Images/DashboardImg/Logo.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ setSidebarVisibility }) => {


    const sidebarFun = () => {
        setSidebarVisibility(false)
    }
    return (
        <div className="sidebar ">
            <p className="text-right" onClick={sidebarFun}>
                <FontAwesomeIcon icon={faTimes} className="sidebarBtn" />
            </p>
            <h5 className="mb-4"><img src={logo} className="ml-2 mr-2 img-fluid" alt="" /> F-manager</h5>
            <hr />
            <div className="text-center">
                <button className="btn btn-light rounded-pill ml-2"><FontAwesomeIcon icon={faPlus} /> New Order</button>
            </div>

            <Link to="/">
                <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faChartBar} className="mr-3" /> Dashboard</h6>
            </Link>
            {/* product dropdown start */}
            <div className="dropdownWrapper">
                <h6 className="mt-5 sidebarBtn"><FontAwesomeIcon icon={faListUl} className="mr-3" /> Product <FontAwesomeIcon icon={faSortDown} /></h6>

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
            {/* product dropdown end */}

            <Link to="/sale">
                <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faShoppingBasket} className="mr-3" /> Sale</h6>
            </Link>
            <Link to="/orderStatus">
                <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faListAlt} className="mr-3" /> Orders</h6>
            </Link>

             {/* expenses dropdown start */}
            <div className="dropdownWrapper">
                <h6 className="mt-5 sidebarBtn"><FontAwesomeIcon icon={faDollarSign} className="mr-3" /> Expenses <FontAwesomeIcon icon={faSortDown} /></h6>
                <div className="dropdownContent p-2">
                    <Link to="/expense/addExpense">
                        <h6 className="mb-5 pt-2 sidebarBtn"> Add expense</h6>
                    </Link>
                    <Link to="/expense/expenseList">
                        <h6 className="mt-5 mb-2 sidebarBtn"> Expense list</h6>
                    </Link>
                </div>
            </div>
             {/* expenses dropdown end */}

            <Link to="/companies">
                <h6 className="my-5 sidebarBtn"><FontAwesomeIcon icon={faBriefcase} className="mr-3" /> Companies</h6>
            </Link>
            <Link to="/report">
                
            </Link>
            {/* report dropdown start */}
            <div className="dropdownWrapper">
            <h6 className="mt-5 sidebarBtn"><FontAwesomeIcon icon={faClipboard} className="mr-3" /> Report <FontAwesomeIcon icon={faSortDown} /></h6>
                <div className="dropdownContent p-2">
                    <Link to="/report/salesReport">
                        <h6 className=" pt-2 sidebarBtn"> Sales Report</h6>
                    </Link>
                    <Link to="/report/expenseReport">
                        <h6 className="mt-5 sidebarBtn"> Expense Report</h6>
                    </Link>
                    <Link to="/report/deliveryReport">
                        <h6 className="mt-5 sidebarBtn"> Delivery Report</h6>
                    </Link>
                    <Link to="/report/stockReport">
                        <h6 className="mt-5 mb-2 sidebarBtn"> Stock Report</h6>
                    </Link>
                </div>
            </div>
            {/* report dropdown end */}
        </div>
    );
};

export default Sidebar;