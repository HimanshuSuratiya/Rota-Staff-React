import React, { useState } from 'react'
import Header from "../../Common components/Header/Header";

const AddEmployees = () => {
    const [count, setCount] = useState(0);

    const addNewEmployeForm = `
        <form class="row employees-data mb-2" onsubmit="return validateform()">
            <div class="form-group col-md-2">
                <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First name">
            </div>
            <div class="form-group col-md-2">
                <input type="text" class="form-control" id="lastName" placeholder="Last name">
            </div>
            <div class="form-group col-md-2">
                <input type="email" placeholder="Email" class="form-control" id="emailAdd" value="">
            </div>
            <div class="form-group col-md-2">
                <input type="date" class="form-control" id="firstDate">
            </div>
            <div class="form-group col-md-2">
                <input type="type" class="form-control" placeholder="Select type" id="employType">
            </div>
            <div class="form-group col-md-2 d-flex align-items-center justify-content-center">
                <button type="submit" id="saveBtn" class="save-btn">Save</button>
                <button type="button" id="deltBtn" class="delete-btn"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
        </form>`

    const addNewEmploye = () => {
        document.querySelector('.add-employee-default-form').style.display = 'flex';
        document.querySelector('.add-employee-record-count').style.display = 'block';
        var newRecords = document.getElementById('showDiv')
        newRecords.innerHTML += addNewEmployeForm;
        setCount(count + 1);
    }

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
    return (
        <>
            {/* <!-- Main Wrape Section Start Here --> */}
            <section class="dashbord-main-info">
                <div class="container-fluid p-0">
                    <div class="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div class="col-lg-1 p-0">
                        </div>
                        <div class="col-lg-11">
                            <div class="row">
                                {/* <!-- Top Bar Info Section Start Here --> */}
                                <Header />
                                {/* <!-- Main add employees step's start --> */}
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="add-employ">
                                                <h5>Add multiple employees</h5>
                                            </div>
                                            <div class="follow-step">
                                                <ul class="employees-detail d-flex">
                                                    <li class="Employees-details detail"><span>Employees details</span> </li>
                                                    <li class="Address-details detail" id="bg1"
                                                        style={{ backgroundColor: '#fff', color: '#999' }}><span>Address
                                                            details</span></li>
                                                    <li class="Employment-details detail" id="bg2"
                                                        style={{ backgroundColor: '#fff', color: '#999' }}><span>Employment
                                                            details</span></li>
                                                    <li class="Employee-setup detail" id="bg3"
                                                        style={{ backgroundColor: '#fff', color: '#999' }}><span>Employee set
                                                            up</span></li>
                                                    <li class="done detail" id="bg4"
                                                        style={{ backgroundColor: '#fff', color: '#999' }}>
                                                        <span>Done</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="row" id="form1">
                                                <div class="col-md-12">
                                                    <div class="employees-info">
                                                        <div class="heading col-md-12">
                                                            <h5>Basic employee information</h5>
                                                        </div>
                                                        <div class="row">
                                                            <div class="info col-md-10">
                                                                <p>Add the basic information for your employees. If you get
                                                                    stuck at any point have a look at our <a href="#"
                                                                        style={{ textDecoration: 'none' }}>support page</a>.</p>
                                                            </div>
                                                            <div class="col-md-2">
                                                                <button type="button" id="next1"
                                                                    onClick={() => { next({ id: 'next', form: 'form', count: 1 }) }}
                                                                    class="save-btn">save and continue</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-12 my-4">
                                                    <form onSubmit={(event) => event.preventDefault()} class="add-empoly-form">
                                                        <div class="form-inline row">
                                                            <div class="form-group">
                                                                <label for="name">Sort By</label>
                                                                <div class="inline">
                                                                    <input type="text" id="name" placeholder="First name" />
                                                                    <span class="search_icon"><i class="fa fa-search"
                                                                        aria-hidden="true"></i></span>
                                                                </div>
                                                                <button id="" onClick={addNewEmploye} class="add-employ-btn">
                                                                    Add new employee</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="employees-no add-employee-record-count" style={{ display: 'none' }} >
                                                    <div>
                                                        <h5>New records <span>({count})</span></h5>
                                                    </div>
                                                </div>
                                                <div class="col-md-12" id="showDiv">
                                                    <form class="row employees-data add-employee-default-form mb-2" style={{ display: 'none' }} onsubmit="return validateform()">
                                                        <div class="form-group col-md-2">
                                                            <label for="firstName">First name</label>
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                            <label for="emailAdd">Email</label>
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                            <label id="firstDate" class="form-check-label">Employment start date</label>
                                                        </div>
                                                        <div class="form-group col-md-2">
                                                            <label id="employType" class="form-check-label">Employee type</label>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="col-md-12 my-5">
                                                    <div class="saved-status">
                                                        <div>
                                                            <h5>Saved records (0)</h5>
                                                        </div>
                                                        <div>
                                                            <p>No employees added, please click the " loyee" button above to get started</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Main add employees step's end --> */}
                                    {/* <!-- Top Bar Info Section End Here --> */}

                                    {/* <!-- Right Side Bar Info Start Here --> */}

                                    {/* <!-- Right Side Bar Info end Here --> */}
                                    {/* <!-- Card information start here --> */}

                                    {/* <!-- Card information end here --> */}
                                </div>
                                <div class="container">
                                    <div class="row" id="form2" style={{ display: 'none' }}>
                                        <div class="col-md-12">
                                            <div class="address-detail">
                                                <div class="row my-4">
                                                    <div class="col-md-12">
                                                        <h5>Address details</h5>
                                                    </div>
                                                    <div class="col-md-9">
                                                        <p class="">You can review or add your employee's address details below.
                                                            You can also do this laterfrom their profile page. If you get stuck
                                                            at any point have a look our <a href="#"
                                                                style={{ textDecoration: 'none' }}>support page.</a> </p>
                                                    </div>
                                                    <div class="col-md-3 d-flex justify-content-around">
                                                        <div class="previous"><button type="button" id="back1"
                                                            onClick={() => { back({ id: 'back', form: 'form', count: 2 }) }}
                                                            class="previous_btn">Previous step</button></div>
                                                        <div class="continue_save">
                                                            <button type="button" class="continue_btn" id="next2"
                                                                onClick={() => { next({ id: 'next', form: 'form', count: 2 }) }}>Save and continue
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3 d-flex align-items-center">
                                                        <span>Sagar &nbsp;Pawar</span>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <form action="" class="row">
                                                            <div class="form-group col-md-4 my-3">
                                                                <label for="exampleInputEmail1">Address 1</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="" />
                                                            </div>
                                                            <div class="form-group col-md-4 my-3">
                                                                <label for="exampleInputLastname1">Address 2</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleInputLastname1" placeholder="" />
                                                            </div>
                                                            <div class="form-group col-md-4 my-3">
                                                                <label for="staticEmail">Address 3</label>
                                                                <input type="email" placeholder="" class="form-control"
                                                                    id="staticEmail" value="" />
                                                            </div>
                                                            <div class="form-group col-md-4 my-3">
                                                                <label for="exampleInputEmail1">Town/City</label>
                                                                <input type="text" class="form-control" id="exampleInputEmail1"
                                                                    aria-describedby="emailHelp" placeholder="" />
                                                            </div>
                                                            <div class="form-group col-md-4 my-3">
                                                                <label for="exampleInputLastname1">Country</label>
                                                                <input type="text" class="form-control"
                                                                    id="exampleInputLastname1" placeholder="" />
                                                            </div>
                                                            <div class="form-group col-md-4 my-3">
                                                                <label for="staticEmail">Postcode</label>
                                                                <input type="email" placeholder="" class="form-control"
                                                                    id="staticEmail" value="" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-md-3 d-flex align-items-center justify-content-center">
                                                        <button class="save-btn">save</button>
                                                        <button class="cancel-btn">cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row" id="form3" style={{ display: 'none' }}>
                                        <div class="col-md-12">
                                            <div class="employment-details">
                                                <div class="row my-4">
                                                    <div class="col-md-12">
                                                        <h5>Employment details</h5>
                                                    </div>
                                                    <div class="col-md-9">
                                                        <p class="">Place of work is the location your employee is based at. If
                                                            you do not know this, select 'No location'. You can edit this later
                                                            from the settings page. All employees must be assigned to a public
                                                            holiday jurisdiction. If you get stuck at any point have a look at
                                                            our <a href="#" style={{ textDecoration: 'none' }}>support page.</a>
                                                        </p>
                                                        <p>We've imported locations you've previously told us about. They cannot
                                                            be edited but you can assign employees to them at any time.</p>
                                                    </div>
                                                    <div class="col-md-3 d-flex justify-content-around">
                                                        <div class="previous"><button type="button" id="back2"
                                                            onClick={() => { back({ id: 'back', form: 'form', count: 3 }) }}
                                                            class="previous_btn">Previous step</button></div>
                                                        <div class="continue_save">
                                                            <button type="button" data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal" class="continue_btn"
                                                                id="next3">Save and continue</button>
                                                            <div class="modal fade" id="exampleModal" tabindex="-1"
                                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                                                                                Working Time Pattrens</h1>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            <div class="row">
                                                                                <div class="col-md-8">
                                                                                    <div class="model-content">
                                                                                        <h5 style={{ fontSize: '18px' }}>First, set
                                                                                            up your fixed employees'
                                                                                            hours of work</h5>
                                                                                        <p>Working time patterns are the <b
                                                                                            style={{ fontWeight: '600' }}>days
                                                                                            and hours that your fixed
                                                                                            employees
                                                                                            work in a one week repeating
                                                                                            pattern.</b> We do not currently
                                                                                            support
                                                                                            multiple week repeating patterns.
                                                                                        </p>
                                                                                        <p>Note: Always make sure you set up the
                                                                                            working time patterns before adding
                                                                                            employees. If no patterns exist all
                                                                                            new employees will be assigned to
                                                                                            the default 9 to 5 working time
                                                                                            pattern.</p>
                                                                                        <h5>What you need to know</h5>
                                                                                        <p>Working days and hours for each
                                                                                            pattern (including break times)</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <div class="image">
                                                                                        <img src="https://app.brighthr.com/c51d158a811114f29017.png"
                                                                                            alt="brighthr" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            <button type="button" class="first-btn"
                                                                                data-bs-dismiss="modal">Create working
                                                                                patterns</button>
                                                                            <button type="button" class="second-btn"
                                                                                style={{ border: 'none' }}>I don't
                                                                                want to set up any pattern</button>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row" id="">
                                                    <div class="col-md-12">
                                                        <form class="row employees-data">
                                                            <div class="form-group col-md-3">
                                                                <label for="exampleInputEmail1">Name</label>
                                                                <div class="name">
                                                                    <span>Sagar &nbsp;Pawar</span><span></span>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label for="place">Place of work</label>
                                                                <div class="inline">
                                                                    <input type="text" class="form-control" id="place"
                                                                        placeholder="Grey road" />
                                                                    <span class="search_icon"><i class="fa fa-search"
                                                                        aria-hidden="true"></i></span>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-3">
                                                                <label for="public-holiday">Public holidays observed for</label>
                                                                <div class="inline">
                                                                    <input type="text" class="form-control" id="public-holiday"
                                                                        placeholder="Northern Ireland" />
                                                                    <span class="search_icon"><i class="fa fa-search"
                                                                        aria-hidden="true"></i></span>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-1">
                                                                <label class="form-check-label">Copy</label>
                                                                <p class="folder-icon"><i class="fa fa-folder-o"
                                                                    aria-hidden="true"></i></p>
                                                            </div>
                                                            <div class="col-md-2 d-flex align-items-center">
                                                                <button type="submit" class="save-btn">Save</button>
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
                </div>
            </section>
            {/* <!-- Main Wrape Section End Here --> */}
        </>
    )
}

export default AddEmployees;