import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from "../../Common components/Header/Header";

const AddLateness = () => {
    return (
        <>
            {/* <!-- Main Wrape Section Start Here --> */}
            <section class="dashbord-main-info">
                <div class="container-fluid p-0">
                    <div class="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div class="col-lg-1 p-0"></div>
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
                                                            <input type="text" placeholder="Employees name" class="form-control"
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
                                                        <label for="select" id="textarea" class="col-sm-2 col-form-label">Notes</label>
                                                        <div class="col-sm-3 col-md-3">
                                                            <textarea name="" placeholder="Notes regarding the absence" id="textarea" cols="10" class="form-control" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <button type="button" class="absance-btn">Add absence</button>
                                                        <a class="dash-btn"> <NavLink to="/"> Back to dashboard </NavLink></a>
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
            {/* <!-- Main Wrape Section End Here --> */}
        </>
    )
}

export default AddLateness;