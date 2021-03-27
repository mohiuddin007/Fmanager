import { faEnvelope, faLandmark, faMapMarkerAlt, faPhone, faPlus, faSlidersH, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';
import './Sale.css';

const Sale = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const topbarTitle = "Billing & Shipping Detail";
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

            <div className="col-10 pl-0 pl-md-5">
                <Topbar topbarTitle={topbarTitle} />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-between mt-3">
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold"> <FontAwesomeIcon icon={faUser} /> Customers Name</label>
                                <input type="text" name="customers_name" className="form-control" placeholder='Customer name' ref={register({ required: true })} />
                                {errors.customers_name && <span className="text-danger text-center"> Customers name is required</span>}

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold"> <FontAwesomeIcon icon={faPhone} /> Contact Number </label>
                                <input type="number" name="contact_number" className="form-control" placeholder='Contact Number' ref={register({ required: true })} />
                                {errors.contact_number && <span className="text-danger text-center"> Contact Number is required.</span>}

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold">  <FontAwesomeIcon icon={faEnvelope} /> Email Address</label>

                                <input type="email" name="email" className="form-control" placeholder='Email Address' ref={register({ required: true })} />
                                {errors.email && <span className="text-danger text-center"> Email Address is required.</span>}

                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between mt-3">
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold"> <FontAwesomeIcon icon={faLandmark} /> Select Company</label>
                                <select name="" id="" className="form-control">
                                    <option value="company">Company</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Select District </label>
                                <select name="" id="" className="form-control">
                                    <option value="cumilla">Cumilla</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form- font-weight-bold"><FontAwesomeIcon icon={faMapMarkerAlt} /> Details Address </label>
                                <input type="text" name="details_address" className="form-control" placeholder='Details Address' ref={register({ required: true })} />
                                {errors.details_address && <span className="text-danger text-center"> Details Address is required.</span>}

                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between mt-3">
                        <div className="col-md-2">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold"> Product name </label>
                                <input type="text" name="product_name" className="form-control" placeholder='Product name' ref={register({ required: true })} />
                                {errors.product_name && <span className="text-danger text-center"> Product name is required.</span>}

                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold"> SKU</label>
                                <input type="text" name="sku" className="form-control" placeholder='SKU' ref={register({ required: true })} />
                                {errors.sku && <span className="text-danger text-center"> Quantity is required.</span>}

                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold"> Quantity </label>
                                <input type="number" name="quantity" className="form-control" placeholder='Quantity' ref={register({ required: true })} />
                                {errors.quantity && <span className="text-danger text-center"> Quantity is required.</span>}

                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold">Price/Piece </label>
                                <input type="text" name="price" className="form-control" placeholder='Price/Piece' ref={register({ required: true })} />
                                {errors.price && <span className="text-danger text-center"> Price/Piece is required.</span>}

                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="mb-3">

                                <label class="form-label font-weight-bold">Total Price </label>
                                <div className="row">
                                    <span>$120</span>
                                    <span><FontAwesomeIcon icon={faTrash} className="text-danger ml-4" /></span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="commonBtnOutline ml-3"><FontAwesomeIcon icon={faPlus} /> Add More</button>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 ml-auto">
                            <div className="row">
                                <div className="col-6">
                                    <p>Subtotal</p>
                                </div>
                                <div className="col-6 text-center">
                                    <p>120</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p>Delivery Charge</p>
                                </div>
                                <div className="col-6 text-center">
                                    <p className="text_border">120</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p>Discount / Adjustment</p>
                                </div>
                                <div className="col-6 text-center">
                                    <p>120</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="font-weight-bold">Total</p>
                                </div>
                                <div className="col-6 text-center">
                                    <p className="font-weight-bold">120</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p>Advance Paid</p>
                                </div>
                                <div className="col-6 text-center">
                                    <p className="text_border">120</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p>Due</p>
                                </div>
                                <div className="col-6 text-center">
                                    <p>120</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="saleBtn w-100 px-5">Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Sale;