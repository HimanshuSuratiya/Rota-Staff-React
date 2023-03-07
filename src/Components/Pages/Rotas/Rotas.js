import React, { useEffect } from 'react'
import Image from '../../images/Image';
import Header from "../../Common components/Header/Header";
import { Link } from 'react-router-dom';

const Rotas = () => {

    useEffect(() => {
        document.getElementById('viewPublish').style.display = "none";
        document.getElementById('viewUnpublish').style.display = "none";
    })

    const creatNewRota = () => {
        var formOne = document.getElementById('createRota');
        var formTwo = document.getElementById('copyRota');
        if (formOne.style.display == "none") {
            formOne.style = "none";
            formTwo.style = "none";
            formOne.style.display = "block";
            formTwo.style.display = "none";
        }
    }

    const copyNewRota = () => {
        var formOneRota = document.getElementById('createRota');
        var formTwoRota = document.getElementById('copyRota');
        if (formTwoRota.style.display == "none") {
            formOneRota.style = "none";
            formTwoRota.style = "none";
            formTwoRota.style.dispaly = "block";
            formOneRota.style.display = "none";
        }
    }

    const lessRotaPublish = () => {
        let showLess = document.getElementById('lessPublish');
        let viewMore = document.getElementById('viewPublish');
        let contentPublish = document.getElementById('beforePublishRota');
        if (viewMore.style.display === "none") {
            showLess.style.display = "none";
            viewMore.style.display = "block";
            contentPublish.style.display = "none";
        }
    }

    const showRotaPublish = () => {
        let showLess = document.getElementById('lessPublish');
        let viewMore = document.getElementById('viewPublish');
        let contentPublish = document.getElementById('beforePublishRota');
        if (showLess.style.display === "none") {
            showLess.style.display = "block";
            viewMore.style.display = "none";
            contentPublish.style.display = "block";
        }
    }

    function unPublishless() {
        let unPublishViewMore = document.getElementById('viewUnpublish');
        let unPublishLess = document.getElementById('lessUnpublish');
        let contentUnpublish = document.getElementById('unpublish_rota_content_detail');
        if (unPublishViewMore.style.display === "none") {
            unPublishViewMore.style.display = "block";
            unPublishLess.style.display = "none";
            contentUnpublish.style.display = "none";
        }
    }

    const unPublishview = () => {
        let unPublishViewMore = document.getElementById('viewUnpublish');
        let unPublishLess = document.getElementById('lessUnpublish');
        let contentUnpublish = document.getElementById('unpublish_rota_content_detail');
        if (unPublishViewMore.style.display === "block") {
            unPublishViewMore.style.display = "none";
            unPublishLess.style.display = "block";
            contentUnpublish.style.display = "block";
        }
    }

    return (
        <>
            <section class="dashbord-main-info">
                <div class="container-fluid main-con-padding-hide">
                    <div class="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div class="col-lg-1 p-0">
                        </div>
                        <div class="col-lg-11">
                            <div class="row">
                                {/* <!-- Top Bar Info Section Start Here --> */}
                                <Header />
                                {/* <!-- Top Bar Info Section End Here --> */}
                                <div class="col-lg-9">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <ul class="nav nav-tabs rotas" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" id="activerotas-tab" data-bs-toggle="tab"
                                                        data-bs-target="#activerotas" type="button" role="tab" aria-controls="activerotas"
                                                        aria-selected="true">Active Rotas</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="oldrotas-tab" data-bs-toggle="tab" data-bs-target="#oldrotas"
                                                        type="button" role="tab" aria-controls="oldrotas" aria-selected="false">Old Rotas</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="shifts-tab" data-bs-toggle="tab" data-bs-target="#shifts"
                                                        type="button" role="tab" aria-controls="shifts" aria-selected="false">Shifts</button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="createrota-tab" data-bs-toggle="tab" data-bs-target="#createrota"
                                                        type="button" role="tab" aria-controls="createrota" aria-selected="false">Create rota </button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" id="rotasettings-tab" data-bs-toggle="tab" data-bs-target="#rotasettings"
                                                        type="button" role="tab" aria-controls="rotasettings" aria-selected="false">Rota
                                                        settings</button>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="activerotas" role="tabpanel"
                                                    aria-labelledby="activerotas-tab">
                                                    <form class="active-rots-slt-from">
                                                        <div class="row">
                                                            <div class="col-lg-9">
                                                                <h3>Active rotas</h3>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3">
                                                                <h4><a href="#">Create new Rota</a></h4>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4">
                                                                <input type="date" placeholder="Select range..." class="form-control" />
                                                            </div>
                                                            <div class="col-lg-3 col-md-3">
                                                                <input type="text" class="form-control form-select" placeholder="Rota name..." />
                                                            </div>
                                                            <div class="col-md-3">
                                                                <button type="button" class="filter_btn">Clear all filter</button>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-3 col-lg-3">
                                                                    <select name="" class="form-select fotm-control" id="">
                                                                        <option value="">Name (A-Z)</option>
                                                                        <option value="">Name (Z-A )</option>
                                                                        <option value="">Start date (Newest first)</option>
                                                                        <option value="">Start date (Oldest first)</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div class="col-md-12 my-5 publish_rota_content">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="d-flex align-items-center">
                                                                <h4>Published rotas</h4>
                                                                <span class="no_of_rota_publish">5</span>
                                                            </div>
                                                            <div class="toggle_btns">
                                                                <button class="view_all_btn" onClick={showRotaPublish} id="viewPublish">View all</button>
                                                                <button class="show_less_btn" onClick={lessRotaPublish} id="lessPublish">Show less</button>
                                                            </div>
                                                        </div>
                                                        <div class="content_about_publish" id="beforePublishRota">
                                                            <h5>In progress</h5>
                                                            <p class="pb-8">Rotas that are currently active and in progress will appear here.</p>
                                                            <h5>Future rotas</h5>
                                                            <p class="pb-8">Rotas that are starting in the future will appear here.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 unpublish_rota_content">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="d-flex align-items-center">
                                                                <h4>Unpublished rotas</h4>
                                                                <span class="no_of_rota_publish">15</span>
                                                            </div>
                                                            <div class="toggle_btns">
                                                                <button class="view_all_btn" onClick={unPublishview} id="viewUnpublish">View all</button>
                                                                <button class="show_less_btn" onClick={unPublishless} id="lessUnpublish">Show less</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 col-lg-12" id="unpublish_rota_content_detail">
                                                        <div class="parent_div">
                                                            <div class="d-flex justify-content-between">
                                                                <div class="d-flex flex-column align-items-center justify-content-center col-md-2 date_of_shift_rota">
                                                                    <div>Fri </div>
                                                                    <div class="">27th Jan</div>
                                                                </div>
                                                                <div class="col-md-10 px-2">
                                                                    <div class="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <Link to="/timeline-view" class="rota_shift_employee_name">Test</Link>
                                                                        </div>
                                                                        <div class="dropdown">
                                                                            <button class=" my-2 d-flex justify-content-center align-items-center three_dot_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <span class="dropbtn">
                                                                                    <svg width="32" class="dropbtn" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                                        <circle cx="16" class="dropbtn" cy="24" r="2"></circle>
                                                                                        <circle cx="16" class="dropbtn" cy="16" r="2"></circle>
                                                                                        <circle cx="16" class="dropbtn" cy="8" r="2"></circle>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <div class="dropdown-menu dropdown-content">
                                                                                <ul>
                                                                                    <li>
                                                                                        <span class="edit-icon dropdown_icon"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                                                                        <Link to="/timeline-view">Edit</Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="i-icon dropdown_icon"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModalViewDetail">View</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="edit-icon dropdown_icon"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                                                                        <a href="./timeline-view.html" data-bs-toggle="modal" data-bs-target="#exampleModal" >Rename</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="tick-icon dropdown_icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                                                                                        <a href="#">Publish</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="delete-icon dropdown_icon"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                                                                                        <a href="#" class="delete_btn">Delete</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!-- Button trigger modal --> */}
                                                                    </div>
                                                                    <div class="d-flex">
                                                                        <div class="pe-3">Total: 0 hrs 0 mins (Incl. breaks)</div>
                                                                        <div class="order-1">7 days<span class="px-2"></span><span>0 employees</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="parent_div">
                                                            <div class="d-flex justify-content-between">
                                                                <div class="d-flex flex-column align-items-center justify-content-center col-md-2 date_of_shift_rota">
                                                                    <div>Fri </div>
                                                                    <div class="">27th Jan</div>
                                                                </div>
                                                                <div class="col-md-10 px-2">
                                                                    <div class="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <Link to="/timeline-view" class="rota_shift_employee_name">Test</Link>
                                                                        </div>
                                                                        <div class="dropdown">
                                                                            <button class=" my-2 d-flex justify-content-center align-items-center three_dot_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <span class="dropbtn">
                                                                                    <svg width="32" class="dropbtn" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                                        <circle cx="16" class="dropbtn" cy="24" r="2"></circle>
                                                                                        <circle cx="16" class="dropbtn" cy="16" r="2"></circle>
                                                                                        <circle cx="16" class="dropbtn" cy="8" r="2"></circle>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <div class="dropdown-menu dropdown-content">
                                                                                <ul>
                                                                                    <li>
                                                                                        <span class="edit-icon dropdown_icon"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                                                                        <Link to="/timeline-view">Edit</Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="i-icon dropdown_icon"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                                                                                        <a href="#">View</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="edit-icon dropdown_icon"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                                                                        <a href="./timeline-view.html" data-bs-toggle="modal" data-bs-target="#exampleModal" >Rename</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="tick-icon dropdown_icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                                                                                        <a href="#">Publish</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="delete-icon dropdown_icon"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                                                                                        <a href="#" class="delete_btn">Delete</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!-- Button trigger modal --> */}
                                                                        {/* <!-- Modal --> */}
                                                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                            <div class="modal-dialog">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header">
                                                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Rename rota</h1>
                                                                                        <button type="button" class="modal_close_btn" data-bs-dismiss="modal" aria-label="Close"> ✖ </button>
                                                                                    </div>
                                                                                    <div class="modal-body">
                                                                                        <div class="col-md-5">
                                                                                            <input type="text" id="team-name" placeholder="Enter name..." class="form-control" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button type="button" class="close_btn_modal" data-bs-dismiss="modal">Close</button>
                                                                                        <button type="button" class="save_btn_modal">Save</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex">
                                                                        <div class="pe-3">Total: 0 hrs 0 mins (Incl. breaks)</div>
                                                                        <div class="order-1">7 days<span class="px-2"></span><span>0 employees</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="parent_div">
                                                            <div class="d-flex justify-content-between">
                                                                <div class="d-flex flex-column align-items-center justify-content-center col-md-2 date_of_shift_rota">
                                                                    <div>Fri </div>
                                                                    <div class="">27th Jan</div>
                                                                </div>
                                                                <div class="col-md-10 px-2">
                                                                    <div class="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <Link to="/timeline-view" class="rota_shift_employee_name">Test</Link>
                                                                        </div>
                                                                        <div class="dropdown">
                                                                            <button class=" my-2 d-flex justify-content-center align-items-center three_dot_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <span class="dropbtn">
                                                                                    <svg width="32" class="dropbtn" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                                                        <circle cx="16" class="dropbtn" cy="24" r="2"></circle>
                                                                                        <circle cx="16" class="dropbtn" cy="16" r="2"></circle>
                                                                                        <circle cx="16" class="dropbtn" cy="8" r="2"></circle>
                                                                                    </svg>
                                                                                </span>
                                                                            </button>
                                                                            <div class="dropdown-menu dropdown-content">
                                                                                <ul>
                                                                                    <li>
                                                                                        <span class="edit-icon dropdown_icon"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                                                                        <Link to="/timeline-view">Edit</Link>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="i-icon dropdown_icon"><i class="fa fa-info-circle" aria-hidden="true"></i></span>
                                                                                        <a href="#">View</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="edit-icon dropdown_icon"><i class="fa fa-pencil" aria-hidden="true"></i></span>
                                                                                        <a href="./timeline-view.html" data-bs-toggle="modal" data-bs-target="#exampleModal" >Rename</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="tick-icon dropdown_icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                                                                                        <a href="#">Publish</a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span class="delete-icon dropdown_icon"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
                                                                                        <a href="#" class="delete_btn">Delete</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!-- Button trigger modal --> */}
                                                                        {/* <!-- Modal --> */}
                                                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                            <div class="modal-dialog">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header">
                                                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Rename rota</h1>
                                                                                        <button type="button" class="modal_close_btn" data-bs-dismiss="modal" aria-label="Close"> ✖ </button>
                                                                                    </div>
                                                                                    <div class="modal-body">
                                                                                        <div class="col-md-5">
                                                                                            <input type="text" id="team-name" placeholder="Enter name..." class="form-control" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button type="button" class="close_btn_modal" data-bs-dismiss="modal">Close</button>
                                                                                        <button type="button" class="save_btn_modal">Save</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="d-flex">
                                                                        <div class="pe-3">Total: 0 hrs 0 mins (Incl. breaks)</div>
                                                                        <div class="order-1">7 days<span class="px-2"></span><span>0 employees</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="no-rate-see">
                                                            <h2>No rotas to see here yet...</h2>
                                                        </div>
                                                    </div>
                                                    <div class="box-shod-info-part">
                                                        <div class="row">
                                                            <div class="cl-lg-2 col-md-2 col-sm-2">
                                                                <div class="icon_info-part"> <i class="fa fa-calendar-check-o"></i> </div>
                                                            </div>
                                                            <div class="cl-lg-10 col-md-10 col-sm-9">
                                                                <div class="content-active-tabsinfo">
                                                                    <h2>Create & manage</h2>
                                                                    <p>Create, plan and manage rotas all in one place. Add multiple staff to shifts, edit
                                                                        ongoing shifts and get an up-to-date view of who's working when. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box-shod-info-part">
                                                        <div class="row">
                                                            <div class="cl-lg-10 col-md-10 col-sm-9">
                                                                <div class="content-active-tabsinfo">
                                                                    <h2>Share with employees
                                                                    </h2>
                                                                    <p>Create, plan and manage rotas all in one place. Add multiple staff to shifts, edit
                                                                        ongoing shifts and get an up-to-date view of who's working when. </p>
                                                                </div>
                                                            </div>
                                                            <div class="cl-lg-2 col-md-2 col-sm-2">
                                                                <div class="icon_info-part"> <i class="fa fa-user-o" aria-hidden="true"></i> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box-shod-info-part">
                                                        <div class="row">
                                                            <div class="cl-lg-2 col-md-2 col-sm-2">
                                                                <div class="icon_info-part"> <i class="fa fa-laptop" aria-hidden="true"></i> </div>
                                                            </div>
                                                            <div class="cl-lg-10 col-md-10 col-sm-9">
                                                                <div class="content-active-tabsinfo">
                                                                    <h2>Everything in one place
                                                                    </h2>
                                                                    <p>Create, plan and manage rotas all in one place. Add multiple staff to shifts, edit
                                                                        ongoing shifts and get an up-to-date view of who's working when. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="oldrotas" role="tabpanel" aria-labelledby="oldrotas-tab">
                                                    <form class="active-rots-slt-from">
                                                        <div class="row">
                                                            <div class="col-lg-9">
                                                                <h3>Old rotas</h3>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3">
                                                                <h4><a href="#">Create new Rota</a></h4>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3">
                                                                <input type="date" placeholder="Select range..." class="form-control" />
                                                            </div>
                                                            <div class="col-lg-3 col-md-3">
                                                                <input type="text" class="form-control" placeholder="Rota name..." />
                                                            </div>
                                                            <div class="col-md-3">
                                                                <button type="button" class="filter_btn">Clear all filter</button>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-3 col-lg-3">
                                                                    <select name="" class="form-select fotm-control" id="">
                                                                        <option value="">Name (A-Z)</option>
                                                                        <option value="">Name (Z-A )</option>
                                                                        <option value="">Start date (Newest first)</option>
                                                                        <option value="">Start date (Oldest first)</option>
                                                                    </select>
                                                                </div>
                                                                <p class="mt-2">Rotas which have ended are shown here.</p>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12">
                                                            <h2 class="unpublice-titel">Unpublished rotas
                                                            </h2>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                                            <div class="box-date-info-area">
                                                                <div class="date-and-day">
                                                                    <h4>Wed</h4>
                                                                    <h5>27th Jul</h5>
                                                                </div>
                                                                <div class="shift-box-info">
                                                                    <h3><a href="#">evening Shift</a></h3>
                                                                    <p>Total: 28 hrs 56 mins (Incl. breaks)</p>
                                                                    <p><span>7 days, </span> <span>3 employees</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                                            <div class="box-date-info-area">
                                                                <div class="date-and-day">
                                                                    <h4>Tue</h4>
                                                                    <h5>19th Jul
                                                                    </h5>
                                                                </div>
                                                                <div class="shift-box-info">
                                                                    <h3><a href="#">evening Shift</a></h3>
                                                                    <p>Total: 28 hrs 56 mins (Incl. breaks)</p>
                                                                    <p><span>7 days, </span> <span>3 employees</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4">
                                                            <div class="box-date-info-area">
                                                                <div class="date-and-day">
                                                                    <h4>Sun</h4>
                                                                    <h5>17th Jul
                                                                    </h5>
                                                                </div>
                                                                <div class="shift-box-info">
                                                                    <h3><a href="#">evening Shift</a></h3>
                                                                    <p>Total: 28 hrs 56 mins (Incl. breaks)</p>
                                                                    <p><span>7 days, </span> <span> 3 employees</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="shifts" role="tabpanel" aria-labelledby="shifts-tab">
                                                    <form class="active-rots-slt-from">
                                                        <div class="row">
                                                            <div class="col-lg-9">
                                                                <h3>Active rotas</h3>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3">
                                                                <h4><a href="#">Create new Rota</a></h4>
                                                            </div>
                                                            <div class="col-lg-8 col-md-8">
                                                                <input type="date" placeholder="Select range..." class="form-control" />
                                                            </div>
                                                            <div class="col-lg-4 col-md-4">
                                                                <input type="text" class="form-control" placeholder="Rota name..." />
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div class="col-lg-12">
                                                        <div class="no-rate-see">
                                                            <h2>No rotas to see here yet...</h2>
                                                        </div>
                                                    </div>
                                                    <div class="box-shod-info-part">
                                                        <div class="row">
                                                            <div class="cl-lg-2 col-md-2 col-sm-2">
                                                                <div class="icon_info-part"> <i class="fa fa-calendar-check-o"></i> </div>
                                                            </div>
                                                            <div class="cl-lg-10 col-md-10 col-sm-9">
                                                                <div class="content-active-tabsinfo">
                                                                    <h2>Create & manage</h2>
                                                                    <p>Create, plan and manage rotas all in one place. Add multiple staff to shifts, edit
                                                                        ongoing shifts and get an up-to-date view of who's working when. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box-shod-info-part">
                                                        <div class="row">
                                                            <div class="cl-lg-10 col-md-10 col-sm-9">
                                                                <div class="content-active-tabsinfo">
                                                                    <h2>Share with employees
                                                                    </h2>
                                                                    <p>Create, plan and manage rotas all in one place. Add multiple staff to shifts, edit
                                                                        ongoing shifts and get an up-to-date view of who's working when. </p>
                                                                </div>
                                                            </div>
                                                            <div class="cl-lg-2 col-md-2 col-sm-2">
                                                                <div class="icon_info-part"> <i class="fa fa-user-o" aria-hidden="true"></i> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="box-shod-info-part">
                                                        <div class="row">
                                                            <div class="cl-lg-2 col-md-2 col-sm-2">
                                                                <div class="icon_info-part"> <i class="fa fa-laptop" aria-hidden="true"></i> </div>
                                                            </div>
                                                            <div class="cl-lg-10 col-md-10 col-sm-9">
                                                                <div class="content-active-tabsinfo">
                                                                    <h2>Everything in one place
                                                                    </h2>
                                                                    <p>Create, plan and manage rotas all in one place. Add multiple staff to shifts, edit
                                                                        ongoing shifts and get an up-to-date view of who's working when. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="createrota" role="tabpanel" aria-labelledby="createrota-tab">
                                                    <div class="row">
                                                        <div class="col-lg-12 create-a-rota-info">
                                                            <h2>Create a rota
                                                            </h2>
                                                            <p>Create and manage staggered shift patterns to support your back to work plans and manage
                                                                shift rotas for employees who regularly change their hours of work.
                                                            </p>
                                                            <h3>What would you like to do?</h3>
                                                        </div>
                                                        <div class="col-lg-4 select-rota" onClick={creatNewRota}>
                                                            <div class="box-createrota-boz card-btn card">
                                                                <input type="radio" class="radio-btn" name="select-btn" />
                                                                <div class="bg-color">
                                                                    <i class="fa fa-calendar"></i>
                                                                    <h3>Create a new rota</h3>
                                                                    <p>Create a new bespoke rota for your business. Choose your shift times, assign employees
                                                                        and add notes before publishing. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 select-rota" onClick={copyNewRota}>
                                                            <div class="box-createrota-boz card card-btn">
                                                                <input type="radio" class="radio-btn" name="select-btn" />
                                                                <div class="bg-color">
                                                                    <i class="fa fa-clone"></i>
                                                                    <h3>Copy an existing rota</h3>
                                                                    <p>Create a new bespoke rota for your business. Choose your shift times, assign employees
                                                                        and add notes before publishing. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <form action="" class="select-rota formOne" id="createRota" style={{ display: 'none' }}>
                                                            <div class="row">
                                                                <div class="col-md-12 mt-4">
                                                                    <h3>Create a new rota</h3>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="rota-name" class="mb-2">Rota name</label>
                                                                    <div class="col-sm-4 col-md-4">
                                                                        <input type="text" id="rota-name" class="form-control"
                                                                            placeholder="Enter a new rota name" />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="select-days" class="mb-2">Rota duration</label>
                                                                    <div class="col-sm-3 col-md-3">
                                                                        <select name="rotaPeriodLength" class="form-select form-control" id="select-days">
                                                                            <option value="4">4 days</option>
                                                                            <option value="5">5 days</option>
                                                                            <option value="6">6 days</option>
                                                                            <option value="7">7 days</option>
                                                                            <option value="8">8 days</option>
                                                                            <option value="9">9 days</option>
                                                                            <option value="10">10 days</option>
                                                                            <option value="11">11 days</option>
                                                                            <option value="12">12 days</option>
                                                                            <option value="13">13 days</option>
                                                                            <option value="14">14 days</option>
                                                                            <option value="Calendar month">Calendar month</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="select-date" class="mb-2">Rota start date</label>
                                                                    <div class="col-sm-4 col-md-4">
                                                                        <input type="date" id="select-date" class="form-control" placeholder="Select date" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 mt-2">
                                                                    <h3>Select your rota view</h3>
                                                                </div>
                                                                <div class="col-lg-4 select-rota">
                                                                    <div class="box-createrota-boz card-btn card">
                                                                        <input type="radio" class="radio-btn" name="select-btn" />
                                                                        <div class="bg-color">
                                                                            <i class="fa fa-th" aria-hidden="true"></i>
                                                                            <h3>Table view</h3>
                                                                            <p>Set your shift times and easily assign this across employees and dates at once, with a click.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 select-rota">
                                                                    <div class="box-createrota-boz card card-btn">
                                                                        <input type="radio" class="radio-btn" name="select-btn" />
                                                                        <div class="bg-color">
                                                                            <i class="fa fa-calendar"></i>
                                                                            <h3>Timeline view</h3>
                                                                            <p>Add your shift times and assign this to as many employees as you need, right then and there. </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 select-rota">
                                                                    <div class="box-createrota-boz card-btn card">
                                                                        <input type="radio" class="radio-btn" name="select-btn" />
                                                                        <div class="bg-color">
                                                                            <i class="fa fa-clone"></i>
                                                                            <h3>Drag and drop view</h3>
                                                                            <p>Drag and drop each employee onto the shift you'd like them to work.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="submit-btn my-3">
                                                                    <button type="submit">Create your rota</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <form action="" class="select-rota formTwo" id="copyRota" style={{ display: 'none' }}>
                                                            <div class="row">
                                                                <div class="col-md-12 mt-4">
                                                                    <h3>Copy an existing rota</h3>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="select-days" class="mb-2">Select a rota to copy</label>
                                                                    <div class="col-sm-3 col-md-4">
                                                                        <select name="whichRotaToCopy" class="form-select form-control" id="whichRotaToCopy">
                                                                            <option disabled="" value="">Select rota...</option>
                                                                            <option value="d9a73a7f-f3cb-41af-b3a5-e2d7115109f5">Mon 09 Jan 2023 - Shift 3</option>
                                                                            <option value="bd2e1487-ee40-43cf-9462-c977a314fcce">Wed 04 Jan 2023 - Shift 1</option>
                                                                            <option value="a8d09c6a-0e39-452e-8fdc-e61ea51c253d">Mon 21 Nov 2022 - Nov week 3
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="rota-name" class="mb-2">Copy the notes for this rota?</label>
                                                                    <div class="row">
                                                                        <div class="col-md-2 select-rota">
                                                                            <div class="card-btn card">
                                                                                <input type="radio" class="radio-btn" name="select-btn" checked />
                                                                                <div class="change-color">
                                                                                    <div class="custom-btn">
                                                                                        <p class="bg-color-custom-btn"></p>
                                                                                    </div>
                                                                                    <div class="bg-color">Yes</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-2 select-rota">
                                                                            <div class="card-btn card">
                                                                                <input type="radio" class="radio-btn" name="select-btn" />
                                                                                <div class="change-color">
                                                                                    <div class="custom-btn">
                                                                                        <p class="bg-color-custom-btn"></p>
                                                                                    </div>
                                                                                    <div class="bg-color">No</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="rota-name" class="mb-2">Copy colour coding and labels for this rota?</label>
                                                                    <div class="row">
                                                                        <div class="col-md-2 select-rota">
                                                                            <div class="card-btn card">
                                                                                <input type="radio" class="radio-btn" name="select-btn-rota" checked />
                                                                                <div class="change-color">
                                                                                    <div class="custom-btn">
                                                                                        <p class="bg-color-custom-btn"></p>
                                                                                    </div>
                                                                                    <div class="bg-color">Yes</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-2 select-rota">
                                                                            <div class="card-btn card">
                                                                                <input type="radio" class="radio-btn" name="select-btn-rota" />
                                                                                <div class="change-color">
                                                                                    <div class="custom-btn">
                                                                                        <p class="bg-color-custom-btn"></p>
                                                                                    </div>
                                                                                    <div class="bg-color">No</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="rota-name" class="mb-2">Rota name</label>
                                                                    <div class="col-sm-4 col-md-4">
                                                                        <input type="text" id="rota-name" class="form-control"
                                                                            placeholder="Enter a new rota name" />
                                                                    </div>
                                                                </div>
                                                                <div class="form-group col-md-12 my-3">
                                                                    <label for="select-date" class="mb-2">Rota start date</label>
                                                                    <div class="col-sm-4 col-md-4">
                                                                        <input type="date" id="select-date" class="form-control" placeholder="Select date" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 mt-2">
                                                                    <h3>Select your rota view</h3>
                                                                </div>
                                                                <div class="col-lg-4 select-rota">
                                                                    <div class="box-createrota-boz card-btn card">
                                                                        <input type="radio" class="radio-btn" name="select-btn" />
                                                                        <div class="bg-color">
                                                                            <i class="fa fa-th" aria-hidden="true"></i>
                                                                            <h3>Table view</h3>
                                                                            <p>Set your shift times and easily assign this across employees and dates at once, with a click.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 select-rota">
                                                                    <div class="box-createrota-boz card card-btn">
                                                                        <input type="radio" class="radio-btn" name="select-btn" />
                                                                        <div class="bg-color">
                                                                            <i class="fa fa-calendar"></i>
                                                                            <h3>Timeline view</h3>
                                                                            <p>Add your shift times and assign this to as many employees as you need, right then and there. </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 select-rota">
                                                                    <div class="box-createrota-boz card-btn card">
                                                                        <input type="radio" class="radio-btn" name="select-btn" />
                                                                        <div class="bg-color">
                                                                            <i class="fa fa-clone"></i>
                                                                            <h3>Drag and drop view</h3>
                                                                            <p>Drag and drop each employee onto the shift you'd like them to work.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="submit-btn my-3">
                                                                    <button type="submit">Create your rota</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="rotasettings" role="tabpanel" aria-labelledby="rotasettings-tab">
                                                    <div class="row">
                                                        <div class="col-lg-12 create-a-rota-info">
                                                            <h3>Select your default rota view below</h3>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="box-createrota-boz">
                                                                <i class="fa fa-th"></i>
                                                                <h3>Table View</h3>
                                                                <p>Create a new bespoke rota for your business. Choose your shift times, assign employees
                                                                    and add notes before publishing. </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="box-createrota-boz">
                                                                <i class="fa fa-calendar-check-o"></i>
                                                                <h3>Timeline View</h3>
                                                                <p>Create a new bespoke rota for your business. Choose your shift times, assign employees
                                                                    and add notes before publishing. </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <div class="box-createrota-boz">
                                                                <i class="fa fa-bars"></i>
                                                                <h3>Drag And Drop View</h3>
                                                                <p>Create a new bespoke rota for your business. Choose your shift times, assign employees
                                                                    and add notes before publishing. </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 company-seeting">
                                                            <h2>Company rota settings
                                                            </h2>
                                                            <h4>Restricted rota permissions
                                                            </h4>
                                                            <p>By enabling this setting, you are restricting the edit and delete capabilities of your
                                                                managers. Once created, rotas can be edited by the author and by admins. Additional managers
                                                                can be given edit permissions from the rota menu.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Col Md 9 End --> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3">
                                    <div class="side-bar-info">
                                        <div class="slider-bar-post-thumbs">
                                            <img src={Image.Rota} alt="Rota Image" />
                                        </div>
                                        <div class="slider-bar-post-content">
                                            <h3>Generate a rota report
                                            </h3>
                                            <p>At the tap of a button, you can download a summary of the hours your staff have worked over a set
                                                period. It also includes the total hours worked. </p>
                                            <h4><a href="#">Download </a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Modal View start --> */}
            <div class="modal fade" id="exampleModalViewDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" style={{ maxWidth: '70rem' }}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Evening Shift</h1>
                            <button type="button" class="modal_close_btn" data-bs-dismiss="modal" aria-label="Close"> ✖ </button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex align-items-center">
                                <span class="me-3">Select Week</span>
                                <div class="col-md-3 col-lg-3 me-3">
                                    <select name="" class="form-select form-control" id="">
                                        <option value="">Week 1 - 27/01/2023</option>
                                    </select>
                                </div>
                                <span>Week total our: <strong>8 hrs (Incl. breaks)</strong></span>
                            </div>
                            <div class="w_full view_detail_modal">
                                <div class="d-flex align-items-center shrink_all">
                                    <div class="w_19 py-2">Employee</div>
                                    <div class="w_19 py-2">Current contracted hours</div>
                                    <div class="w_19 py-2 ps-2">Days worked</div>
                                    <div class="w_19 py-2">
                                        <div class="w_full">Breaks</div>
                                        <small>(Total)</small>
                                    </div>
                                    <div class="w_19 py-2">
                                        <div class="w_full">Total hours</div>
                                        <form action="">
                                            <small class="d-flex align-items-center">
                                                Incl. breaks?
                                                <label for="break_check">
                                                    <input type="checkbox" class="d-none" id="break_check" />
                                                    <span class="custom_checkbox">
                                                        <span class="d-flex align-items-center justify-content-center"><i class="fa fa-check" aria-hidden="true"></i></span>
                                                    </span>
                                                </label>
                                            </small>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="w_full row_detail">
                                <div class="d-flex align-items-center shrink_all">
                                    <div class="w_19 py-2" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>Craig Birch</div>
                                    <div class="w_19 py-2" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>35 hrs</div>
                                    <div class="w_19 py-2 ps-2">
                                        <span class="d-flex">
                                            <p class="ms-2 fw-bolder" style={{ color: '#ad005c' }}>F</p>
                                            <p class="ms-2 fw-bolder">S</p>
                                            <p class="ms-2 fw-bolder">S</p>
                                            <p class="ms-2 fw-bolder">M</p>
                                            <p class="ms-2 fw-bolder">T</p>
                                            <p class="ms-2 fw-bolder">W</p>
                                            <p class="ms-2 fw-bolder">T</p>
                                        </span>
                                    </div>
                                    <div class="w_19 py-2">
                                        <div class="w_full">0 hrs</div>
                                    </div>
                                    <div class="w_19 py-2">
                                        <div class="w_full">8 hrs</div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-end hour_count">
                                    <div class="w_19 m-0 py-3">
                                        <p class="fw-bolder">17 hrs 2 mins</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal View end --> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Rename rota</h1>
                            <button type="button" class="modal_close_btn" data-bs-dismiss="modal" aria-label="Close"> ✖ </button>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-5">
                                <input type="text" id="team-name" placeholder="Enter name..." class="form-control" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="close_btn_modal" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="save_btn_modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rotas;   