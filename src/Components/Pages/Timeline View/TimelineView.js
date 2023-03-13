import React from 'react'
import Header from '../../Common components/Header/Header';

const TimelineView = () => {

    const next = (id) => {
        let bg = document.getElementById('bg' + id.count);
        let currentForm = document.getElementById(id.form + id.count);
        let nextForm = document.getElementById(id.form + parseInt((id.count + 1)));
        setTimeout(() => {
            currentForm.style.display = 'none';
            nextForm.style.display = 'block';
            bg.style = 'none';
        }, 200);
    }

    const back = (id) => {
        let bg = document.getElementById('bg' + parseInt(id.count - 1));
        let currentForm = document.getElementById(id.form + id.count);
        let prevForm = document.getElementById(id.form + parseInt((id.count - 1)));
        setTimeout(() => {
            currentForm.style.display = 'none';
            prevForm.style.display = 'block';
            bg.style.color = '#999';
            bg.style.backgroundColor = '#fff';
        }, 200);
    }

    return (
        <>
            <section className="dashbord-main-info">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div className="col-lg-1 p-0"></div>
                        <div className="col-lg-11">
                            <div className="row">
                                {/* <!-- Top Bar Info Section Start Here --> */}
                                <Header />
                                {/* <!-- Top Bar Info Section End Here --> */}
                                <div className="container" id="timeline">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="rota_name">
                                                <p className="breadcrum"> <a href="./rota-planner.html"> <span className="rota-link">
                                                    All Rota</span> </a>{` > test `}</p>
                                                <h3>Test</h3>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="date-info">
                                                    <p>Wed, 11 Jan 2023 - Tue, 17 Jan 2023 | 7 days | 0 staff members</p>
                                                </div>
                                                <div className="shift-patern">
                                                    <div className="select-shift">
                                                        Show shifts for:
                                                        <input type="radio" className="input_custom_btn" id="everyone"
                                                            name="select" />
                                                        <div className="label">
                                                            <label for="everyone" className="label_custom every">Everyone</label>
                                                        </div>
                                                        <input type="radio" id="me" className="input_custom_btn" name="select" />
                                                        <div className="label">
                                                            <label for="me" className="label_custom me">Me</label>
                                                        </div>
                                                        <input type="radio" id="specific" className="input_custom_btn"
                                                            name="select" />
                                                        <div className="label">
                                                            <label for="specific" className="label_custom specific">Specific
                                                                people...</label>
                                                        </div>
                                                    </div>
                                                    <div className="select-yes-no">
                                                        Show notes:
                                                        <input type="radio" className="input_custom_btn" id="yes" name="yes_no" />
                                                        <div className="label">
                                                            <label for="yes" className="label_custom yes">Yes</label>
                                                        </div>
                                                        <input type="radio" id="no" className="input_custom_btn" name="yes_no" />
                                                        <div className="label">
                                                            <label for="no" className="label_custom no">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="d-none">
                                                    <p>Once a shift has been added you can publish this rota.</p>
                                                </div>
                                                <div className="d-flex print_and_publish_button">
                                                    <div>
                                                        {/* <!-- Button trigger modal --> */}
                                                        <button type="button" className="publish_btn" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModalPublish">
                                                            Publish
                                                        </button>
                                                        {/* <!-- Modal --> */}
                                                        <div className="modal fade" id="exampleModalPublish" tabIndex="-1"
                                                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Are
                                                                            you sure you want to publish this rota?</h1>
                                                                        <button type="button" className="modal_close_btn"
                                                                            data-bs-dismiss="modal" aria-label="Close"> &#10006;
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <div className="publish_modal">
                                                                            <div className="content_publish_rota">This will show
                                                                                test to your employees. They will be able to see
                                                                                their shifts and absence conflicts.</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-footer justify-content-between">
                                                                        <button type="button" className="cancel_btn"
                                                                            data-bs-dismiss="modal">Close</button>
                                                                        <button type="button" className="publish_btn_footer">Save
                                                                            changes</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" className="print_btn" onClick={() => { window.print() }}>Print
                                                            rota</button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center drag-table-link">
                                                    <a href="#"><i className="fa fa-clone"></i> Drag and drop view</a>
                                                    <a href="#"><i className="fa fa-calendar"></i> Table view</a>
                                                </div>
                                            </div>
                                            <div className="d-flex time-for-shift">
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(161, 169, 179)' }}>
                                                    0:00
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(161, 169, 179)' }}>
                                                    4:00</div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(161, 169, 179)' }}>
                                                    8:00</div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(161, 169, 179)' }}>
                                                    12:00</div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(161, 169, 179)' }}>
                                                    16:00</div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid #e8eaec', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(161, 169, 179)' }}>
                                                    20:00</div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                                <div className="add-color"
                                                    style={{ borderBottom: '1px solid rgb(232, 234, 236)', width: 'calc(4.16667%)', borderLeft: '1px solid rgb(232, 234, 236)' }}>
                                                </div>
                                            </div>
                                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                            aria-controls="panelsStayOpen-collapseOne">
                                                            Wed 11 Jan 2023 - Tue 17 Jan 2023
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse"
                                                        aria-labelledby="panelsStayOpen-headingOne">
                                                        <div className="accordion-body">
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift"> Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="w_full d-ne">
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                <div className="hour_box" style={{ width: 'calc(4.16667%)' }}>
                                                                </div>
                                                                {/* <!-- Button shift modal --> */}
                                                                <button type="button" className="shift_timing_btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModalShiftModal"
                                                                    style={{ width: '33.3333%', left: '37.5%' }} data-testid="Shift card">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="">
                                                                            <div className="name_of_member">
                                                                                <div className="">KW</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="name_of_person">Karen Wood</div>
                                                                                <div className="shift_timeing_duration">09:00 -
                                                                                    17:00</div>
                                                                            </div>
                                                                            <div className=""></div>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift">
                                                                        Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift">
                                                                        Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift">
                                                                        Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift">
                                                                        Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift">
                                                                        Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift">
                                                                        Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div className="date-of-shift">
                                                                    <strong>Wed 11 Jan</strong>
                                                                </div>
                                                                <div className="amount-of-shift">
                                                                    <p>0 shifts</p>
                                                                </div>
                                                                <div className="add-shift-btn">
                                                                    {/* <!-- Button trigger modal --> */}
                                                                    <button type="button" className="modal-btn"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModalAddShift">
                                                                        Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Add Shift Modal --> */}
            <div className="modal fade addShift" id="exampleModalAddShift" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" style={{ display: 'block', maxWidth: '800px' }}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container remove-padding M-right" id="multiForm" style={{ display: 'block' }}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="follow-step">
                                            <ul className="employees-detail d-flex">
                                                <li className="Employees-details detail">
                                                    <span className="s-font">Create shift</span>
                                                </li>
                                                <li className="Address-details detail" id="bg1"
                                                    style={{ color: 'rgb(153, 153, 153)', backgroundColor: 'rgb(255, 255, 255)' }}>
                                                    <span className="s-font">Assign Employees</span>
                                                </li>
                                                <li className="Employment-details detail" id="bg2"
                                                    style={{ color: 'rgb(153, 153, 153)', backgroundColor: 'rgb(255, 255, 255)' }}>
                                                    <span className="s-font">Summary</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="row" id="form1" style={{ display: 'block' }}>
                                            <div className="col-md-12">
                                                <div className="employees-info">
                                                    <div className="add-margin col-md-12">
                                                        <h4>Create new shift</h4>
                                                        <span className="date-of-weak-shift">Saturday 04 February 2023</span>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12" id="showDiv">
                                                            <form className="employees-data" onsubmit="return validateform()">
                                                                <div className="row">
                                                                    <label for="firstName" className="col-sm-2 col-form-label">Shift
                                                                        time</label>
                                                                    <div className="col-auto">
                                                                        <input type="time" className="col-sm-2 form-control"
                                                                            id="firstName" aria-describedby="emailHelp"
                                                                            value="9:00" placeholder="" />
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <span className="btew-time">to</span>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <input type="time" className="col-sm-2 form-control"
                                                                            id="firstName" value="9:00"
                                                                            aria-describedby="emailHelp" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <label for="lastName" className="col-sm-2 col-form-label">Break
                                                                        duration</label>
                                                                    <div className="col-auto">
                                                                        <input type="time" className="form-control" id="lastName"
                                                                            placeholder="Last name" />
                                                                        <p id="lastNamError">
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <label for="emailAdd" className="col-sm-2 col-form-label">Add a
                                                                        note</label>
                                                                    <div className="col-md-4">
                                                                        <textarea name="" className="form-control" id="" cols="40"
                                                                            rows="5"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <p>This shift is <strong>8 hour with no break </strong></p>
                                                                </div>
                                                                <div className="form-group col-md-12 d-flex justify-content-end">
                                                                    <button type="button" id="next1"
                                                                        onClick={() => { next({ id: 'next', form: 'form', count: 1 }) }}
                                                                        className="save-btn">Next
                                                                        step</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container remove-padding">
                                            <div className="row" id="form2" style={{ display: 'none' }}>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <h4>Assign employees to Fri 20 Jan, 09:00-17:00</h4>
                                                            <span className="date-of-weak-shift">Find an employee or a team</span>
                                                        </div>
                                                        <div className="col-sm-3 col-md-4">
                                                            <select className="form-select form-control"
                                                                aria-label="Default select example">
                                                                <option selected="" value="1">Search by name
                                                                </option>
                                                                <option value="2">Search by
                                                                    group</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-3 col-md-4">
                                                            <input type="text" className="form-control" placeholder="Enter name" />
                                                        </div>
                                                        <div className="col-md-4 d-flex justify-content-end">
                                                            <button type="button" className="select-employee">Select
                                                                all</button>
                                                            <button type="button" className="select-employee">Deselect
                                                                all</button>
                                                        </div>
                                                    </div>
                                                    <div className="row employee-name my-4">
                                                        <div className="col-md-6">
                                                            <input type="checkbox" className="custom_checkbox"
                                                                id="select_checkbox_1" />
                                                            <label for="select_checkbox_1" className="name">
                                                                <p>Adam Woods</p>
                                                                <p className="select_tick">
                                                                    <span className="right_tick"><i className="fa fa-check"
                                                                        aria-hidden="true"></i></span>
                                                                </p>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="checkbox" className="custom_checkbox"
                                                                id="select_checkbox_2" />
                                                            <label for="select_checkbox_2" className="name">
                                                                <p>Adam Woods</p>
                                                                <p className="select_tick">
                                                                    <span className="right_tick"><i className="fa fa-check"
                                                                        aria-hidden="true"></i></span>
                                                                </p>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="checkbox" className="custom_checkbox"
                                                                id="select_checkbox_3" />
                                                            <label for="select_checkbox_3" className="name">
                                                                <p>Adam Woods</p>
                                                                <p className="select_tick">
                                                                    <span className="right_tick"><i className="fa fa-check"
                                                                        aria-hidden="true"></i></span>
                                                                </p>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="checkbox" className="custom_checkbox"
                                                                id="select_checkbox_4" />
                                                            <label for="select_checkbox_4" className="name">
                                                                <p>Adam Woods</p>
                                                                <p className="select_tick">
                                                                    <span className="right_tick"><i className="fa fa-check"
                                                                        aria-hidden="true"></i></span>
                                                                </p>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="checkbox" className="custom_checkbox"
                                                                id="select_checkbox_5" />
                                                            <label for="select_checkbox_5" className="name">
                                                                <p>Adam Woods</p>
                                                                <p className="select_tick">
                                                                    <span className="right_tick"><i className="fa fa-check"
                                                                        aria-hidden="true"></i></span>
                                                                </p>
                                                            </label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="checkbox" className="custom_checkbox"
                                                                id="select_checkbox_6" />
                                                            <label for="select_checkbox_6" className="name">
                                                                <p>Adam Woods</p>
                                                                <p className="select_tick">
                                                                    <span className="right_tick"><i className="fa fa-check"
                                                                        aria-hidden="true"></i></span>
                                                                </p>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <p>This shift has<strong> 1 employee </strong>working <strong>8
                                                            hrs</strong></p>
                                                    </div>
                                                    <div className="address-detail">
                                                        <div className="row my-2">
                                                            <div className="col-md-12 d-flex justify-content-end">
                                                                <div className="previous m-2">
                                                                    <button type="button" id="back1"
                                                                        onClick={() => { back({ id: 'back', form: 'form', count: 2 }) }}
                                                                        className="previous_btn">Back</button>
                                                                </div>
                                                                <div className="continue_save m-2">
                                                                    <button type="button" className="continue_btn" id="next2"
                                                                        onClick={() => { next({ id: 'next', form: 'form', count: 2 }) }}>
                                                                        Next step
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container remove-padding">
                                            <div className="row" id="form3" style={{ display: 'none' }}>
                                                <div className="col-md-12">
                                                    <div className="employment-details">
                                                        <div className="row my-2">
                                                            <div className="col-md-12">
                                                                <h4>Shift summary</h4>
                                                                <p>Shift will be created for <strong> Fri 20 Jan,
                                                                    09:00-17:00.</strong></p>
                                                            </div>
                                                            <div className="col-md-12 d-flex justify-content-end">
                                                                <div className="previous m-2">
                                                                    <button type="button" id="back2"
                                                                        onClick={() => { back({ id: 'back', form: 'form', count: 3 }) }}
                                                                        className="previous_btn">Back</button>
                                                                </div>
                                                                <div className="continue_save m-2">
                                                                    <button type="button" className="continue_btn" id="next4" onClick={() => { next({ id: 'next', form: 'form', count: 3 }) }}
                                                                    >Add shift
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn-footer-modal" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Add Shift Modal --> */}

            {/* <!-- shift timing  Modal --> */}
            <div className="modal fade" id="exampleModalShiftModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" style={{ maxWidth: '50rem' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Shift details</h1>
                            <button type="button" className="btn_close" data-bs-dismiss="modal" aria-label="Close">&#10006;</button>
                        </div>
                        <div className="modal-body">
                            <div className="container remove-padding M-right" id="multiForm" style={{ display: 'block' }}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="row" id="form1" style={{ display: 'block' }}>
                                            <div className="col-md-12">
                                                <div className="employees-info">
                                                    <div className="row">
                                                        <div className="col-md-12" id="showDiv">
                                                            <form className="employees-data" onsubmit="return validateform()">
                                                                <div className="row my-2">
                                                                    <label for="assign_work"
                                                                        className="col-sm-3 col-form-label">Assigned worker</label>
                                                                    <div className="col-sm-4">
                                                                        <select name="" id="" className="form-select form-control">
                                                                            <option value="person_name1">Jack</option>
                                                                            <option value="person_name2">Jack</option>
                                                                            <option value="person_name3">Jack</option>
                                                                            <option value="person_name4">Jack</option>
                                                                            <option value="person_name5">Jack</option>
                                                                            <option value="person_name6">Jack</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="row my-2">
                                                                    <label for="date_of_shift"
                                                                        className="col-sm-3 col-form-label">Shift day</label>
                                                                    <div className="col-md-4">
                                                                        <input type="date" className="form-control"
                                                                            id="date_of_shift" />
                                                                    </div>
                                                                </div>
                                                                <div className="row my-2">
                                                                    <label for="firstName" className="col-sm-3 col-form-label">Shift
                                                                        time</label>
                                                                    <div className="col-auto">
                                                                        <input type="time" className="col-sm-2 form-control"
                                                                            id="firstName" aria-describedby="emailHelp"
                                                                            value="9:00" placeholder="" />
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <span className="btew-time">to</span>
                                                                    </div>
                                                                    <div className="col-auto">
                                                                        <input type="time" className="col-sm-2 form-control"
                                                                            id="firstName" value="9:00"
                                                                            aria-describedby="emailHelp" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="row my-2">
                                                                    <label for="lastName" className="col-sm-3 col-form-label">Break
                                                                        duration</label>
                                                                    <div className="col-auto">
                                                                        <input type="time" className="form-control" id="lastName"
                                                                            placeholder="Last name" />
                                                                        <p id="lastNamError"></p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <label for="emailAdd" className="col-sm-12">Add a note</label>
                                                                    <div className="col-md-12">
                                                                        <textarea name="" className="form-control" id="" cols="40"
                                                                            rows="3"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <small className="my-2">Notes are visible to everyone</small>
                                                                    <div className="d-flex col-md-4 align-items-center my-3">
                                                                        <b>On this day</b>
                                                                    </div>
                                                                    <div className="col-md-4 my-3"
                                                                        style={{ opacity: '0.7', fontWeight: '500' }}>No event on this
                                                                        day</div>
                                                                    <p>This shift is <strong>8 hour with no break </strong></p>
                                                                </div>
                                                                <div className="form-group col-md-12 d-flex justify-content-end">
                                                                    <button type="button"
                                                                        className="delete_modal_btn">Delete</button>
                                                                    <button type="button" id="next1"
                                                                        onclick="next({id:'next',form:'form',count:1})"
                                                                        className="save-btn">Update shift</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" className="close_modal_btn" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimelineView;