import React from 'react'
import Header from "../../Common components/Header/Header";
import { NavLink } from 'react-router-dom';

const AddSickness = () => {
    return (
        <>
            <section class="dashbord-main-info">
                <div class="container-fluid p-0">
                    <div class="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div class="col-lg-1 p-0"> </div>
                        <div class="col-lg-11">
                            <div class="row">
                                {/* <!-- Top Bar Info Section Start Here --> */}
                                <Header />
                                {/* <!-- Top Bar Info Section End Here --> */}
                                {/* <!-- Working Pattern form start from here --> */}
                                <div class="container">
                                    <div class="row working-time-pattern annual-leave">
                                        <div class="col-md-12">
                                            <div class="heading">
                                                <h3 class="head">Add annual leave for michael</h3>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <form action="">
                                                <div class="col-md-12 first-section">
                                                    <div class="mb-3 row">
                                                        <label for="name" class="col-sm-2 col-form-label">Employee</label>
                                                        <div class="col-sm-3 col-md-3 position-rel">
                                                            <input type="text" onchange="change(this)" placeholder="Employees name" class="form-control"
                                                                id="staticEmail" value="" />
                                                            <span class="position-abs"><i class="fa fa-search" aria-hidden="true"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 row">
                                                        <label for="static" class="col-sm-2 col-form-label">Absence type</label>
                                                        <div class="col-sm-3 col-md-3">
                                                            <select class="form-select form-control"
                                                                aria-label="Default select example">
                                                                <option selected value="1">Annual leave</option>
                                                                <option value="2">Sickness </option>
                                                                <option value="3">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 row">
                                                        <label for="name" class="col-sm-2 col-form-label">Start</label>
                                                        <div class="col-sm-3 col-md-3">
                                                            <input type="date" placeholder="Pattern Name" class="form-control"
                                                                id="staticEmail" value="" />
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 row">
                                                        <label for="name" class="col-sm-2 col-form-label">End</label>
                                                        <div class="col-sm-3 col-md-3">
                                                            <input type="date" placeholder="Select date" class="form-control"
                                                                id="staticEmail" value="" />
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 row">
                                                        <label for="" class="col-sm-2 col-form-label">Ongoing absence
                                                            <span class="position-rel tooltip_custom">
                                                                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16" width="16" viewBox="0 0 32 32" style={{ verticalAlign: 'middle' }}><path d="M13 13s2.6-.012 3.025 0c.825.012 1.475.725 1.475 1.55v8.887c0 .825-.65 1.538-1.475 1.55a1.502 1.502 0 0 1-1.525-1.5v-7.5H13c-.825 0-1.5-.675-1.5-1.5s.675-1.488 1.5-1.488zm3-13C7.175 0 0 7.175 0 16s7.175 16 16 16 16-7.175 16-16S24.825 0 16 0zm0 29C8.838 29 3 23.163 3 16S8.838 3 16 3s13 5.838 13 13-5.837 13-13 13zm1.5-20.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 17.5 8.5z"></path></svg>
                                                                <span class="position-abs">
                                                                    <div>
                                                                        <p>An ongoing absence spans across multiple days. Set an absence as ongoing when you are unsure when the employee will return.</p>
                                                                    </div>
                                                                </span>
                                                            </span>
                                                        </label>
                                                        <div class="col-sm-3 col-md-3">
                                                            <input type="radio" id="sickLeaveYes" class="d-none custom_radio_input" name="ongoingLeave" />
                                                            <label for="sickLeaveYes" class="custom_label">
                                                                <span class="parent_custom_radio">
                                                                    <span class="d-flex align-items-center justify-content-center custom_radio"></span>
                                                                </span>
                                                                Yes
                                                            </label>
                                                            <input type="radio" id="sickLeaveNo" class="d-none custom_radio_input" name="ongoingLeave" checked />
                                                            <label for="sickLeaveNo" class="custom_label">
                                                                <span class="parent_custom_radio">
                                                                    <span class="d-flex align-items-center justify-content-center custom_radio"></span>
                                                                </span>
                                                                No
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 row">
                                                        <label for="select" id="textarea" class="col-sm-2 col-form-label">Notes</label>
                                                        <div class="col-sm-3 col-md-3">
                                                            <textarea name="" placeholder="Notes regarding the absence" id="textarea" cols="10" class="form-control" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <button type="button" class="absance-btn">Add absence</button>
                                                        <a class="dash-btn"><NavLink to="/"> Back to dashboard </NavLink></a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Working Pattern form end here --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddSickness;