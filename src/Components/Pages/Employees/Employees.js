import React from 'react'
import Header from '../../Common components/Header/Header'

const Employees = () => {

    const next = (id) => {
        let bg = document.getElementById('bg' + id.count)
        let currentForm = document.getElementById(id.form + id.count);
        let nextForm = document.getElementById(id.form + parseInt((id.count + 1)));
        setTimeout(() => {
            currentForm.style.display = 'none';
            nextForm.style.display = 'block';
            bg.style = 'none';
        }, 200);
    }

    const back = (id) => {
        let bg = document.getElementById('bg' + parseInt(id.count - 1))
        let currentForm = document.getElementById(id.form + id.count);
        let prevForm = document.getElementById(id.form + parseInt((id.count - 1)));
        setTimeout(() => {
            currentForm.style.display = 'none';
            prevForm.style.display = 'block';
            bg.style.color = '#999';
            bg.style.backgroundColor = '#fff';
        }, 200);
    }

    const hide = () => {
        var modal_one = document.getElementById('show');
        var modal_two = document.getElementById('hide');
        if (modal_two.style.display === "none") {
            modal_two.style.display = "block";
            modal_one.style.display = "none";
        } else {
            modal_two.style.display = "none";
            modal_one.style.display = "block";
        }
    }

    const back_Modal = () => {
        var modal_one = document.getElementById('show');
        var modal_two = document.getElementById('hide');
        if (modal_two.style.display === "block") {
            modal_two.style.display = "none";
            modal_one.style.display = "block";
        } else {
            modal_two.style.display = "none";
            modal_one.style.display = "block";
        }
    }

    const multiEmployees = () => {
        var formstep = document.getElementById('multiForm');
        var canclestep = document.getElementById('multiEmployee');
        if (formstep.style.display === "none") {
            formstep.style.display = "block";
            canclestep.style.display = "none";
        } else {
            formstep.style.display = "none";
            canclestep.style.display = "block";
        }
    }

    const closeMultiEmployee = () => {
        var formstep = document.getElementById('multiForm');
        var canclestep = document.getElementById('multiEmployee');
        if (formstep.style.display === "block") {
            formstep.style.display = "none";
            canclestep.style.display = "block";
        }
    }

    return (
        <>
            <section className="dashbord-main-info">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        {/* Left Side Bar Section Start Here */}
                        <div className="col-lg-1 p-0">
                        </div>
                        <div className="col-lg-11">
                            <div className="row">
                                {/* Top Bar Info Section Start Here */}
                                <Header />
                                {/* Top Bar Info Section End Here
                                Working Pattern form start from here */}
                                <div className="container">
                                    <div className="row working-time-pattern">
                                        <div className="col-md-12">
                                            <div className="heading">
                                                <h3 className="head">Employee hub</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <div className="tab-btn">
                                                    <ul className="nav nav-tabs nav-fill" id="myTab">
                                                        <li className="nav-item"><a href="#tabOne" data-bs-toggle="tab"
                                                            className="link-nav">Employees</a></li>
                                                        {/* <li className="nav-item"><a href="#tabTwo" data-bs-toggle="tab"
                                                            className="link-nav">COVID-19 Vaccinated employees</a></li> */}
                                                        <li className="nav-item"><a href="#tabThree" data-bs-toggle="tab"
                                                            className="link-nav active">Manage teams</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane fade" id="tabOne">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="d-flex btn-s justify-content-between my-4">
                                                                        <div className="" id="multiEmployee">
                                                                            <button type="button" onClick={multiEmployees}
                                                                                className="add-employe">Add a new
                                                                                employee</button>
                                                                            <button type="button" className="add-mult-employe">Add
                                                                                multiple employees</button>
                                                                        </div>
                                                                        <div className="container remove-padding M-right"
                                                                            id="multiForm" style={{ display: 'none' }}>
                                                                            <div className="row">
                                                                                <div className="col-md-12">
                                                                                    <div className="follow-step">
                                                                                        <ul className="employees-detail d-flex">
                                                                                            <li
                                                                                                className="Employees-details detail">
                                                                                                <span className="s-font">Employees
                                                                                                    details</span>
                                                                                            </li>
                                                                                            <li className="Address-details detail"
                                                                                                id="bg1"
                                                                                                style={{ backgroundColor: '#fff', color: '#999' }}>
                                                                                                <span className="s-font">Employee
                                                                                                    type</span>
                                                                                            </li>
                                                                                            <li className="Employment-details detail"
                                                                                                id="bg2"
                                                                                                style={{ backgroundColor: '#fff', color: '#999' }}>
                                                                                                <span className="s-font">Working
                                                                                                    hours</span>
                                                                                            </li>
                                                                                            <li className="Employee-setup detail"
                                                                                                id="bg3"
                                                                                                style={{ backgroundColor: '#fff', color: '#999' }}>
                                                                                                <span className="s-font">Annual
                                                                                                    leave
                                                                                                    entitlement</span>
                                                                                            </li>
                                                                                            <li className="done detail" id="bg4"
                                                                                                style={{ backgroundColor: '#fff', color: '#999' }}>
                                                                                                <span
                                                                                                    className="s-font">Summary</span>
                                                                                            </li>
                                                                                            <li className="done detail" id="bg5"
                                                                                                style={{ backgroundColor: '#fff', color: '#999' }}>
                                                                                                <span className="s-font">Done</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                    <div className="row" id="form1">
                                                                                        <div className="col-md-12">
                                                                                            <div className="employees-info">
                                                                                                <div
                                                                                                    className="add-margin col-md-12">
                                                                                                    <h5>Add a new employee</h5>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                    <div className="col-md-12"
                                                                                                        id="showDiv">
                                                                                                        <form
                                                                                                            className="employees-data"
                                                                                                            onsubmit="return validateform()">
                                                                                                            <div className="row">
                                                                                                                <label
                                                                                                                    for="firstName"
                                                                                                                    className="col-sm-2 col-form-label">First
                                                                                                                    name</label>
                                                                                                                <div
                                                                                                                    className="col-sm-3">
                                                                                                                    <input
                                                                                                                        type="text"
                                                                                                                        className="form-control"
                                                                                                                        id="firstName"
                                                                                                                        aria-describedby="emailHelp"
                                                                                                                        placeholder="First name" />
                                                                                                                    <p
                                                                                                                        id="nameError">
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <label
                                                                                                                    for="lastName"
                                                                                                                    className="col-sm-2 col-form-label">Last
                                                                                                                    name</label>
                                                                                                                <div
                                                                                                                    className="col-md-3">
                                                                                                                    <input
                                                                                                                        type="text"
                                                                                                                        className="form-control"
                                                                                                                        id="lastName"
                                                                                                                        placeholder="Last name" />
                                                                                                                    <p
                                                                                                                        id="lastNamError">
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <label
                                                                                                                    for="emailAdd"
                                                                                                                    className="col-sm-2 col-form-label">Email</label>
                                                                                                                <div
                                                                                                                    className="col-md-3">
                                                                                                                    <input
                                                                                                                        type="email"
                                                                                                                        placeholder="Email"
                                                                                                                        className="form-control"
                                                                                                                        id="emailAdd"
                                                                                                                        value="" />
                                                                                                                    <p
                                                                                                                        id="emailError">
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <label
                                                                                                                    id="firstDate"
                                                                                                                    className="col-sm-2 col-form-label">Employment
                                                                                                                    start
                                                                                                                    date</label>
                                                                                                                <div
                                                                                                                    className="col-md-3">
                                                                                                                    <input
                                                                                                                        type="date"
                                                                                                                        className="form-control"
                                                                                                                        id="firstDate" />
                                                                                                                    <p
                                                                                                                        id="startDate">
                                                                                                                    </p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="form-group col-md-3 d-flex align-items-center">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    id="next1"
                                                                                                                    onClick={() => { next({ id: 'next', form: 'form', count: 1 }) }}
                                                                                                                    className="save-btn">Next
                                                                                                                    step</button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    id="saveBtn"
                                                                                                                    onClick={closeMultiEmployee}
                                                                                                                    className="cancel_btn">cancel</button>
                                                                                                            </div>
                                                                                                        </form>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        {/* <div className="col-md-12 my-4">
                                                                                            <form onsubmit="event.preventDefault();" className="add-empoly-form">
                                                                                                <div className="form-inline row">
                                                                                                    <div className="form-group">
                                                                                                        <label for="name">Sort By</label>
                                                                                                        <div className="inline">
                                                                                                            <input type="text" id="name" placeholder="First name">
                                                                                                                <span className="search_icon"><i className="fa fa-search"
                                                                                                                    aria-hidden="true"></i></span>
                                                                                                        </div>
                                                                                                        <button id="" onclick="showhide()" className="add-employ-btn"> Add
                                                                                                            new employee</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </form>
                                                                                        </div> */}
                                                                                    </div>
                                                                                    <div className="container remove-padding">
                                                                                        <div className="row" id="form2"
                                                                                            style={{ display: 'none' }}>
                                                                                            <div className="col-md-12">
                                                                                                <div className="address-detail">
                                                                                                    <div className="row my-4">
                                                                                                        <div className="col-md-12">
                                                                                                            <h5>Contract and
                                                                                                                full time
                                                                                                                employment
                                                                                                                details</h5>
                                                                                                        </div>
                                                                                                        <div className="row my-3">
                                                                                                            <div
                                                                                                                className="col-md-4">
                                                                                                                <div
                                                                                                                    className="card-1 card-btn">
                                                                                                                    <input
                                                                                                                        type="radio"
                                                                                                                        className="radio_btn"
                                                                                                                        name="radio-btn"
                                                                                                                        checked />
                                                                                                                    <div
                                                                                                                        className="bg-color">
                                                                                                                        <h5>Fixed,
                                                                                                                            full
                                                                                                                            or
                                                                                                                            part
                                                                                                                            time
                                                                                                                        </h5>
                                                                                                                        <p> Employees
                                                                                                                            on a
                                                                                                                            repeating
                                                                                                                            working
                                                                                                                            time
                                                                                                                            pattern
                                                                                                                            who
                                                                                                                            work
                                                                                                                            fixed,
                                                                                                                            predictable
                                                                                                                            number
                                                                                                                            of
                                                                                                                            hours
                                                                                                                            every
                                                                                                                            week
                                                                                                                            and
                                                                                                                            have
                                                                                                                            a
                                                                                                                            fixed
                                                                                                                            leave
                                                                                                                            entitlement
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="col-md-4">
                                                                                                                <div
                                                                                                                    className="card-1 card-btn">
                                                                                                                    <input
                                                                                                                        type="radio"
                                                                                                                        className="radio_btn"
                                                                                                                        name="radio-btn" />
                                                                                                                    <div
                                                                                                                        className="bg-color">
                                                                                                                        <h5>Short
                                                                                                                            hours
                                                                                                                            or
                                                                                                                            variable
                                                                                                                        </h5>
                                                                                                                        <p>Employees
                                                                                                                            on a
                                                                                                                            contract
                                                                                                                            who
                                                                                                                            work
                                                                                                                            a
                                                                                                                            different
                                                                                                                            number
                                                                                                                            of
                                                                                                                            hours
                                                                                                                            or
                                                                                                                            days
                                                                                                                            from
                                                                                                                            week
                                                                                                                            to
                                                                                                                            week
                                                                                                                            (but
                                                                                                                            not
                                                                                                                            zero-hours
                                                                                                                            contracts)
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="col-md-4 my-3 d-flex justify-content-evenly">
                                                                                                            <div
                                                                                                                className="previous">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    id="back1"
                                                                                                                    onClick={() => { back({ id: 'back', form: 'form', count: 2 }) }}
                                                                                                                    className="previous_btn">Back</button>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="continue_save">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="continue_btn"
                                                                                                                    id="next2"
                                                                                                                    onClick={() => { next({ id: 'next', form: 'form', count: 2 }) }}>Next
                                                                                                                    step
                                                                                                                </button>
                                                                                                            </div>
                                                                                                            <div className="cancel">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    onClick={closeMultiEmployee}
                                                                                                                    className="cancel_btn">cancel</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="row">
                                                                                                        <form action=""
                                                                                                            className="row contract-detaial"
                                                                                                            style={{ display: 'none' }}>
                                                                                                            <div
                                                                                                                className="form-group col-md-2">
                                                                                                                <label
                                                                                                                    for="exampleInputEmail1">Name</label>
                                                                                                                <div
                                                                                                                    className="name">
                                                                                                                    <span>Sagar
                                                                                                                        &nbsp
                                                                                                                        Pawar</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="form-group col-md-2 my-3">
                                                                                                                <label
                                                                                                                    for="exampleInputEmail1">Entitlement
                                                                                                                    unit
                                                                                                                    in</label>
                                                                                                                <input
                                                                                                                    type="text"
                                                                                                                    className="form-control"
                                                                                                                    id="exampleInputEmail1"
                                                                                                                    aria-describedby="emailHelp"
                                                                                                                    placeholder="" />
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="form-group col-md-2 my-3">
                                                                                                                <label
                                                                                                                    for="exampleInputLastname1"
                                                                                                                    style={{ marginBottom: '20px' }}>Full
                                                                                                                    time annual
                                                                                                                    leave
                                                                                                                    entitlement
                                                                                                                    equivalent</label>
                                                                                                                <input
                                                                                                                    type="text"
                                                                                                                    className="form-control"
                                                                                                                    id="exampleInputLastname1"
                                                                                                                    placeholder="" />
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="form-group col-md-2 my-3">
                                                                                                                <label
                                                                                                                    for="staticEmail">Leave
                                                                                                                    year start
                                                                                                                    date</label>
                                                                                                                <input
                                                                                                                    type="email"
                                                                                                                    placeholder=""
                                                                                                                    className="form-control"
                                                                                                                    id="staticEmail"
                                                                                                                    value="" />
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="form-group col-md-1">
                                                                                                                <label
                                                                                                                    className="form-check-label">Copy</label>
                                                                                                                <p
                                                                                                                    className="folder-icon">
                                                                                                                    <i className="fa fa-folder-o"
                                                                                                                        aria-hidden="true"></i>
                                                                                                                </p>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="col-md-2 d-flex align-items-center justify-content-center">
                                                                                                                <button
                                                                                                                    className="save-btn">save</button>
                                                                                                                <button
                                                                                                                    className="cancel-btn">cancel</button>
                                                                                                            </div>
                                                                                                        </form>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="container remove-padding">
                                                                                        <div className="row" id="form3"
                                                                                            style={{ display: 'none' }}>
                                                                                            <div className="col-md-12">
                                                                                                <div className="employment-details">
                                                                                                    <div className="row my-4">
                                                                                                        <div className="col-md-12">
                                                                                                            <h5>test's working
                                                                                                                hours</h5>
                                                                                                        </div>
                                                                                                        <div className="col-md-12">
                                                                                                            <form action="">
                                                                                                                <div
                                                                                                                    className="row my-3">
                                                                                                                    <label
                                                                                                                        for="firstName"
                                                                                                                        className="col-sm-3 col-form-label">Working
                                                                                                                        time
                                                                                                                        pattern</label>
                                                                                                                    <div
                                                                                                                        className="col-sm-2">
                                                                                                                        <select
                                                                                                                            className="form-select form-control">
                                                                                                                            <option
                                                                                                                                value="1">
                                                                                                                                Mon-Fri
                                                                                                                                9-5
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="2">
                                                                                                                                test
                                                                                                                            </option>
                                                                                                                        </select>
                                                                                                                        <p
                                                                                                                            id="nameError">
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <p
                                                                                                                    className="inc-size my-3">
                                                                                                                    Based on
                                                                                                                    <strong>Mon-Fri
                                                                                                                        9-5</strong>,
                                                                                                                    this
                                                                                                                    employee
                                                                                                                    works
                                                                                                                    <strong> 35
                                                                                                                        hrs</strong>
                                                                                                                    over
                                                                                                                    <strong> 5
                                                                                                                        days
                                                                                                                    </strong>
                                                                                                                    per week.
                                                                                                                </p>
                                                                                                                <div
                                                                                                                    className="row my-3">
                                                                                                                    <label
                                                                                                                        for="firstName"
                                                                                                                        className="col-sm-3 col-form-label">Company's
                                                                                                                        working
                                                                                                                        week,
                                                                                                                        excluding
                                                                                                                        breaks</label>
                                                                                                                    <div
                                                                                                                        className="col-sm-2 time-in-hour">
                                                                                                                        <input
                                                                                                                            type="text"
                                                                                                                            placeholder="0"
                                                                                                                            maxlength="10"
                                                                                                                            className="form-control"
                                                                                                                            id="firstName"
                                                                                                                            aria-describedby="emailHelp"
                                                                                                                        />
                                                                                                                        <span
                                                                                                                            className="hour">
                                                                                                                            hrs</span>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="col-sm-2 time-in-minut">
                                                                                                                        <input
                                                                                                                            type="text"
                                                                                                                            maxlength="10"
                                                                                                                            className="form-control"
                                                                                                                            id="firstName"
                                                                                                                            placeholder="0"
                                                                                                                            aria-describedby="emailHelp"
                                                                                                                        />
                                                                                                                        <span
                                                                                                                            className="mins">
                                                                                                                            mins</span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="row my-3">
                                                                                                                    <label
                                                                                                                        for="firstName"
                                                                                                                        className="col-sm-3 col-form-label">Company's
                                                                                                                        full
                                                                                                                        time
                                                                                                                        annual
                                                                                                                        leave
                                                                                                                        entitlement</label>
                                                                                                                    <div
                                                                                                                        className="col-sm-2">
                                                                                                                        <input
                                                                                                                            type="text"
                                                                                                                            placeholder="0"
                                                                                                                            className="form-control days" />
                                                                                                                        <p
                                                                                                                            id="nameError">
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="col-md-2">
                                                                                                                        <input
                                                                                                                            type="text"
                                                                                                                            placeholder="0"
                                                                                                                            className="form-control hour" />
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </form>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="col-md-4 d-flex justify-content-evenly my-3">
                                                                                                            <div
                                                                                                                className="previous">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    id="back2"
                                                                                                                    onClick={() => { back({ id: 'back', form: 'form', count: 3 }) }}
                                                                                                                    className="previous_btn">Back</button>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="continue_save">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="continue_btn"
                                                                                                                    id="next4"
                                                                                                                    onClick={() => { next({ id: 'next', form: 'form', count: 3 }) }}>Next
                                                                                                                    step</button>
                                                                                                            </div>
                                                                                                            <div className="cancel">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    onClick={closeMultiEmployee}
                                                                                                                    className="continue_btn"
                                                                                                                    id="next3">Cancel</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="container remove-padding">
                                                                                        <div className="row" id="form4"
                                                                                            style={{ display: 'none' }}>
                                                                                            <div className="col-md-12">
                                                                                                <div
                                                                                                    className="employment-details Annual-leave-entitlement">
                                                                                                    <div className="row my-4">
                                                                                                        <div className="col-md-12">
                                                                                                            <h5>test's leave
                                                                                                                year</h5>
                                                                                                        </div>
                                                                                                        <div className="col-md-12">
                                                                                                            <form action="">
                                                                                                                <div
                                                                                                                    className="row my-3">
                                                                                                                    <label
                                                                                                                        for="firstName"
                                                                                                                        className="col-sm-3 col-form-label">Annual
                                                                                                                        leave
                                                                                                                        year
                                                                                                                        start
                                                                                                                        date</label>
                                                                                                                    <div
                                                                                                                        className="col-md-1">
                                                                                                                        <input
                                                                                                                            type="text"
                                                                                                                            maxlength="2"
                                                                                                                            placeholder="0"
                                                                                                                            className="form-control" />
                                                                                                                    </div>
                                                                                                                    <div className="col-sm-2"
                                                                                                                        style={{ width: '107px' }}>
                                                                                                                        <select
                                                                                                                            className="form-select form-control">
                                                                                                                            <option
                                                                                                                                value="1">
                                                                                                                                Jan
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="2">
                                                                                                                                Feb
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="3">
                                                                                                                                Mar
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="4">
                                                                                                                                Apr
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="5">
                                                                                                                                May
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="6">
                                                                                                                                Jun
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="7">
                                                                                                                                Jul
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="8">
                                                                                                                                Aug
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="9">
                                                                                                                                Sep
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="10">
                                                                                                                                Oct
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="11">
                                                                                                                                Nov
                                                                                                                            </option>
                                                                                                                            <option
                                                                                                                                value="12">
                                                                                                                                Dec
                                                                                                                            </option>
                                                                                                                        </select>
                                                                                                                        <p
                                                                                                                            id="nameError">
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="row my-3">
                                                                                                                    <label
                                                                                                                        for="firstName"
                                                                                                                        className="col-sm-3 col-form-label">Entitlement
                                                                                                                        in</label>
                                                                                                                    <div
                                                                                                                        className="col-md-2">
                                                                                                                        <div
                                                                                                                            className="card-1 card-btn">
                                                                                                                            <input
                                                                                                                                type="radio"
                                                                                                                                className="radio_btn day"
                                                                                                                                name="radio-btn"
                                                                                                                                checked />
                                                                                                                            <div
                                                                                                                                className="bg-color">
                                                                                                                                <h5>Days
                                                                                                                                </h5>
                                                                                                                                <p> 0.5
                                                                                                                                    days
                                                                                                                                    increments
                                                                                                                                </p>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="col-md-2">
                                                                                                                        <div
                                                                                                                            className="card-1 card-btn">
                                                                                                                            <input
                                                                                                                                type="radio"
                                                                                                                                className="radio_btn hour"
                                                                                                                                name="radio-btn" />
                                                                                                                            <div
                                                                                                                                className="bg-color">
                                                                                                                                <h5>Hours
                                                                                                                                </h5>
                                                                                                                                <p>30
                                                                                                                                    minute
                                                                                                                                    increments
                                                                                                                                </p>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="row my-3">
                                                                                                                    <div
                                                                                                                        className="d-flex flex-column col-md-3">
                                                                                                                        <label
                                                                                                                            for="full-time"
                                                                                                                            className="col-sm-12 my-3 col-form-label">Company's
                                                                                                                            full
                                                                                                                            time
                                                                                                                            annual
                                                                                                                            leave
                                                                                                                            entitlement</label>
                                                                                                                        <label
                                                                                                                            for="annual-leave"
                                                                                                                            className="col-sm-12 my-3 col-form-label">Annual
                                                                                                                            leave
                                                                                                                            entitlement</label>
                                                                                                                        <label
                                                                                                                            for="leave-entity"
                                                                                                                            className="col-sm-12 my-3 col-form-label">Annual
                                                                                                                            leave
                                                                                                                            allowance</label>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="d-flex flex-column col-md-2 days">
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                className="form-control my-3 day1 col-md-12"
                                                                                                                                id="full-time"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">days</span>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                id="annual-leave"
                                                                                                                                className="form-control my-3 day2 col-md-12"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">days</span>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                id="leave-entity"
                                                                                                                                className="form-control my-3 day3 col-md-12"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">days</span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="d-flex flex-column col-md-2 time">
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                className="form-control my-3 day1 col-md-12"
                                                                                                                                id="full-time"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">hrs</span>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                id="annual-leave"
                                                                                                                                className="form-control my-3 day2 col-md-12"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">hrs</span>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                id="leave-entity"
                                                                                                                                className="form-control my-3 day3 col-md-12"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">hrs</span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="d-flex flex-column col-md-2 time">
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                className="form-control my-3 day1 col-md-12"
                                                                                                                                id="full-time"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">mins</span>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                id="annual-leave"
                                                                                                                                className="form-control my-3 day2 col-md-12"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">mins</span>
                                                                                                                        </div>
                                                                                                                        <div
                                                                                                                            className="input-position">
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                id="leave-entity"
                                                                                                                                className="form-control my-3 day3 col-md-12"
                                                                                                                                placeholder="0" />
                                                                                                                            <span
                                                                                                                                className="child">mins</span>
                                                                                                                        </div>
                                                                                                                        <p
                                                                                                                            id="nameError">
                                                                                                                        </p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </form>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="col-md-4 d-flex justify-content-evenly my-3">
                                                                                                            <div
                                                                                                                className="previous">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    id="back3"
                                                                                                                    onClick={() => { back({ id: 'back', form: 'form', count: 4 }) }}
                                                                                                                    className="previous_btn">Back</button>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="continue_save">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="continue_btn"
                                                                                                                    id="next5"
                                                                                                                    onClick={() => { next({ id: 'next', form: 'form', count: 4 }) }}>Next
                                                                                                                    step</button>
                                                                                                            </div>
                                                                                                            <div className="cancel">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="continue_btn"
                                                                                                                    onClick={closeMultiEmployee}
                                                                                                                    id="next3">Cancel</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="container remove-padding">
                                                                                        <div className="row" id="form5"
                                                                                            style={{ display: 'none' }}>
                                                                                            <div className="col-md-12">
                                                                                                <div
                                                                                                    className="employment-details summary">
                                                                                                    <div className="row my-4">
                                                                                                        <div className="col-md-12">
                                                                                                            <h5>Summary</h5>
                                                                                                            <p>You're about to
                                                                                                                add <b
                                                                                                                    style={{ fontWeight: '500' }}>
                                                                                                                    test
                                                                                                                    test</b> to
                                                                                                                the company.</p>
                                                                                                        </div>
                                                                                                        <div className="col-md-12">
                                                                                                            <div
                                                                                                                className="parent-border my-3">
                                                                                                                <div
                                                                                                                    className="d-flex justify-content-between p-3 B-bottom">
                                                                                                                    <div>
                                                                                                                        Employee
                                                                                                                        start
                                                                                                                        date
                                                                                                                    </div>
                                                                                                                    <div><b>29
                                                                                                                        Nov
                                                                                                                        2022</b>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="d-flex justify-content-between p-3 B-bottom">
                                                                                                                    <div>Leave
                                                                                                                        year
                                                                                                                        start
                                                                                                                        date
                                                                                                                    </div>
                                                                                                                    <div><b>01
                                                                                                                        January</b>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="d-flex justify-content-between p-3 B-bottom">
                                                                                                                    <div>
                                                                                                                        Company's
                                                                                                                        full
                                                                                                                        time
                                                                                                                        annual
                                                                                                                        leave
                                                                                                                        entitlement
                                                                                                                    </div>
                                                                                                                    <div><b>29
                                                                                                                        Nov
                                                                                                                        2022</b>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="d-flex justify-content-between p-3 B-bottom">
                                                                                                                    <div>
                                                                                                                        Employee
                                                                                                                        start
                                                                                                                        date
                                                                                                                    </div>
                                                                                                                    <div><b>0
                                                                                                                        days</b>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="d-flex justify-content-between p-3 B-bottom">
                                                                                                                    <div>
                                                                                                                        Allowance
                                                                                                                        for
                                                                                                                        leave
                                                                                                                        year 01
                                                                                                                        Jan 2022
                                                                                                                        - 31 Dec
                                                                                                                        2022
                                                                                                                    </div>
                                                                                                                    <div><b>0
                                                                                                                        days</b>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="d-flex justify-content-between p-3 B-bottom">
                                                                                                                    <div>Working
                                                                                                                        time
                                                                                                                        pattern
                                                                                                                    </div>
                                                                                                                    <div><b>0
                                                                                                                        days</b>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="d-flex justify-content-between p-3 B-bottom">
                                                                                                                    <div>Public
                                                                                                                        holidays
                                                                                                                        for
                                                                                                                        <small>
                                                                                                                            Deducted
                                                                                                                            from
                                                                                                                            entitlement</small>
                                                                                                                    </div>
                                                                                                                    <div><b>England
                                                                                                                        &
                                                                                                                        Wales</b>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="col-md-12 toggle-check">
                                                                                                            <div className="d-flex">
                                                                                                                <label
                                                                                                                    for="check">Send
                                                                                                                    test a
                                                                                                                    registration
                                                                                                                    invite to
                                                                                                                    test@gmail.com
                                                                                                                </label>
                                                                                                                <input
                                                                                                                    type="checkbox"
                                                                                                                    id="check"
                                                                                                                    className="custom-check"
                                                                                                                    checked />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="col-md-4 d-flex justify-content-evenly my-3">
                                                                                                            <div
                                                                                                                className="previous">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    id="back4"
                                                                                                                    onClick={() => { back({ id: 'back', form: 'form', count: 5 }) }}
                                                                                                                    className="previous_btn">Back</button>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="continue_save">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="continue_btn"
                                                                                                                    id="next6"
                                                                                                                    onClick={() => { next({ id: 'next', form: 'form', count: 5 }) }}>Next
                                                                                                                    step</button>
                                                                                                            </div>
                                                                                                            <div className="cancel">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="continue_btn"
                                                                                                                    onClick={closeMultiEmployee}
                                                                                                                    id="next3">Cancel</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="container remove-padding">
                                                                                        <div className="row" id="form6"
                                                                                            style={{ display: 'none' }}>
                                                                                            <div className="col-md-12">
                                                                                                <div className="employment-details">
                                                                                                    <div className="row my-4">
                                                                                                        <div className="col-md-12">
                                                                                                            <h3>test has been added to BrightHR</h3>
                                                                                                        </div>
                                                                                                        <div className="col-md-12">
                                                                                                            <p className="mb-4">There are some things you can do to make a richer profile for test.</p>
                                                                                                            <div className="added_summary">
                                                                                                                <ul>
                                                                                                                    <li>Add test to one or more teams</li>
                                                                                                                    <li>Add job title or role</li>
                                                                                                                    <li>Add emergency contacts</li>
                                                                                                                    <li>Add a profile picture</li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-6 d-flex justify-content-evenly align-items-center my-3">
                                                                                                            <div className="previous">
                                                                                                                <a href="./personal-detail.html" style={{ padding: '8px 10px' }} className="previous_btn">Go to Profile</a>
                                                                                                            </div>
                                                                                                            <div className="continue_save">
                                                                                                                <button type="button" onClick={multiEmployees} className="continue_btn"
                                                                                                                    id="next4">Add another employee</button>
                                                                                                            </div>
                                                                                                            <div className="cancel">
                                                                                                                <button type="button" onClick={closeMultiEmployee}
                                                                                                                    className="continue_btn"
                                                                                                                    id="next3">Close</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* Main add employees step's end  */}
                                                                            {/* Top Bar Info Section End Here  */}
                                                                            {/* Right Side Bar Info Start Here */}
                                                                            {/* Right Side Bar Info end Here  */}
                                                                            {/* Card information start here */}
                                                                            {/* Card information end here */}
                                                                        </div>
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="employees">
                                                                                <p><strong>4 employees</strong> not registered
                                                                                    for BrightHR</p>
                                                                            </div>
                                                                            <div className="view-btn">
                                                                                <button type="button">View</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="team-no">
                                                                        <form action="" className="row my-5">
                                                                            <div className="form-group col-md-2">
                                                                                <label for="" className="mb-2">Find</label>
                                                                                <div className="">
                                                                                    <input type="text" className="form-control"
                                                                                        placeholder="Name, job title" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-md-2">
                                                                                <label for="" className="mb-2">Filter by</label>
                                                                                <div className="select-pattern">
                                                                                    <select name="name" id="name"
                                                                                        className="form-select form-control">
                                                                                        <option value="name1" selected>All
                                                                                        </option>
                                                                                        <option value="name2">No team</option>
                                                                                        <option value="name2">Terminated
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-md-2">
                                                                                <label for="" className="mb-2">Sort by</label>
                                                                                <div className="select-pattern">
                                                                                    <select name="name" id="name"
                                                                                        className="form-select form-control">
                                                                                        <option value="name1" selected>Last name
                                                                                            (A-Z)</option>
                                                                                        <option value="name2">First name (A-Z)
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-md-2">
                                                                                <label for="" className="mb-2">Status</label>
                                                                                <div className="select-pattern">
                                                                                    <select name="name" id="name"
                                                                                        className="form-select form-control">
                                                                                        <option value="name1" selected>All
                                                                                        </option>
                                                                                        <option value="name2">On client visit
                                                                                        </option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="accordion">
                                                                                <article
                                                                                    className="beefup example-opensingle is-open">
                                                                                    <div className="d-flex justify-content-between">
                                                                                        <div className="item">No team (11)</div>
                                                                                        <div className="accordion_icon">
                                                                                            <span className="beefup__head"><i
                                                                                                onclick="rotate()"
                                                                                                className="fa fa-angle-up"
                                                                                                aria-hidden="true"
                                                                                                id="rotateIcon"></i></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="beefup__body">
                                                                                        <div className="mockup mockup-sm row my-3">
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-4">
                                                                                                <div className="card flex-row">
                                                                                                    <div className="link">
                                                                                                        <a href="#">WA</a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="profile-detail d-flex flex-column justify-content-center">
                                                                                                        <p className="name">William
                                                                                                            Atkins</p>
                                                                                                        <div className="">
                                                                                                            <a href="#">View
                                                                                                                full profile</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="eye-link d-flex align-items-center">
                                                                                                        <a href="#"><i
                                                                                                            className="fa fa-eye"
                                                                                                            aria-hidden="true"></i></a>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </article>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="tabTwo">
                                                            <h1>Two</h1>
                                                        </div>
                                                        <div className="tab-pane show fade active" id="tabThree">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="team-btn my-5">
                                                                        {/* Button trigger modal */}
                                                                        <button type="button" data-bs-toggle="modal"
                                                                            data-bs-target="#exampleModal" className="">Add a new
                                                                            team</button>
                                                                        {/* Modal */}
                                                                        <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                                            aria-labelledby="exampleModalLabel"
                                                                            aria-hidden="true">
                                                                            <div className="modal-dialog" id="show">
                                                                                <div className="modal-content content-modal">
                                                                                    <div className="modal-header modal-head">
                                                                                        <h5 className="modal-title"
                                                                                            id="exampleModalLabel">Add a new
                                                                                            team</h5>
                                                                                        <button type="button" className=" close-btn"
                                                                                            data-bs-dismiss="modal"
                                                                                            aria-label="Close"><i
                                                                                                className="fa fa-times"
                                                                                                aria-hidden="true"></i></button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <div className="col-md-12">
                                                                                            <div className="mb-2">
                                                                                                <label
                                                                                                    for="team-name">Name</label>
                                                                                            </div>
                                                                                            <input type="text" id="team-name"
                                                                                                placeholder="Please enter a team name..."
                                                                                                className="form-control" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="modal-footer justify-content-between">
                                                                                        <button type="button"
                                                                                            className="btn btn-secondary close"
                                                                                            data-bs-dismiss="modal">Close</button>
                                                                                        <button type="button" className="save-btn"
                                                                                            onClick={hide} >Select
                                                                                            employees</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="modal-dialog" id="hide"
                                                                                style={{ display: 'none', maxWidth: '800px' }}>
                                                                                <div className="modal-content content-modal">
                                                                                    <div className="modal-header modal-head">
                                                                                        <h5 className="modal-title"
                                                                                            id="exampleModalLabel">Assign
                                                                                            employees to <span>"test"</span>
                                                                                        </h5>
                                                                                        <button type="button" className="close-btn"
                                                                                            data-bs-dismiss="modal"
                                                                                            aria-label="Close"><i
                                                                                                className="fa fa-times"
                                                                                                aria-hidden="true"></i></button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3 col-md-4">
                                                                                                <select
                                                                                                    className="form-select form-control"
                                                                                                    aria-label="Default select example">
                                                                                                    <option selected=""
                                                                                                        value="1">Search by name
                                                                                                    </option>
                                                                                                    <option value="2">Search by
                                                                                                        group</option>
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="col-sm-3 col-md-4">
                                                                                                <input type="text"
                                                                                                    className="form-control"
                                                                                                    placeholder="Enter name" />
                                                                                            </div>
                                                                                            <div
                                                                                                className="col-md-4 d-flex justify-content-end">
                                                                                                <button type="button"
                                                                                                    className="select-employee">Select
                                                                                                    all</button>
                                                                                                <button type="button"
                                                                                                    className="select-employee">Deselect
                                                                                                    all</button>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row employee-name my-4">
                                                                                            <div className="col-md-6">
                                                                                                <div className="name">
                                                                                                    <p>Adam Woods</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="name">
                                                                                                    <p>Adam Woods</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="name">
                                                                                                    <p>Adam Woods</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="name">
                                                                                                    <p>Adam Woods</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="name">
                                                                                                    <p>Adam Woods</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-6">
                                                                                                <div className="name">
                                                                                                    <p>Adam Woods</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="modal-footer justify-content-between">
                                                                                        <button type="button"
                                                                                            className="btn btn-secondary close"
                                                                                            data-bs-dismiss=""
                                                                                            onClick={back_Modal}
                                                                                            id="backBtn">Back</button>
                                                                                        <button type="button"
                                                                                            className="save-btn">Select
                                                                                            employees</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex search-team">
                                                                        <label for="find">Find</label>
                                                                        <div className="col-md-2">
                                                                            <input type="text" id="find" className="form-control"
                                                                                placeholder="Team name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="row my-4">
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                            <div className="card flex-row cards">
                                                                                <div className="name">
                                                                                    <p className="name-text">T</p>
                                                                                </div>
                                                                                <div
                                                                                    className="d-flex flex-column justify-content-center team-name">
                                                                                    <p className="fname">test</p>
                                                                                    <p className="no-of-emb">0 members</p>
                                                                                </div>
                                                                                <div className="icons">
                                                                                    <p className="edit-icon"><i className="fa fa-pencil"
                                                                                        aria-hidden="true"></i></p>
                                                                                    <p className="delet-icon"><i className="fa fa-trash"
                                                                                        aria-hidden="true"></i></p>
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
                                {/* Working Pattern form end here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Employees;