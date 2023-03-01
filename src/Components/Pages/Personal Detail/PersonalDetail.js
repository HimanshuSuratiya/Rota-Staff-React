import React from 'react'
import Header from '../../Common components/Header/Header';

const PersonalDetail = () => {

    const formhide = () => {
        var contentOne = document.getElementById('hide');
        var contentTwo = document.getElementById('showFormContent');
        var btn = document.getElementById('modalBtn');
        if (contentTwo.style.display == "none") {
            contentTwo.style.display = "block";
            contentOne.style.display = "none";
            btn.style.display = "none";
        }
    }

    const hideform = () => {
        var contentOne = document.getElementById('hide');
        var contentTwo = document.getElementById('showFormContent');
        var btn = document.getElementById('modalBtn');
        if (contentTwo.style.display == "block") {
            contentTwo.style.display = "none";
            contentOne.style.display = "block";
            btn.style.display = "block";
        }
    }

    const showForm = () => {
        var show_form = document.getElementById('formShow');
        var hideContent = document.getElementById('hide_content');
        var modalBtn = document.getElementById('hideModalBtn');
        if (show_form.style.display == "none") {
            show_form.style.display = "block";
            hideContent.style.display = "none";
            modalBtn.style.display = "none";
        }
    }

    function showContent() {
        var show_Form = document.getElementById('formShow');
        var hideContent = document.getElementById('hide_content');
        var modalBtn = document.getElementById('hideModalBtn');
        if (hideContent.style.display == "none") {
            hideContent.style.display = "block";
            show_Form.style.display = "none";
            modalBtn.style.display = "block";
        }
    }

    const showFormFive = () => {
        var showForm = document.getElementById('show_form_five');
        var hideButton = document.getElementById('hide_button');
        if (showForm.style.display === "none") {
            showForm.style.display = "block";
            hideButton.style.display = "none";
        }
    }

    const hideFormFive = () => {
        var showForm = document.getElementById('show_form_five');
        var hideButton = document.getElementById('hide_button');
        if (hideButton.style.display == "none") {
            hideButton.style.display = "block";
            showForm.style.display = "none";
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
                                {/* Top Bar Info Section End Here */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="user-detail d-flex">
                                                <div className="user-name">
                                                    <p className="short-name"> DA </p>
                                                </div>
                                                <div className="mail-info">
                                                    <div className="full-name">
                                                        <h5>Daniel Alexander</h5>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="mail-account">
                                                            <div className="mail-link">
                                                                <a href="#">
                                                                    <spna className="mail-icon"><i className="fa fa-envelope-o"
                                                                        aria-hidden="true"></i></spna>
                                                                    dan@kabs-fitness.co.uk
                                                                </a>
                                                            </div>
                                                            <div className="registraion-btn">
                                                                <button type="button">Send registration email</button>
                                                            </div>
                                                        </div>
                                                        <div className="working-status">
                                                            <p>Working from usual location</p>
                                                            {/* Button trigger modal */}
                                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal">
                                                                Set
                                                            </button>

                                                            {/* Modal */}
                                                            <div className="modal fade" id="exampleModal" tabindex="-1"
                                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                                Modal title</h1>
                                                                            <button type="button" className="btn-close"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            ...
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-secondary"
                                                                                data-bs-dismiss="modal">Close</button>
                                                                            <button type="button" className="btn btn-primary">Save
                                                                                changes</button>
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

                                {/* Personal detail tabs */}
                                <section className="tabs my-5">
                                    <div className="container-fluid p-0 tab-parent">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="tab-btn">
                                                    <ul className="nav nav-tabs justify-content-between" id="myTab">
                                                        <li className="nav-item"><a href="#tabOne" data-bs-toggle="tab"
                                                            className="link-nav active">Absence</a></li>
                                                        <li className="nav-item"><a href="#tabTwo" data-bs-toggle="tab"
                                                            className="link-nav">Employment</a></li>
                                                        <li className="nav-item"><a href="#tabThree" data-bs-toggle="tab"
                                                            className="link-nav">Overtime</a></li>
                                                        <li className="nav-item"><a href="#tabFour" data-bs-toggle="tab"
                                                            className="link-nav">Personal</a></li>
                                                        <li className="nav-item"><a href="#tabFive" data-bs-toggle="tab"
                                                            className="link-nav">Emergencies</a></li>
                                                        <li className="nav-item"><a href="#tabSix" data-bs-toggle="tab"
                                                            className="link-nav">Documents</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane show fade active" id="tabOne">
                                                            <div className="container-fluid p-0">
                                                                <div className="row add-padding justify-content-between">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label for="firstName"
                                                                                className="col-sm-3 col-form-label label">Filter
                                                                                absences</label>
                                                                            <div className="col-sm-3">
                                                                                <select className="form-select form-control">
                                                                                    <option value="annual-leave">Annual leave
                                                                                    </option>
                                                                                    <option value="lateness">Lateness</option>
                                                                                    <option value="sickness">Sickness</option>
                                                                                    <option value="furlough">Furlough</option>
                                                                                    <option value="other">Other</option>
                                                                                </select>
                                                                                <p id="nameError"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 d-flex justify-content-end">
                                                                        <div className="form-group">
                                                                            <label for="firstName"
                                                                                className="col-sm-12 col-form-label label">Leave
                                                                                year</label>
                                                                            <div className="col-sm-12">
                                                                                <select className="form-select form-control">
                                                                                    <option value="2021-01-01">01 Jan 2021 - 31
                                                                                        Dec 2021</option>
                                                                                    <option value="2022-01-01">01 Jan 2022 - 31
                                                                                        Dec 2022</option>
                                                                                    <option value="2023-01-01">01 Jan 2023 - 31
                                                                                        Dec 2023</option>
                                                                                </select>
                                                                                <p id="nameError"></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12 text-center absen-title">
                                                                        <h2>All absences</h2>
                                                                    </div>
                                                                </div>
                                                                <div className="row absance-section">
                                                                    <div className="col-md-4 text-center">
                                                                        <div className="annual-leave">
                                                                            <p>Annual leave to take</p>
                                                                        </div>
                                                                        <div className="d-flex justify-content-center">
                                                                            <div className="hrs-1">
                                                                                <h4>0</h4>
                                                                                <span>hrs</span>
                                                                            </div>
                                                                            <div className="min-1">
                                                                                <h4>0</h4>
                                                                                <span>mins</span>
                                                                            </div>
                                                                            <div className="slash">
                                                                                <h4>/</h4>
                                                                            </div>
                                                                            <div className="hrs-2">
                                                                                <h4>0</h4>
                                                                                <span>hrs</span>
                                                                            </div>
                                                                            <div className="min-1">
                                                                                <h4>0</h4>
                                                                                <span>mins</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-time-btn">
                                                                            <button type="button">Add time off</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 text-center">
                                                                        <div className="">
                                                                            <div className="sickness">
                                                                                <p>Sickness</p>
                                                                            </div>
                                                                            <div className="d-flex flex-column">
                                                                                <h4>0</h4>
                                                                                <span>occurrences</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-btn">
                                                                            <button type="button">Add</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 text-center">
                                                                        <div className="">
                                                                            <div className="lateness">
                                                                                <p>Lateness</p>
                                                                            </div>
                                                                            <div className="d-flex flex-column">
                                                                                <h4>0</h4>
                                                                                <span>occurrences</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="add-btn">
                                                                            <button type="button">Add</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="accordion" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingOne">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseOne"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseOne">
                                                                                    Current & future (1)
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseOne"
                                                                                className="accordion-collapse collapse"
                                                                                aria-labelledby="headingOne"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-center align-items-center">
                                                                                                    <svg fill="currentColor"
                                                                                                        preserveAspectRatio="xMidYMid meet"
                                                                                                        height="30" width="30"
                                                                                                        viewBox="0 0 32 32"
                                                                                                        style={{ verticalAlign: 'middle', color: 'rgb(115, 121, 128)' }}>
                                                                                                        <path
                                                                                                            d="M27.5 3h-2.938V1.5a1.5 1.5 0 0 0-3 0V3h-11V1.5a1.5 1.5 0 0 0-3 0V3H4.499a4.505 4.505 0 0 0-4.5 4.5v20c0 2.481 2.019 4.5 4.5 4.5h23c2.481 0 4.5-2.019 4.5-4.5v-20c0-2.481-2.019-4.5-4.5-4.5zM29 27.5c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5v-20C3 6.673 3.673 6 4.5 6h3.063v1.5a1.5 1.5 0 0 0 3 0V6h11v1.5a1.5 1.5 0 0 0 3 0V6h2.938c.827 0 1.5.673 1.5 1.5v20zm-3.686-4.259l-17-11a1.5 1.5 0 0 0-1.628 2.518l17 11a1.5 1.5 0 0 0 1.628-2.518z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="col-md-8">
                                                                                                    <a href="#"
                                                                                                        className="mandat-leave">
                                                                                                        <h5>Mandatory leave</h5>
                                                                                                    </a>
                                                                                                    <p><strong> Sat 24 Dec 2022
                                                                                                        - Sun 01 Jan
                                                                                                        2023</strong> (0
                                                                                                        hrs)</p>
                                                                                                    <p>Xmas shut down</p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-end align-items-center">
                                                                                                    <div className="">
                                                                                                        {/* Button trigger modal */}
                                                                                                        <button type="button"
                                                                                                            className="modal-btn"
                                                                                                            data-bs-toggle="modal"
                                                                                                            data-bs-target="#exampleModal">
                                                                                                            <svg fill="currentColor"
                                                                                                                preserveAspectRatio="xMidYMid meet"
                                                                                                                height="20"
                                                                                                                width="20"
                                                                                                                viewBox="0 0 32 32"
                                                                                                                className="EditIcon-hudqKp eakzCg"
                                                                                                                style={{ verticalAlign: 'middle', color: 'rgb(0, 87, 173)' }}>
                                                                                                                <path
                                                                                                                    d="M18.75 29H1.5a1.5 1.5 0 1 0 0 3h17.25a1.5 1.5 0 1 0 0-3zm7.5 1.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001zM7.5 26h5.656c.398 0 .779-.157 1.061-.439L30.388 9.389c1.039-1.039 1.611-2.42 1.611-3.889s-.573-2.85-1.611-3.889C29.349.572 27.968 0 26.499 0s-2.85.573-3.889 1.611L6.439 17.782A1.5 1.5 0 0 0 6 18.843v5.656c-.001.829.67 1.5 1.499 1.5zM24.733 3.732C25.206 3.259 25.833 3 26.5 3s1.295.26 1.767.732S29 4.832 29 5.5s-.26 1.295-.733 1.768l-2.329 2.329-3.535-3.535 2.329-2.329zM9 19.465L20.282 8.182l3.535 3.535L12.534 23H8.999v-3.535z">
                                                                                                                </path>
                                                                                                            </svg>
                                                                                                        </button>

                                                                                                        {/* Modal */}
                                                                                                        <div className="modal fade"
                                                                                                            id="exampleModal"
                                                                                                            tabindex="-1"
                                                                                                            aria-labelledby="exampleModalLabel"
                                                                                                            aria-hidden="true">
                                                                                                            <div
                                                                                                                className="modal-dialog">
                                                                                                                <div
                                                                                                                    className="modal-content">
                                                                                                                    <div
                                                                                                                        className="modal-header">
                                                                                                                        <h1 className="modal-title fs-5"
                                                                                                                            id="exampleModalLabel">
                                                                                                                            Modal
                                                                                                                            title
                                                                                                                        </h1>
                                                                                                                        <button
                                                                                                                            type="button"
                                                                                                                            className="btn-close"
                                                                                                                            data-bs-dismiss="modal"
                                                                                                                            aria-label="Close"></button>
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="modal-body">
                                                                                                                        ...
                                                                                                                    </div>
                                                                                                                    <div
                                                                                                                        className="modal-footer">
                                                                                                                        <button
                                                                                                                            type="button"
                                                                                                                            className="btn btn-secondary"
                                                                                                                            data-bs-dismiss="modal">Close</button>
                                                                                                                        <button
                                                                                                                            type="button"
                                                                                                                            className="btn btn-primary">Save
                                                                                                                            changes</button>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="tabTwo">
                                                            <div className="row add-padding">
                                                                <div className="col-md-6">
                                                                    <div className="accordion my-3" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingOne">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseOne"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseOne">
                                                                                    <div className="head">
                                                                                        <h4 className="heading">Contract and annual
                                                                                            leave information</h4>
                                                                                        <p>Contracted hours of work, employment
                                                                                            start date and leave entitlement</p>
                                                                                    </div>
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseOne"
                                                                                className="accordion-collapse collapse show"
                                                                                aria-labelledby="headingOne"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <div className="annual-form">
                                                                                        <form className="employees-data"
                                                                                            onsubmit="return validateform()">
                                                                                            <div className="row">
                                                                                                <label for="firstName"
                                                                                                    className="col-sm-4 col-form-label">
                                                                                                    <div className="">
                                                                                                        Current annual leave
                                                                                                        allowance
                                                                                                        <br />
                                                                                                        <small className="opcity">01
                                                                                                            Jan 2022 - 31 Dec
                                                                                                            2022</small>
                                                                                                    </div>
                                                                                                </label>
                                                                                                <div className="col-sm-3 position">
                                                                                                    <input type="text"
                                                                                                        className="form-control"
                                                                                                        id="firstName"
                                                                                                        aria-describedby="emailHelp"
                                                                                                        placeholder=""
                                                                                                        value="0" />
                                                                                                    <span
                                                                                                        className="sub-head">hrs</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <label for="lastName"
                                                                                                    className="col-sm-4 col-form-label">Average
                                                                                                    working day</label>
                                                                                                <div className="col-md-3">
                                                                                                    <input type="text"
                                                                                                        className="form-control"
                                                                                                        id="lastName"
                                                                                                        value="0 hrs 0 mins "
                                                                                                        readonly />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="form-group col-md-4 d-flex align-items-center">
                                                                                                <button type="button" id="next1"
                                                                                                    className="save-btn">Save</button>
                                                                                                <button type="reset"
                                                                                                    id="saveBtn"
                                                                                                    className="cancel_btn">cancel</button>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                    <div className="row my-4 detail">
                                                                                        <div className="d-flex">
                                                                                            <div className="col-md-10">
                                                                                                <h4>Contract summary</h4>
                                                                                            </div>
                                                                                            <div
                                                                                                className="col-md-2 d-flex justify-content-end align-items-center">
                                                                                                <div className="">
                                                                                                    {/* Button trigger modal */}
                                                                                                    <button type="button"
                                                                                                        className="modal-btn"
                                                                                                        data-bs-toggle="modal"
                                                                                                        data-bs-target="#exampleModal">
                                                                                                        <svg fill="currentColor"
                                                                                                            preserveAspectRatio="xMidYMid meet"
                                                                                                            height="20"
                                                                                                            width="20"
                                                                                                            viewBox="0 0 32 32"
                                                                                                            className="EditIcon-hudqKp eakzCg"
                                                                                                            style={{ verticalAlign: 'middle', color: 'rgb(0, 87, 173)' }}>
                                                                                                            <path
                                                                                                                d="M18.75 29H1.5a1.5 1.5 0 1 0 0 3h17.25a1.5 1.5 0 1 0 0-3zm7.5 1.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001zM7.5 26h5.656c.398 0 .779-.157 1.061-.439L30.388 9.389c1.039-1.039 1.611-2.42 1.611-3.889s-.573-2.85-1.611-3.889C29.349.572 27.968 0 26.499 0s-2.85.573-3.889 1.611L6.439 17.782A1.5 1.5 0 0 0 6 18.843v5.656c-.001.829.67 1.5 1.499 1.5zM24.733 3.732C25.206 3.259 25.833 3 26.5 3s1.295.26 1.767.732S29 4.832 29 5.5s-.26 1.295-.733 1.768l-2.329 2.329-3.535-3.535 2.329-2.329zM9 19.465L20.282 8.182l3.535 3.535L12.534 23H8.999v-3.535z">
                                                                                                            </path>
                                                                                                        </svg>
                                                                                                        Add/Edit
                                                                                                    </button>

                                                                                                    {/* Modal */}
                                                                                                    <div className="modal fade"
                                                                                                        id="exampleModal"
                                                                                                        tabindex="-1"
                                                                                                        aria-labelledby="exampleModalLabel"
                                                                                                        aria-hidden="true">
                                                                                                        <div
                                                                                                            className="modal-dialog">
                                                                                                            <div
                                                                                                                className="modal-content">
                                                                                                                <div
                                                                                                                    className="modal-header">
                                                                                                                    <h1 className="modal-title fs-5"
                                                                                                                        id="exampleModalLabel">
                                                                                                                        Modal
                                                                                                                        title
                                                                                                                    </h1>
                                                                                                                    <button
                                                                                                                        type="button"
                                                                                                                        className="btn-close"
                                                                                                                        data-bs-dismiss="modal"
                                                                                                                        aria-label="Close"></button>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="modal-body">
                                                                                                                    ...
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="modal-footer">
                                                                                                                    <button
                                                                                                                        type="button"
                                                                                                                        className="btn btn-secondary"
                                                                                                                        data-bs-dismiss="modal">Close</button>
                                                                                                                    <button
                                                                                                                        type="button"
                                                                                                                        className="btn btn-primary">Save
                                                                                                                        changes</button>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Employee type
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">Variable -
                                                                                                hours</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight"> Contract
                                                                                                start date</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">09 Sep 2021
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Contracted
                                                                                                hours per week</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">0 hrs</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Annual leave
                                                                                                year start</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight"> 01 January
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight"> Min. leave
                                                                                                entitlement</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">0 hrs</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row my-4 detail">
                                                                                        <div className="d-flex">
                                                                                            <div className="col-md-10">
                                                                                                <h4>Place of work</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Working
                                                                                                location </p>
                                                                                            <small className="opcity">Determines
                                                                                                public holidays and leave
                                                                                                types</small>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">Not set</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Public
                                                                                                holidays for</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">England &
                                                                                                Wales</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row my-4 detail">
                                                                                        <div className="d-flex">
                                                                                            <div className="col-md-10">
                                                                                                <h4>Employment summary</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Employee start
                                                                                                date </p>
                                                                                            <small className="opcity"></small>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">09 Sep 2021
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight"> Length of
                                                                                                service</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight"> 1 years 3
                                                                                                months</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="accordion my-3" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingTwo">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseTwo"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseTwo">
                                                                                    <div className="head">
                                                                                        <h4 className="heading"> Role information
                                                                                        </h4>
                                                                                        <p>Job title, probation and notice
                                                                                            period</p>
                                                                                    </div>
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseTwo"
                                                                                className="accordion-collapse collapse show"
                                                                                aria-labelledby="headingTwo"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <div className="row my-4 detail">
                                                                                        <div className="col-md-12 text-end">
                                                                                            <div className="">
                                                                                                {/* Button trigger modal */}
                                                                                                <button type="button"
                                                                                                    className="modal-btn"
                                                                                                    data-bs-toggle="modal"
                                                                                                    data-bs-target="#exampleModal">
                                                                                                    <svg fill="currentColor"
                                                                                                        preserveAspectRatio="xMidYMid meet"
                                                                                                        height="20" width="20"
                                                                                                        viewBox="0 0 32 32"
                                                                                                        className="EditIcon-hudqKp eakzCg"
                                                                                                        style={{ verticalAlign: 'middle', color: 'rgb(0, 87, 173)' }}>
                                                                                                        <path
                                                                                                            d="M18.75 29H1.5a1.5 1.5 0 1 0 0 3h17.25a1.5 1.5 0 1 0 0-3zm7.5 1.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001zM7.5 26h5.656c.398 0 .779-.157 1.061-.439L30.388 9.389c1.039-1.039 1.611-2.42 1.611-3.889s-.573-2.85-1.611-3.889C29.349.572 27.968 0 26.499 0s-2.85.573-3.889 1.611L6.439 17.782A1.5 1.5 0 0 0 6 18.843v5.656c-.001.829.67 1.5 1.499 1.5zM24.733 3.732C25.206 3.259 25.833 3 26.5 3s1.295.26 1.767.732S29 4.832 29 5.5s-.26 1.295-.733 1.768l-2.329 2.329-3.535-3.535 2.329-2.329zM9 19.465L20.282 8.182l3.535 3.535L12.534 23H8.999v-3.535z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </button>

                                                                                                {/* Modal */}
                                                                                                <div className="modal fade"
                                                                                                    id="exampleModal"
                                                                                                    tabindex="-1"
                                                                                                    aria-labelledby="exampleModalLabel"
                                                                                                    aria-hidden="true">
                                                                                                    <div className="modal-dialog">
                                                                                                        <div
                                                                                                            className="modal-content">
                                                                                                            <div
                                                                                                                className="modal-header">
                                                                                                                <h1 className="modal-title fs-5"
                                                                                                                    id="exampleModalLabel">
                                                                                                                    Modal
                                                                                                                    title
                                                                                                                </h1>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn-close"
                                                                                                                    data-bs-dismiss="modal"
                                                                                                                    aria-label="Close"></button>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="modal-body">
                                                                                                                ...
                                                                                                            </div>
                                                                                                            <div
                                                                                                                className="modal-footer">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn btn-secondary"
                                                                                                                    data-bs-dismiss="modal">Close</button>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="btn btn-primary">Save
                                                                                                                    changes</button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Job title </p>
                                                                                            <small className="opcity"></small>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight opcity">
                                                                                                Not specified</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Contract type
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight opcity">Not
                                                                                                specified</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Team(s)</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight"> No team</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Reports to</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight">Tommy Cashen,
                                                                                                michael carter, Craig Birch</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Probation
                                                                                                required</p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight"> No</p>
                                                                                        </div>
                                                                                        <div className="col-md-4">
                                                                                            <p className="inc-weight">Notice period
                                                                                            </p>
                                                                                        </div>
                                                                                        <div className="col-md-8">
                                                                                            <p className="inc-weight opcity"> Not
                                                                                                specified</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion my-3" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingThree">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseThree"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseThree">
                                                                                    <div className="head">
                                                                                        <h4 className="heading">Salary information
                                                                                        </h4>
                                                                                        <p>Salary amount and payment frequency
                                                                                        </p>
                                                                                    </div>
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseThree"
                                                                                className="accordion-collapse collapse"
                                                                                aria-labelledby="headingThree"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <div className="annual-form">
                                                                                        <form className="employees-data"
                                                                                            onsubmit="return validateform()">
                                                                                            <div className="row">
                                                                                                <label for="firstName"
                                                                                                    className="col-sm-4 col-form-label">
                                                                                                    <div className="">
                                                                                                        Payroll number
                                                                                                        <br />
                                                                                                        <small
                                                                                                            className="opcity"></small>
                                                                                                    </div>
                                                                                                </label>
                                                                                                <div className="col-sm-5 position">
                                                                                                    <input type="text"
                                                                                                        className="form-control"
                                                                                                        id="firstName"
                                                                                                        placeholder="Payroll number"
                                                                                                        aria-describedby="emailHelp"
                                                                                                        value="" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <label for="lastName"
                                                                                                    className="col-sm-4 col-form-label">Salary
                                                                                                    working day</label>
                                                                                                <div className="col-md-2">
                                                                                                    <input type="text"
                                                                                                        className="form-control"
                                                                                                        id="lastName" value="0" />
                                                                                                </div>
                                                                                                <div className="col-sm-3">
                                                                                                    <select
                                                                                                        className="form-select form-control">
                                                                                                        <option disabled=""
                                                                                                            value="">Select
                                                                                                            frequency</option>
                                                                                                        <option value="Yearly">
                                                                                                            Yearly</option>
                                                                                                        <option value="Monthly">
                                                                                                            Monthly</option>
                                                                                                        <option
                                                                                                            value="Biweekly">
                                                                                                            Biweekly</option>
                                                                                                        <option
                                                                                                            value="Four weekly">
                                                                                                            Four weekly</option>
                                                                                                        <option value="Weekly">
                                                                                                            Weekly</option>
                                                                                                        <option value="Daily">
                                                                                                            Daily</option>
                                                                                                        <option value="Hourly">
                                                                                                            Hourly</option>
                                                                                                    </select>
                                                                                                    <p id="nameError">
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row my-2 detail">
                                                                                                <div className="d-flex">
                                                                                                    <div className="col-md-10">
                                                                                                        <h4>Pension</h4>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-4">
                                                                                                    <p className="inc-weight">
                                                                                                        Pension eligible?</p>
                                                                                                </div>
                                                                                                <div className="col-md-8">
                                                                                                    <div className="row my-3">
                                                                                                        <div className="col-md-2">
                                                                                                            <div
                                                                                                                className="card-1 card-btn">
                                                                                                                <input
                                                                                                                    type="radio"
                                                                                                                    className="radio_btn"
                                                                                                                    name="radio-btn"
                                                                                                                    checked="" />
                                                                                                                <div
                                                                                                                    className="bg-color">
                                                                                                                    <h5>Yes</h5>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-md-2">
                                                                                                            <div
                                                                                                                className="card-1 card-btn">
                                                                                                                <input
                                                                                                                    type="radio"
                                                                                                                    className="radio_btn"
                                                                                                                    name="radio-btn" />
                                                                                                                <div
                                                                                                                    className="bg-color">
                                                                                                                    <h5>No</h5>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="form-group col-md-4 d-flex align-items-center">
                                                                                                <button type="button" id="next1"
                                                                                                    className="save-btn">Save</button>
                                                                                                <button type="reset"
                                                                                                    id="saveBtn"
                                                                                                    className="cancel_btn">cancel</button>
                                                                                            </div>
                                                                                        </form>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion my-3" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingFour">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseFour"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseFour">
                                                                                    <div className="head">
                                                                                        <h4 className="heading">Notes</h4>
                                                                                        <p>Employee notes</p>
                                                                                    </div>
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseFour"
                                                                                className="accordion-collapse collapse"
                                                                                aria-labelledby="headingFour"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-center align-items-center">
                                                                                                    <svg fill="currentColor"
                                                                                                        preserveAspectRatio="xMidYMid meet"
                                                                                                        height="30" width="30"
                                                                                                        viewBox="0 0 32 32"
                                                                                                        style={{ verticalAlign: 'middle', color: 'rgb(115, 121, 128)' }}>
                                                                                                        <path
                                                                                                            d="M27.5 3h-2.938V1.5a1.5 1.5 0 0 0-3 0V3h-11V1.5a1.5 1.5 0 0 0-3 0V3H4.499a4.505 4.505 0 0 0-4.5 4.5v20c0 2.481 2.019 4.5 4.5 4.5h23c2.481 0 4.5-2.019 4.5-4.5v-20c0-2.481-2.019-4.5-4.5-4.5zM29 27.5c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5v-20C3 6.673 3.673 6 4.5 6h3.063v1.5a1.5 1.5 0 0 0 3 0V6h11v1.5a1.5 1.5 0 0 0 3 0V6h2.938c.827 0 1.5.673 1.5 1.5v20zm-3.686-4.259l-17-11a1.5 1.5 0 0 0-1.628 2.518l17 11a1.5 1.5 0 0 0 1.628-2.518z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="col-md-8">
                                                                                                    <a href="#"
                                                                                                        className="mandat-leave">
                                                                                                        <h5>Mandatory leave</h5>
                                                                                                    </a>
                                                                                                    <p><strong> Sat 24 Dec 2022
                                                                                                        - Sun 01 Jan
                                                                                                        2023</strong> (0
                                                                                                        hrs)</p>
                                                                                                    <p>Xmas shut down</p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-end align-items-center">
                                                                                                    <div className="">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion my-3" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingFive">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseFive"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseFour">
                                                                                    <div className="head">
                                                                                        <h4 className="heading">Sensitive
                                                                                            information</h4>
                                                                                        <p>Tax, NI and eligibility information
                                                                                        </p>
                                                                                    </div>
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseFive"
                                                                                className="accordion-collapse collapse"
                                                                                aria-labelledby="headingFive"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="d-flex">
                                                                                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                                                                                    <svg fill="currentColor"
                                                                                                        preserveAspectRatio="xMidYMid meet"
                                                                                                        height="30" width="30"
                                                                                                        viewBox="0 0 32 32"
                                                                                                        style={{ verticalAlign: 'middle', color: 'rgb(115, 121, 128)' }}>
                                                                                                        <path
                                                                                                            d="M27.5 3h-2.938V1.5a1.5 1.5 0 0 0-3 0V3h-11V1.5a1.5 1.5 0 0 0-3 0V3H4.499a4.505 4.505 0 0 0-4.5 4.5v20c0 2.481 2.019 4.5 4.5 4.5h23c2.481 0 4.5-2.019 4.5-4.5v-20c0-2.481-2.019-4.5-4.5-4.5zM29 27.5c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5v-20C3 6.673 3.673 6 4.5 6h3.063v1.5a1.5 1.5 0 0 0 3 0V6h11v1.5a1.5 1.5 0 0 0 3 0V6h2.938c.827 0 1.5.673 1.5 1.5v20zm-3.686-4.259l-17-11a1.5 1.5 0 0 0-1.628 2.518l17 11a1.5 1.5 0 0 0 1.628-2.518z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="col-md-8">
                                                                                                    <a href="#"
                                                                                                        className="mandat-leave">
                                                                                                        <h5>Mandatory leave</h5>
                                                                                                    </a>
                                                                                                    <p><strong> Sat 24 Dec 2022
                                                                                                        - Sun 01 Jan
                                                                                                        2023</strong> (0
                                                                                                        hrs)</p>
                                                                                                    <p>Xmas shut down</p>
                                                                                                </div>
                                                                                                <div className="col-md-2 d-flex justify-content-end align-items-center">
                                                                                                    <div className="">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion my-3" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingSix">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseSix"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseSix">
                                                                                    <div className="head">
                                                                                        <h4 className="heading">Termination</h4>
                                                                                        <p>Leaving date, reason for termination,
                                                                                            etc</p>
                                                                                    </div>
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseSix"
                                                                                className="accordion-collapse collapse"
                                                                                aria-labelledby="headingSix"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-center align-items-center">
                                                                                                    <svg fill="currentColor"
                                                                                                        preserveAspectRatio="xMidYMid meet"
                                                                                                        height="30" width="30"
                                                                                                        viewBox="0 0 32 32"
                                                                                                        style={{ verticalAlign: 'middle', color: 'rgb(115, 121, 128)' }}>
                                                                                                        <path
                                                                                                            d="M27.5 3h-2.938V1.5a1.5 1.5 0 0 0-3 0V3h-11V1.5a1.5 1.5 0 0 0-3 0V3H4.499a4.505 4.505 0 0 0-4.5 4.5v20c0 2.481 2.019 4.5 4.5 4.5h23c2.481 0 4.5-2.019 4.5-4.5v-20c0-2.481-2.019-4.5-4.5-4.5zM29 27.5c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5v-20C3 6.673 3.673 6 4.5 6h3.063v1.5a1.5 1.5 0 0 0 3 0V6h11v1.5a1.5 1.5 0 0 0 3 0V6h2.938c.827 0 1.5.673 1.5 1.5v20zm-3.686-4.259l-17-11a1.5 1.5 0 0 0-1.628 2.518l17 11a1.5 1.5 0 0 0 1.628-2.518z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="col-md-8">
                                                                                                    <a href="#"
                                                                                                        className="mandat-leave">
                                                                                                        <h5>Mandatory leave</h5>
                                                                                                    </a>
                                                                                                    <p><strong> Sat 24 Dec 2022
                                                                                                        - Sun 01 Jan
                                                                                                        2023</strong> (0
                                                                                                        hrs)</p>
                                                                                                    <p>Xmas shut down</p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-end align-items-center">
                                                                                                    <div className="">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion my-3" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h2 className="accordion-header" id="headingSix">
                                                                                <button className="accordion-button" type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target="#collapseSix"
                                                                                    aria-expanded="true"
                                                                                    aria-controls="collapseSix">
                                                                                    <div className="head">
                                                                                        <h4 className="heading">Delete employee
                                                                                            record</h4>
                                                                                        <p>Permanently delete Daniel from
                                                                                            BrightHR</p>
                                                                                    </div>
                                                                                </button>
                                                                            </h2>
                                                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                                                                data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-center align-items-center">
                                                                                                    <svg fill="currentColor"
                                                                                                        preserveAspectRatio="xMidYMid meet"
                                                                                                        height="30" width="30"
                                                                                                        viewBox="0 0 32 32"
                                                                                                        style={{ verticalAlign: 'middle', color: 'rgb(115, 121, 128)' }}>
                                                                                                        <path d="M27.5 3h-2.938V1.5a1.5 1.5 0 0 0-3 0V3h-11V1.5a1.5 1.5 0 0 0-3 0V3H4.499a4.505 4.505 0 0 0-4.5 4.5v20c0 2.481 2.019 4.5 4.5 4.5h23c2.481 0 4.5-2.019 4.5-4.5v-20c0-2.481-2.019-4.5-4.5-4.5zM29 27.5c0 .827-.673 1.5-1.5 1.5h-23c-.827 0-1.5-.673-1.5-1.5v-20C3 6.673 3.673 6 4.5 6h3.063v1.5a1.5 1.5 0 0 0 3 0V6h11v1.5a1.5 1.5 0 0 0 3 0V6h2.938c.827 0 1.5.673 1.5 1.5v20zm-3.686-4.259l-17-11a1.5 1.5 0 0 0-1.628 2.518l17 11a1.5 1.5 0 0 0 1.628-2.518z">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div className="col-md-8">
                                                                                                    <a href="#"
                                                                                                        className="mandat-leave">
                                                                                                        <h5>Mandatory leave</h5>
                                                                                                    </a>
                                                                                                    <p><strong> Sat 24 Dec 2022
                                                                                                        - Sun 01 Jan
                                                                                                        2023</strong> (0
                                                                                                        hrs)</p>
                                                                                                    <p>Xmas shut down</p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="col-md-2 d-flex justify-content-end align-items-center">
                                                                                                    <div className="">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="tabThree">
                                                            <div className="container-fluid">
                                                                <div className="row add-padding">
                                                                    <div className="col-md-6">
                                                                        <h2>Overtime</h2>
                                                                    </div>
                                                                    <div className="col-md-6 text-end">
                                                                        <div className="overtime-btn">
                                                                            <button type="button">Log overtime</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="border">
                                                                            <div className="heading">
                                                                                <h5>Time off in lieu (TOIL)</h5>
                                                                            </div>
                                                                            <div
                                                                                className="over-time d-flex justify-content-between">
                                                                                <div className="d-flex flex-column p-2">
                                                                                    <div className="">TOIL logged</div>
                                                                                    <div className="hour-mint">
                                                                                        <h5>0h 0m</h5>
                                                                                    </div>
                                                                                    <div className="opcity">No approved claims</div>
                                                                                </div>
                                                                                <div className="d-flex flex-column p-2">
                                                                                    <div className="">TOIL taken</div>
                                                                                    <div className="hour-mint">
                                                                                        <h5>0h 0m</h5>
                                                                                    </div>
                                                                                    <div className="opcity">No TOIL absences</div>
                                                                                </div>
                                                                                <div className="d-flex flex-column p-2">
                                                                                    <div className="">TOIL balance</div>
                                                                                    <div className="hour-mint">
                                                                                        <h5>0h 0m</h5>
                                                                                    </div>
                                                                                    <div className="opcity">Available to take</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="toil-btn text-center">
                                                                                <a href="#" className="btn">Use TOIL</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="border">
                                                                            <div className="heading">
                                                                                <h5>Payable</h5>
                                                                            </div>
                                                                            <div
                                                                                className="over-time d-flex justify-content-between">
                                                                                <div className="d-flex flex-column p-2">
                                                                                    <div className="">Overtime logged</div>
                                                                                    <div className="hour-mint">
                                                                                        <h5>0h 0m</h5>
                                                                                    </div>
                                                                                    <div className="opcity">No approved claims</div>
                                                                                </div>
                                                                                <div className="d-flex flex-column p-2">
                                                                                    <div className="">Paid</div>
                                                                                    <div className="hour-mint">
                                                                                        <h5>0h 0m</h5>
                                                                                    </div>
                                                                                    <div className="opcity">Payment scheduled or
                                                                                        paid</div>
                                                                                </div>
                                                                                <div className="d-flex flex-column p-2">
                                                                                    <div className="">Pending payment</div>
                                                                                    <div className="hour-mint">
                                                                                        <h5>0h 0m</h5>
                                                                                    </div>
                                                                                    <div className="opcity">Approved awaiting
                                                                                        payment</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="accordion my-3" id="accordionExample">
                                                                            <div className="accordion-item">
                                                                                <h2 className="accordion-header" id="headingeight">
                                                                                    <button className="accordion-button" type="button"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#collapseeight"
                                                                                        aria-expanded="true"
                                                                                        aria-controls="collapseeight">
                                                                                        <div className="head">
                                                                                            <p className="heading">Current and future (0)</p>
                                                                                        </div>
                                                                                    </button>
                                                                                </h2>
                                                                                <div id="collapseeight"
                                                                                    className="accordion-collapse collapse"
                                                                                    aria-labelledby="headingeight"
                                                                                    data-bs-parent="#accordionExample">
                                                                                    <div className="accordion-body">

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="accordion my-3" id="accordionExample">
                                                                            <div className="accordion-item">
                                                                                <h2 className="accordion-header" id="headingnine">
                                                                                    <button className="accordion-button" type="button"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#collapsenine"
                                                                                        aria-expanded="true"
                                                                                        aria-controls="collapsenine">
                                                                                        <div className="head">
                                                                                            <p className="heading">History (0)</p>
                                                                                        </div>
                                                                                    </button>
                                                                                </h2>
                                                                                <div id="collapsenine"
                                                                                    className="accordion-collapse collapse"
                                                                                    aria-labelledby="headingnine"
                                                                                    data-bs-parent="#accordionExample">
                                                                                    <div className="accordion-body">

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div className="accordion my-3" id="accordionExample">
                                                                            <div className="accordion-item">
                                                                                <h2 className="accordion-header" id="headingten">
                                                                                    <button className="accordion-button" type="button"
                                                                                        data-bs-toggle="collapse"
                                                                                        data-bs-target="#collapseten"
                                                                                        aria-expanded="true"
                                                                                        aria-controls="collapseten">
                                                                                        <div className="head">
                                                                                            <p className="heading">Cancelled (0)</p>
                                                                                        </div>
                                                                                    </button>
                                                                                </h2>
                                                                                <div id="collapseten"
                                                                                    className="accordion-collapse collapse"
                                                                                    aria-labelledby="headingten"
                                                                                    data-bs-parent="#accordionExample">
                                                                                    <div className="accordion-body">

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="tabFour">
                                                            <div className="container-fluid">
                                                                <div className="accordion my-3" id="accordionExample">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" id="headingEleven">
                                                                            <button className="accordion-button" type="button"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#collapseEleven"
                                                                                aria-expanded="true"
                                                                                aria-controls="collapseEleven">
                                                                                <div className="head">
                                                                                    <h4 className="heading"> Contact information </h4>
                                                                                </div>
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseEleven"
                                                                            className="accordion-collapse collapse"
                                                                            aria-labelledby="headingEleven"
                                                                            data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                <div className="row my-4 detail">
                                                                                    <div className="col-md-12 text-end">
                                                                                        <div className="d-flex justify-content-end">
                                                                                            <button type="button" onClick={formhide} className="modal-btn" id="modalBtn">
                                                                                                <svg fill="currentColor"
                                                                                                    preserveAspectRatio="xMidYMid meet"
                                                                                                    height="20" width="20"
                                                                                                    viewBox="0 0 32 32"
                                                                                                    className="EditIcon-hudqKp eakzCg"
                                                                                                    style={{ verticalAlign: 'middle', color: 'rgb(0, 87, 173)' }}>
                                                                                                    <path d="M18.75 29H1.5a1.5 1.5 0 1 0 0 3h17.25a1.5 1.5 0 1 0 0-3zm7.5 1.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001zM7.5 26h5.656c.398 0 .779-.157 1.061-.439L30.388 9.389c1.039-1.039 1.611-2.42 1.611-3.889s-.573-2.85-1.611-3.889C29.349.572 27.968 0 26.499 0s-2.85.573-3.889 1.611L6.439 17.782A1.5 1.5 0 0 0 6 18.843v5.656c-.001.829.67 1.5 1.499 1.5zM24.733 3.732C25.206 3.259 25.833 3 26.5 3s1.295.26 1.767.732S29 4.832 29 5.5s-.26 1.295-.733 1.768l-2.329 2.329-3.535-3.535 2.329-2.329zM9 19.465L20.282 8.182l3.535 3.535L12.534 23H8.999v-3.535z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                                Edit
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="hide">
                                                                                        <div className="row">
                                                                                            <div className="col-md-3 my-2">
                                                                                                <h5 className="inc-size">Account email</h5>
                                                                                                <p className="inc-weight">dan@kabs-fitness.co.uk</p>
                                                                                            </div>
                                                                                            <div className="col-md-8 my-2">
                                                                                                <h5 className="inc-size">Personal email</h5>
                                                                                                <p className="inc-weight">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-3 my-2">
                                                                                                <h5 className="inc-size">Home phone</h5>
                                                                                                <p className="inc-weight">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-8 my-2">
                                                                                                <h5 className="inc-size">Mobile phone</h5>
                                                                                                <p className="inc-weight opcity">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-3 my-2">
                                                                                                <h5 className="inc-size">Work phone</h5>
                                                                                                <p className="inc-weight">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-8 my-2">
                                                                                                <h5 className="inc-size">Work extension</h5>
                                                                                                <p className="inc-weight opcity">n/a</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <form action="" className="" id="showFormContent" style={{ display: 'none' }}>
                                                                                        <div className="row my-3">
                                                                                            <label for="account-email" className="col-md-2">Account email</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="email" id="account-email" className="form-control" placeholder="" value="test@123gmail.com" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="Personal-email" className="col-md-2">Personal email</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="Personal-email" className="form-control" placeholder="Personal email" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="phone" className="col-md-2">Home phone</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="phone" id="phone" className="form-control" placeholder="Home phone" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="mob-phone" className="col-md-2">Mobile phone</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="mob-phone" className="form-control" placeholder="Mobile phone" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="work-phone" className="col-md-2"> work phone</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="work-phone" className="form-control" placeholder="Work phone" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="work-ext" className="col-md-2">Work extension</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="work-ext" className="form-control" placeholder="Work extension" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3 submit-btns">
                                                                                            <div className="col-md-2 d-flex justify-content-evenly">
                                                                                                <div className="save-btn">
                                                                                                    <button type="button">Save</button>
                                                                                                </div>
                                                                                                <div className="cancel-btn">
                                                                                                    <button type="button" onClick={hideform}>Cancel</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion my-3" id="accordionExample">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" id="headingTwelve">
                                                                            <button className="accordion-button" type="button"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#collapseTwelve"
                                                                                aria-expanded="true"
                                                                                aria-controls="collapseTwelve">
                                                                                <div className="head">
                                                                                    <h4 className="heading">Personal information</h4>
                                                                                </div>
                                                                            </button>
                                                                        </h2>
                                                                        <div id="collapseTwelve"
                                                                            className="accordion-collapse collapse"
                                                                            aria-labelledby="headingTwelve"
                                                                            data-bs-parent="#accordionExample">
                                                                            <div className="accordion-body">
                                                                                <div className="row my-4 detail">
                                                                                    <div className="col-md-12 text-end">
                                                                                        <div className="d-flex justify-content-end">
                                                                                            <button type="button" onClick={showForm} className="modal-btn" id="hideModalBtn">
                                                                                                <svg fill="currentColor"
                                                                                                    preserveAspectRatio="xMidYMid meet"
                                                                                                    height="20" width="20"
                                                                                                    viewBox="0 0 32 32"
                                                                                                    className="EditIcon-hudqKp eakzCg"
                                                                                                    style={{ verticalAlign: 'middle', color: 'rgb(0, 87, 173)' }}>
                                                                                                    <path d="M18.75 29H1.5a1.5 1.5 0 1 0 0 3h17.25a1.5 1.5 0 1 0 0-3zm7.5 1.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001zM7.5 26h5.656c.398 0 .779-.157 1.061-.439L30.388 9.389c1.039-1.039 1.611-2.42 1.611-3.889s-.573-2.85-1.611-3.889C29.349.572 27.968 0 26.499 0s-2.85.573-3.889 1.611L6.439 17.782A1.5 1.5 0 0 0 6 18.843v5.656c-.001.829.67 1.5 1.499 1.5zM24.733 3.732C25.206 3.259 25.833 3 26.5 3s1.295.26 1.767.732S29 4.832 29 5.5s-.26 1.295-.733 1.768l-2.329 2.329-3.535-3.535 2.329-2.329zM9 19.465L20.282 8.182l3.535 3.535L12.534 23H8.999v-3.535z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                                Edit
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="hide_content">
                                                                                        <div className="row">
                                                                                            <div className="col-md-3 my-2">
                                                                                                <h5 className="inc-size">Title</h5>
                                                                                                <p className="inc-weight">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-8 my-2">
                                                                                                <h5 className="inc-size">First name</h5>
                                                                                                <p className="inc-weight">Daniel</p>
                                                                                            </div>
                                                                                            <div className="col-md-3 my-2">
                                                                                                <h5 className="inc-size">Middle name</h5>
                                                                                                <p className="inc-weight">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-8 my-2">
                                                                                                <h5 className="inc-size">Last name</h5>
                                                                                                <p className="inc-weight opcity">Alexander</p>
                                                                                            </div>
                                                                                            <div className="col-md-3 my-2">
                                                                                                <h5 className="inc-size">Date of birth</h5>
                                                                                                <p className="inc-weight">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-8 my-2">
                                                                                                <h5 className="inc-size">Gender</h5>
                                                                                                <p className="inc-weight opcity">n/a</p>
                                                                                            </div>
                                                                                            <div className="col-md-3 my-2">
                                                                                                <h5 className="inc-size">Address</h5>
                                                                                                <p className="inc-weight">n/a</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <form action="" className="" id="formShow" style={{ display: 'none' }}>
                                                                                        <div className="row my-3">
                                                                                            <label for="select" className="col-md-2">Title</label>
                                                                                            <div className="col-md-2">
                                                                                                <select name="" id="select" className="form-select form-control" placeholder="Please select">
                                                                                                    <option disabled="" value="">Please select</option>
                                                                                                    <option value="Mr">Mr</option>
                                                                                                    <option value="Mrs">Mrs</option>
                                                                                                    <option value="Miss">Miss</option>
                                                                                                    <option value="Ms">Ms</option>
                                                                                                    <option value="Mx">Mx</option>
                                                                                                    <option value="Dr">Dr</option>
                                                                                                    <option value="Rvd">Rvd</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="account-email" className="col-md-2">Account email</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="email" id="account-email" className="form-control" placeholder="" value="test@123gmail.com" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="Personal-email" className="col-md-2">Personal email</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="Personal-email" className="form-control" placeholder="Personal email" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="phone" className="col-md-2">Home phone</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="phone" id="phone" className="form-control" placeholder="Home phone" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="mob-phone" className="col-md-2">Mobile phone</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="mob-phone" className="form-control" placeholder="Mobile phone" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="work-phone" className="col-md-2"> work phone</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="work-phone" className="form-control" placeholder="Work phone" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3">
                                                                                            <label for="work-ext" className="col-md-2">Work extension</label>
                                                                                            <div className="col-md-3">
                                                                                                <input type="text" id="work-ext" className="form-control" placeholder="Work extension" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row my-3 submit-btns">
                                                                                            <div className="col-md-2 d-flex justify-content-evenly">
                                                                                                <div className="save-btn">
                                                                                                    <button type="button">Save</button>
                                                                                                </div>
                                                                                                <div className="cancel-btn">
                                                                                                    <button type="button" onClick={showContent}>Cancel</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="tabFive">
                                                            <div className="container-fluid">
                                                                <div className="row">
                                                                    <div className="col-md-12 p-3">
                                                                        <div className="add-contant">
                                                                            <p>Add at least one emergency contact in case something unexpected happens.</p>
                                                                        </div>
                                                                        <div className="btn-add" id="hide_button">
                                                                            <button type="button" onClick={showFormFive}>Add new contant</button>
                                                                        </div>
                                                                        <form action="" id="show_form_five" style={{ display: 'none' }}>
                                                                            <div className="row my-3">
                                                                                <label for="Fname" className="col-md-2">First name</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="Fname" placeholder="First name" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="Lname" className="col-md-2">Last name</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="lname" placeholder="Last name" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="Hphone" className="col-md-2">Home phone</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="Hphone" placeholder="Home phone" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="Mphone" className="col-md-2">Mobile phone</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="Mphone" placeholder="Mobile phone" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="Wphone" className="col-md-2">Work phone</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="Wphone" placeholder="Work phone" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="country" className="col-md-2">Country</label>
                                                                                <div className="col-md-3">
                                                                                    <select name="country" placeholder="Select option" id="country" className="form-control form-select">
                                                                                        <option disabled="" value="">Select option</option>
                                                                                        <option value="United Kingdom">United Kingdom</option>
                                                                                        <option value="Poland">Poland</option>
                                                                                        <option value="India">India</option>
                                                                                        <option value="Ireland">Ireland</option>
                                                                                        <option value="Romania">Romania</option>
                                                                                        <option value="" disabled=""></option>
                                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                                        <option value="Åland Islands">Åland Islands</option>
                                                                                        <option value="Albania">Albania</option>
                                                                                        <option value="Algeria">Algeria</option>
                                                                                        <option value="American Samoa">American Samoa</option>
                                                                                        <option value="Andorra">Andorra</option>
                                                                                        <option value="Angola">Angola</option>
                                                                                        <option value="Anguilla">Anguilla</option>
                                                                                        <option value="Antarctica">Antarctica</option>
                                                                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                                        <option value="Argentina">Argentina</option>
                                                                                        <option value="Armenia">Armenia</option>
                                                                                        <option value="Aruba">Aruba</option>
                                                                                        <option value="Australia">Australia</option>
                                                                                        <option value="Austria">Austria</option>
                                                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                                                        <option value="Bahamas">Bahamas</option>
                                                                                        <option value="Bahrain">Bahrain</option>
                                                                                        <option value="Bangladesh">Bangladesh</option>
                                                                                        <option value="Barbados">Barbados</option>
                                                                                        <option value="Belarus">Belarus</option>
                                                                                        <option value="Belgium">Belgium</option>
                                                                                        <option value="Belize">Belize</option>
                                                                                        <option value="Benin">Benin</option>
                                                                                        <option value="Bermuda">Bermuda</option>
                                                                                        <option value="Bhutan">Bhutan</option>
                                                                                        <option value="Bolivia">Bolivia</option>
                                                                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                                        <option value="Botswana">Botswana</option>
                                                                                        <option value="Bouvet Island">Bouvet Island</option>
                                                                                        <option value="Brazil">Brazil</option>
                                                                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                                        <option value="British Virgin Islands">British Virgin Islands</option>
                                                                                        <option value="Brunei">Brunei</option>
                                                                                        <option value="Bulgaria">Bulgaria</option>
                                                                                        <option value="Burkina Faso">Burkina Faso</option>
                                                                                        <option value="Burundi">Burundi</option>
                                                                                        <option value="Cambodia">Cambodia</option>
                                                                                        <option value="Cameroon">Cameroon</option>
                                                                                        <option value="Canada">Canada</option>
                                                                                        <option value="Cape Verde">Cape Verde</option>
                                                                                        <option value="Caribbean Netherlands">Caribbean Netherlands</option>
                                                                                        <option value="Cayman Islands">Cayman Islands</option>
                                                                                        <option value="Central African Republic">Central African Republic</option>
                                                                                        <option value="Chad">Chad</option>
                                                                                        <option value="Chile">Chile</option>
                                                                                        <option value="China">China</option>
                                                                                        <option value="Christmas Island">Christmas Island</option>
                                                                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                                        <option value="Colombia">Colombia</option>
                                                                                        <option value="Comoros">Comoros</option>
                                                                                        <option value="Cook Islands">Cook Islands</option>
                                                                                        <option value="Costa Rica">Costa Rica</option>
                                                                                        <option value="Croatia">Croatia</option>
                                                                                        <option value="Cuba">Cuba</option>
                                                                                        <option value="Curaçao">Curaçao</option>
                                                                                        <option value="Cyprus">Cyprus</option>
                                                                                        <option value="Czechia">Czechia</option>
                                                                                        <option value="Denmark">Denmark</option>
                                                                                        <option value="Djibouti">Djibouti</option>
                                                                                        <option value="Dominica">Dominica</option>
                                                                                        <option value="Dominican Republic">Dominican Republic</option>
                                                                                        <option value="DR Congo">DR Congo</option>
                                                                                        <option value="Ecuador">Ecuador</option>
                                                                                        <option value="Egypt">Egypt</option>
                                                                                        <option value="El Salvador">El Salvador</option>
                                                                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                                        <option value="Eritrea">Eritrea</option>
                                                                                        <option value="Estonia">Estonia</option>
                                                                                        <option value="Eswatini">Eswatini</option>
                                                                                        <option value="Ethiopia">Ethiopia</option>
                                                                                        <option value="Falkland Islands">Falkland Islands</option>
                                                                                        <option value="Faroe Islands">Faroe Islands</option>
                                                                                        <option value="Fiji">Fiji</option>
                                                                                        <option value="Finland">Finland</option>
                                                                                        <option value="France">France</option>
                                                                                        <option value="French Guiana">French Guiana</option>
                                                                                        <option value="French Polynesia">French Polynesia</option>
                                                                                        <option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option>
                                                                                        <option value="Gabon">Gabon</option>
                                                                                        <option value="Gambia">Gambia</option>
                                                                                        <option value="Georgia">Georgia</option>
                                                                                        <option value="Germany">Germany</option>
                                                                                        <option value="Ghana">Ghana</option>
                                                                                        <option value="Gibraltar">Gibraltar</option>
                                                                                        <option value="Greece">Greece</option>
                                                                                        <option value="Greenland">Greenland</option>
                                                                                        <option value="Grenada">Grenada</option>
                                                                                        <option value="Guadeloupe">Guadeloupe</option>
                                                                                        <option value="Guam">Guam</option>
                                                                                        <option value="Guatemala">Guatemala</option>
                                                                                        <option value="Guernsey">Guernsey</option>
                                                                                        <option value="Guinea">Guinea</option>
                                                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                                                        <option value="Guyana">Guyana</option>
                                                                                        <option value="Haiti">Haiti</option>
                                                                                        <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                                                                        <option value="Honduras">Honduras</option>
                                                                                        <option value="Hong Kong">Hong Kong</option>
                                                                                        <option value="Hungary">Hungary</option>
                                                                                        <option value="Iceland">Iceland</option>
                                                                                        <option value="Indonesia">Indonesia</option>
                                                                                        <option value="Iran">Iran</option>
                                                                                        <option value="Iraq">Iraq</option>
                                                                                        <option value="Isle of Man">Isle of Man</option>
                                                                                        <option value="Israel">Israel</option>
                                                                                        <option value="Italy">Italy</option>
                                                                                        <option value="Ivory Coast">Ivory Coast</option>
                                                                                        <option value="Jamaica">Jamaica</option>
                                                                                        <option value="Japan">Japan</option>
                                                                                        <option value="Jersey">Jersey</option>
                                                                                        <option value="Jordan">Jordan</option>
                                                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                                                        <option value="Kenya">Kenya</option>
                                                                                        <option value="Kiribati">Kiribati</option>
                                                                                        <option value="Kosovo">Kosovo</option>
                                                                                        <option value="Kuwait">Kuwait</option>
                                                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                                        <option value="Laos">Laos</option>
                                                                                        <option value="Latvia">Latvia</option>
                                                                                        <option value="Lebanon">Lebanon</option>
                                                                                        <option value="Lesotho">Lesotho</option>
                                                                                        <option value="Liberia">Liberia</option>
                                                                                        <option value="Libya">Libya</option>
                                                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                                                        <option value="Lithuania">Lithuania</option>
                                                                                        <option value="Luxembourg">Luxembourg</option>
                                                                                        <option value="Macau">Macau</option>
                                                                                        <option value="Macedonia">Macedonia</option>
                                                                                        <option value="Madagascar">Madagascar</option>
                                                                                        <option value="Malawi">Malawi</option>
                                                                                        <option value="Malaysia">Malaysia</option>
                                                                                        <option value="Maldives">Maldives</option>
                                                                                        <option value="Mali">Mali</option>
                                                                                        <option value="Malta">Malta</option>
                                                                                        <option value="Marshall Islands">Marshall Islands</option>
                                                                                        <option value="Martinique">Martinique</option>
                                                                                        <option value="Mauritania">Mauritania</option>
                                                                                        <option value="Mauritius">Mauritius</option>
                                                                                        <option value="Mayotte">Mayotte</option>
                                                                                        <option value="Mexico">Mexico</option>
                                                                                        <option value="Micronesia">Micronesia</option>
                                                                                        <option value="Moldova">Moldova</option>
                                                                                        <option value="Monaco">Monaco</option>
                                                                                        <option value="Mongolia">Mongolia</option>
                                                                                        <option value="Montenegro">Montenegro</option>
                                                                                        <option value="Montserrat">Montserrat</option>
                                                                                        <option value="Morocco">Morocco</option>
                                                                                        <option value="Mozambique">Mozambique</option>
                                                                                        <option value="Myanmar">Myanmar</option>
                                                                                        <option value="Namibia">Namibia</option>
                                                                                        <option value="Nauru">Nauru</option>
                                                                                        <option value="Nepal">Nepal</option>
                                                                                        <option value="Netherlands">Netherlands</option>
                                                                                        <option value="New Caledonia">New Caledonia</option>
                                                                                        <option value="New Zealand">New Zealand</option>
                                                                                        <option value="Nicaragua">Nicaragua</option>
                                                                                        <option value="Niger">Niger</option>
                                                                                        <option value="Nigeria">Nigeria</option>
                                                                                        <option value="Niue">Niue</option>
                                                                                        <option value="Norfolk Island">Norfolk Island</option>
                                                                                        <option value="North Korea">North Korea</option>
                                                                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                                        <option value="Norway">Norway</option>
                                                                                        <option value="Oman">Oman</option>
                                                                                        <option value="Pakistan">Pakistan</option>
                                                                                        <option value="Palau">Palau</option>
                                                                                        <option value="Palestine">Palestine</option>
                                                                                        <option value="Panama">Panama</option>
                                                                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                                                                        <option value="Paraguay">Paraguay</option>
                                                                                        <option value="Peru">Peru</option>
                                                                                        <option value="Philippines">Philippines</option>
                                                                                        <option value="Pitcairn Islands">Pitcairn Islands</option>
                                                                                        <option value="Portugal">Portugal</option>
                                                                                        <option value="Puerto Rico">Puerto Rico</option>
                                                                                        <option value="Qatar">Qatar</option>
                                                                                        <option value="Republic of the Congo">Republic of the Congo</option>
                                                                                        <option value="Réunion">Réunion</option>
                                                                                        <option value="Russia">Russia</option>
                                                                                        <option value="Rwanda">Rwanda</option>
                                                                                        <option value="Saint Barthélemy">Saint Barthélemy</option>
                                                                                        <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                                                                                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                                                        <option value="Saint Lucia">Saint Lucia</option>
                                                                                        <option value="Saint Martin">Saint Martin</option>
                                                                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                                        <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                                                        <option value="Samoa">Samoa</option>
                                                                                        <option value="San Marino">San Marino</option>
                                                                                        <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                                                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                                                                        <option value="Senegal">Senegal</option>
                                                                                        <option value="Serbia">Serbia</option>
                                                                                        <option value="Seychelles">Seychelles</option>
                                                                                        <option value="Sierra Leone">Sierra Leone</option>
                                                                                        <option value="Singapore">Singapore</option>
                                                                                        <option value="Sint Maarten">Sint Maarten</option>
                                                                                        <option value="Slovakia">Slovakia</option>
                                                                                        <option value="Slovenia">Slovenia</option>
                                                                                        <option value="Solomon Islands">Solomon Islands</option>
                                                                                        <option value="Somalia">Somalia</option>
                                                                                        <option value="South Africa">South Africa</option>
                                                                                        <option value="South Georgia">South Georgia</option>
                                                                                        <option value="South Korea">South Korea</option>
                                                                                        <option value="South Sudan">South Sudan</option>
                                                                                        <option value="Spain">Spain</option>
                                                                                        <option value="Sri Lanka">Sri Lanka</option>
                                                                                        <option value="Sudan">Sudan</option>
                                                                                        <option value="Suriname">Suriname</option>
                                                                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                                                        <option value="Sweden">Sweden</option>
                                                                                        <option value="Switzerland">Switzerland</option>
                                                                                        <option value="Syria">Syria</option>
                                                                                        <option value="Taiwan">Taiwan</option>
                                                                                        <option value="Tajikistan">Tajikistan</option>
                                                                                        <option value="Tanzania">Tanzania</option>
                                                                                        <option value="Thailand">Thailand</option>
                                                                                        <option value="Timor-Leste">Timor-Leste</option>
                                                                                        <option value="Togo">Togo</option>
                                                                                        <option value="Tokelau">Tokelau</option>
                                                                                        <option value="Tonga">Tonga</option>
                                                                                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                                                        <option value="Tunisia">Tunisia</option>
                                                                                        <option value="Turkey">Turkey</option>
                                                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                                                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                                                        <option value="Tuvalu">Tuvalu</option>
                                                                                        <option value="Uganda">Uganda</option>
                                                                                        <option value="Ukraine">Ukraine</option>
                                                                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                                                                        <option value="United States">United States</option>
                                                                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                                                        <option value="United States Virgin Islands">United States Virgin Islands</option>
                                                                                        <option value="Uruguay">Uruguay</option>
                                                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                                                        <option value="Vanuatu">Vanuatu</option>
                                                                                        <option value="Vatican City">Vatican City</option>
                                                                                        <option value="Venezuela">Venezuela</option>
                                                                                        <option value="Vietnam">Vietnam</option>
                                                                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                                                        <option value="Western Sahara">Western Sahara</option>
                                                                                        <option value="Yemen">Yemen</option>
                                                                                        <option value="Zambia">Zambia</option>
                                                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="Add-one" className="col-md-2">Address 1</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="Add-one" placeholder="Address 1" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="Add-two" className="col-md-2">Address 2</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="Add-two" placeholder="Address 2" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="Add-three" className="col-md-2">Address 3</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="Add-one" placeholder="Address 3" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="town" className="col-md-2">Town/City</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="town" placeholder="Town/City" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="country-name" className="col-md-2">County</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="country-name" placeholder="County" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="P-code" className="col-md-2">Postcode</label>
                                                                                <div className="col-md-3">
                                                                                    <input type="text" id="P-code" placeholder="Postcode" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="relationship" className="col-md-2">Relation</label>
                                                                                <div className="col-md-2">
                                                                                    <select name="relationship" placeholder="Relationship" id="relationship" className="form-control form-select">
                                                                                        <option value="">Relationship</option>
                                                                                        <option value="Spouse">Spouse</option>
                                                                                        <option value="Partner">Partner</option>
                                                                                        <option value="Relative">Relative</option>
                                                                                        <option value="Parent">Parent</option>
                                                                                        <option value="Sibling">Sibling</option>
                                                                                        <option value="Child">Child</option>
                                                                                        <option value="Other">Other</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <label for="primary-content" className="col-md-2">Primary contact</label>
                                                                                <div className="col-md-2">
                                                                                    <input type="checkbox" id="primary-content" className="custom-radio" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row my-3">
                                                                                <div className="col-md-1 save-btn">
                                                                                    <button type="button">Save</button>
                                                                                </div>
                                                                                <div className="col-md-1 cancel-btn">
                                                                                    <button type="reset" onClick={hideFormFive}>Cancel</button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="tabSix">
                                                            <div className="row add-padding">
                                                                <div className="col-md-12">
                                                                    <h1>Six</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Personal detail tabs end here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PersonalDetail;