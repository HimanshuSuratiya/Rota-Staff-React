import React from 'react'
import Header from "../../Common components/Header/Header";

const Calendar = () => {
    return (
        <>
            {/* <!-- Main Wrape Section Start Here --> */}
            <section class="dashbord-main-info">
                <div class="container-fluid main-con-padding-hide">
                    <div class="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div class="col-lg-1 p-0"></div>
                        <div class="col-lg-11">
                            <div class="row">
                                {/* <!-- Top Bar Info Section Start Here --> */}
                                <Header />
                                {/* <!-- Top Bar Info Section End Here --> */}
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <ul class="nav nav-tabs calender-Tab nav-fill" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                                        type="button" role="tab" aria-controls="home" aria-selected="true">Calendar</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Pending requests</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                                        type="button" role="tab" aria-controls="contact" aria-selected="false">Mandatory leave</button>
                                                </li>
                                            </ul>
                                            <div class="tab-content tabs-info-content-space-bar" id="myTabContent">
                                                <div class="tab-pane fade show active calendar" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="all_leave_with_color d-flex align-items-center my-3">
                                                        <span class="annual leave"></span>Annual leave
                                                        <span class="sick leave"></span>Sickness
                                                        <span class="late leave"></span>Lateness
                                                        <span class="toil leave"></span>TOIL
                                                        <span class="other_leave leave"></span>Other absence
                                                        <span class="pending_leave leave"></span>Pending
                                                    </div>
                                                    <div id='calendar'>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade content-info-title" id="profile" role="tabpanel"
                                                    aria-labelledby="profile-tab">
                                                    <select>
                                                        <option value="Date raised (Oldest first)">Date raised (Oldest first)</option>
                                                        <option value="Date raised (Oldest first)">Date raised (Oldest first)</option>
                                                        <option value="Date raised (Oldest first)">Date raised (Oldest first)</option>
                                                        <option value="Date raised (Oldest first)">Date raised (Oldest first)</option>
                                                        <option value="Date raised (Oldest first)">Date raised (Oldest first)</option>
                                                    </select>
                                                    <h2>Pending requests (0)</h2>
                                                    <p>Everything is up to date, have a cuppa!</p>
                                                    <div class="row">
                                                        <div class="col-md-6 my-2">
                                                            <div class="pending_rquest">
                                                                <div class="parent_div">
                                                                    <div class="d-flex justify-content-between">
                                                                        <div class="d-flex flex-column align-items-center justify-content-center col-md-2 date_of_shift_rota">
                                                                            <div class="short_name">KG</div>
                                                                        </div>
                                                                        <div class="col-md-10 p-2">
                                                                            <div class="d-flex justify-content-between align-items-center">
                                                                                <div>
                                                                                    <a href="./timeline-view.html" class="rota_shift_employee_name">Komal Gautam</a>
                                                                                </div>
                                                                                <div>
                                                                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalUnapproved" class="unapproved_btn">Unapproved</button>
                                                                                </div>
                                                                                {/* <!-- Button trigger modal --> */}
                                                                            </div>
                                                                            <div class="d-flex flex-column">
                                                                                <div class="start_end_date"><strong>Start:&nbsp;</strong>23/12/2020<strong>&nbsp;&nbsp;&nbsp;End:&nbsp;</strong>23/12/1220</div>
                                                                                <div class="pe-3">Leave for urgent work</div>
                                                                                <div class="order-1">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                    <h3>Mandatory leave</h3>
                                                    <p>Dates your employees have to take as leave such as shutdown periods, local bank holidays etc.
                                                        Once set, it will appear on employee profile as Mandatory time off as well as in the calendar.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Col Md 9 End --> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="modal fade unapproved_modal_content" id="exampleModalUnapproved" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style={{ maxWidth: '50vw' }}>
                    <div class="modal-content content-modal">
                        <div class="modal-header modal-head">
                            <h5 class="modal-title" id="exampleModalLabel"><span>Are you sure you want to approve this leave?</span></h5>
                            <button type="button" class=" close-btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-12">
                                <p>This will show in the calendar with perticular date. Once approved, the notification will be sent to Komal Gautam.</p>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="close-btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="approve-btn">Approve</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Wrape Section End Here --> */}
        </>
    )
}

export default Calendar;