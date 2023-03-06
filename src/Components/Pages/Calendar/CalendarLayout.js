import React, { useEffect, useState } from "react";
import Header from "../../Common components/Header/Header";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Annual Leave",
        allDay: true,
        start: new Date(2023, 2, 5),
        end: new Date(2023, 2, 7),
        backgroundColor: '#70c4f9'
    },
    {
        title: "Sickness",
        start: new Date(2023, 2, 10),
        end: new Date(2023, 2, 14),
        backgroundColor: '#e0ae2e'
    },
    {
        title: "Lateness",
        start: new Date(2023, 2, 20),
        end: new Date(2023, 2, 23),
        backgroundColor: '#d75863'
    },
];

const CalendarLayout = () => {
    const [allEvents, setAllEvents] = useState(events);

    useEffect(() => {
        setTimeout(() => {
            const AllEventList = document.querySelectorAll('.rbc-event-content');
            allEvents.map((item) => {
                AllEventList.forEach((element) => {
                    if (element.getAttribute('title') === item.title) {
                        element.style.backgroundColor = item.backgroundColor
                    }
                });
            })
        }, 100)
    })

    return (
        <>
            {/* <!-- Main Wrape Section Start Here --> */}
            <section className="dashbord-main-info">
                <div className="container-fluid main-con-padding-hide">
                    <div className="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div className="col-lg-1 p-0"></div>
                        <div className="col-lg-11">
                            <div className="row">
                                {/* <!-- Top Bar Info Section Start Here --> */}
                                <Header />
                                {/* <!-- Top Bar Info Section End Here --> */}
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-tabs calender-Tab nav-fill" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                                        type="button" role="tab" aria-controls="home" aria-selected="true">Calendar</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Pending requests</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                                        type="button" role="tab" aria-controls="contact" aria-selected="false">Mandatory leave</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content tabs-info-content-space-bar" id="myTabContent">
                                                <div className="tab-pane fade show active calendar" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="all_leave_with_color d-flex align-items-center my-3">
                                                        <span className="annual leave"></span>Annual leave
                                                        <span className="sick leave"></span>Sickness
                                                        <span className="late leave"></span>Lateness
                                                        <span className="toil leave"></span>TOIL
                                                        <span className="other_leave leave"></span>Other absence
                                                        <span className="pending_leave leave"></span>Pending
                                                    </div>
                                                    <div id='calendar'>
                                                        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 700, marginBottom: '50px' }} />
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade content-info-title" id="profile" role="tabpanel"
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
                                                    <div className="row">
                                                        <div className="col-md-6 my-2">
                                                            <div className="pending_rquest">
                                                                <div className="parent_div">
                                                                    <div className="d-flex justify-content-between">
                                                                        <div className="d-flex flex-column align-items-center justify-content-center col-md-2 date_of_shift_rota">
                                                                            <div className="short_name">KG</div>
                                                                        </div>
                                                                        <div className="col-md-10 p-2">
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <div>
                                                                                    <a href="./timeline-view.html" className="rota_shift_employee_name">Komal Gautam</a>
                                                                                </div>
                                                                                <div>
                                                                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalUnapproved" className="unapproved_btn">Unapproved</button>
                                                                                </div>
                                                                                {/* <!-- Button trigger modal --> */}
                                                                            </div>
                                                                            <div className="d-flex flex-column">
                                                                                <div className="start_end_date"><strong>Start:&nbsp;</strong>23/12/2020<strong>&nbsp;&nbsp;&nbsp;End:&nbsp;</strong>23/12/1220</div>
                                                                                <div className="pe-3">Leave for urgent work</div>
                                                                                <div className="order-1">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
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
            <div className="modal fade unapproved_modal_content" id="exampleModalUnapproved" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: '50vw' }}>
                    <div className="modal-content content-modal">
                        <div className="modal-header modal-head">
                            <h5 className="modal-title" id="exampleModalLabel"><span>Are you sure you want to approve this leave?</span></h5>
                            <button type="button" className=" close-btn" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12">
                                <p>This will show in the calendar with perticular date. Once approved, the notification will be sent to Komal Gautam.</p>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <button type="button" className="close-btn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="approve-btn">Approve</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Wrape Section End Here --> */}
        </>
    )
}

export default CalendarLayout;