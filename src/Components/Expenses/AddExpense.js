import { faCalendarAlt, faCoins, faCreditCard, faNotEqual, faSlidersH, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../SharedComponent/Sidebar/Sidebar';
import Topbar from '../../SharedComponent/Topbar/Topbar';
import './Expense.css';

const AddExpense = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const topbarTitle = "Add Expense";
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

                                <label class="form-label"> <FontAwesomeIcon icon={faUser} /> Expense Cause</label>
                                <input type="text" name="name" className="form-control" placeholder='Customer name' ref={register({ required: true })} />
                                {errors.name && <span className="text-danger text-center"> Expense cause is required</span>}

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label"> <FontAwesomeIcon icon={faCoins} /> Amount </label>
                                <input type="text" name="amount" className="form-control" placeholder='Customer name' ref={register({ required: true })} />
                                {errors.amount && <span className="text-danger text-center"> Amount is required.</span>}

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label">  <FontAwesomeIcon icon={faCreditCard} /> Payment way</label>
                                <select name="" id="" className="form-control">
                                    <option value="cash">Cash</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label"> <FontAwesomeIcon icon={faCalendarAlt} /> Date</label>
                                <input type="date" name="date" className="form-control" placeholder='Date' ref={register({ required: true })} />
                                {errors.date && <span className="text-danger text-center"> Date is required</span>}

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">

                                <label class="form-label"> <FontAwesomeIcon icon={faStickyNote} /> Note </label>
                                <input type="text" name="note" className="form-control" placeholder='Note' ref={register({ required: false })} />
                                {/* {errors.note && <span className="text-danger text-center"> Amount is required.</span>} */}

                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="addExpenseBtn px-5">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default AddExpense;