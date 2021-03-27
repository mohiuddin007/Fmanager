import { faArrowLeft, faBiking, faCog, faEdit, faEnvelope, faEye, faFileInvoice, faGavel, faLock, faMapMarker, faPhone, faSearch, faSlidersH, faTrash, faUniversity, faUser, faYenSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import logo from '../../Images/DashboardImg/Logo.png';
import './Companies.css';
import companyDetails from '../../Images/DashboardImg/invoice.png';
import ava from '../../Images/DashboardImg/ava.png';


const Companies = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [sidebarVisibility, setSidebarVisibility] = useState(false);

    const sidebarShow = () => {
        setSidebarVisibility(true)
    }


    const onSubmit = data => console.log(data);
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

            <div className="col-10 pl-0 pl-md-5 pb-3">
                {/* topbar design */}
                <div class="row p-3 topbarBg ">
                    <div className="col-2">
                        <span class=" text-weight-bold"><FontAwesomeIcon icon={faCog} />  Setting</span>
                    </div>
                    <div className="col-2">
                        <span class=" text-weight-bold"><FontAwesomeIcon icon={faUser} /> Profile</span>
                    </div>
                    <div className="col-2">
                        <span class=" text-weight-bold"><FontAwesomeIcon icon={faLock} /> Reset Password</span>
                    </div>
                    <div className="col-2 text-center">
                        <span class=" text-weight-bold"><FontAwesomeIcon icon={faUniversity} /> Company</span>
                    </div>
                    <div className="col-2">
                        <span class=" text-weight-bold"><FontAwesomeIcon icon={faBiking} /> Delivery</span>
                    </div>
                    <div className="col-2">
                        <span class=" text-weight-bold"><FontAwesomeIcon icon={faFileInvoice} /> Billing</span>
                    </div>
                </div>
                {/* topbar design */}

                {/* add company section design start */}
                <p><FontAwesomeIcon icon={faArrowLeft} /> Add Company</p>

                <div className="row justify-content-between">
                    <div className="col-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row justify-content-between mt-3">
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label class="form-label"> <img src={logo} className="company_logo" alt="" /> Logo</label>
                                        <input type="file" name="logo" className="form-control" ref={register({ required: true })} />
                                        {errors.logo && <span className="text-danger text-center"> Logo is required</span>}

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label class="form-label"> <FontAwesomeIcon icon={faUniversity} /> Company Name </label>
                                        <input type="text" name="company_name" className="form-control" placeholder='Company Name' ref={register({ required: true })} />
                                        {errors.company_name && <span className="text-danger text-center"> Company Name is required.</span>}

                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-3">
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label class="form-label"> <FontAwesomeIcon icon={faPhone} /> Contact Number</label>
                                        <input type="number" name="contact_number" className="form-control" placeholder="Contact Number" ref={register({ required: true })} />
                                        {errors.contact_number && <span className="text-danger text-center"> Contact Number is required</span>}

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label class="form-label"> <FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                                        <input type="text" name="email_address" className="form-control" placeholder='Email Address' ref={register({ required: true })} />
                                        {errors.email_address && <span className="text-danger text-center"> Email Address is required.</span>}

                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-between mt-3">
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label class="form-label"> <FontAwesomeIcon icon={faMapMarker} /> Business Address</label>
                                        <textarea name="business_address" row="3" className="form-control" placeholder="Business Address" ref={register({ required: true })} />
                                        {errors.business_address && <span className="text-danger text-center"> Business Address is required</span>}

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">

                                        <label class="form-label"> <FontAwesomeIcon icon={faGavel} /> Your Terms and conditions</label>
                                        <textarea name="termsAndConditions" row="3" className="form-control" placeholder="Your Terms and conditions" ref={register({ required: true })} />
                                        {errors.termsAndConditions && <span className="text-danger text-center"> Your Terms and conditions is required</span>}

                                    </div>
                                </div>
                            </div>
                            <div className="row pl-3">
                                <button className="companiesBtn px-5">Submit</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-4">
                        {/* <img src={companyDetails} className="" alt="" /> */}
                    </div>
                </div>
                {/* add company section design end */}


                {/* company list section design start  */}
                <div className="row mt-5">
                    <div className="col-4">
                        <p >
                            <FontAwesomeIcon icon={faEye} className="eyeIcon" /> Show
                            <select name="show" id="1">
                                <option value="1">10</option>
                                <option value="2">9</option>
                            </select>
                            entries
                        </p>
                    </div>
                    <div className="col-4 ml-auto">
                        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                        <input type="text" className="form-control rounded-pill searchField"
                            placeholder="Type here for search" />
                    </div>
                </div>


                <div className="row justify-content-between p-2 mt-2 font-weight-bold bgCategory">
                    <div className="col-1">
                        <p>Id</p>
                    </div>
                    <div className="col-1">
                        <p>Logo</p>
                    </div>

                    <div className="col-2">
                        <p>Name</p>
                    </div>
                    <div className="col-2 ">
                        <p>Email</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>Business Address</p>
                    </div>
                    <div className="col-2">
                        <p>Contact No.</p>
                    </div>
                    <div className="col-2">
                        <p >Action</p>
                    </div>
                </div>

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>13</p>
                    </div>
                    <div className="col-1">
                        <img src={ava} className="company_logo" alt="" />
                    </div>

                    <div className="col-2">
                        <p className="font-weight-bold">Jadore Manger</p>
                    </div>
                    <div className="col-2">
                        <p >jadore@gmail.com</p>
                    </div>
                    <div className="col-2">
                        <p>Paris,France</p>
                    </div>
                    <div className="col-2">
                        <p>0123487697</p>
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

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>14</p>
                    </div>
                    <div className="col-1">
                        <img src={logo} className="company_logo" alt="" />
                    </div>

                    <div className="col-2">
                        <p className="font-weight-bold">Islampur Market</p>
                    </div>
                    <div className="col-2">
                        <p >islampur@gmail.com</p>
                    </div>
                    <div className="col-2">
                        <p>Dhaka, Banhladesh</p>
                    </div>
                    <div className="col-2">
                        <p>0123487697</p>
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

                <div className="row justify-content-between p-2 mt-2 bgCategory">
                    <div className="col-1">
                        <p>15</p>
                    </div>
                    <div className="col-1">
                        <img src={ava} className="company_logo" alt="" />
                    </div>

                    <div className="col-2">
                        <p className="font-weight-bold">Jadore Manger</p>
                    </div>
                    <div className="col-2">
                        <p >jadore@gmail.com</p>
                    </div>
                    <div className="col-2">
                        <p>Paris,France</p>
                    </div>
                    <div className="col-2">
                        <p>0123487697</p>
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
                {/* company list section design end  */}

            </div>
        </div>
    );
};

export default Companies;