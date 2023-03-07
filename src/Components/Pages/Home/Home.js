import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Header from "../../Common components/Header/Header";

const Home = () => {

    useEffect(() => {
        const allTimingAreas = document.querySelectorAll('.crical-part-info-main');

        allTimingAreas.forEach((element, index) => {
            element.setAttribute("id", `crical-part-info-main-${index}`)
        });

        const selectedElement = document.querySelector('.add_trans').id.split('-')[4];
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.my-summary-info:before {left: calc(2.4% + 14.4%*${selectedElement});}`;
    })


    const moveUp = (event) => {
        const id = event.currentTarget.id
        const getIdNumber = id.split("-")
        const selectedElement = document.querySelector('.add_trans').id.split('-')[4];
        const mainElement = document.getElementById(id);
        const allTimingAreas = document.querySelectorAll('.crical-part-info-main');

        allTimingAreas.forEach((element, index) => {
            if (element.id == mainElement.id) {
                mainElement.classList.add('add_trans');
            } else if (element.id != mainElement.id) {
                element.classList.remove('add_trans');
            }
        });

        if (getIdNumber[4] > selectedElement) {
            var styleElem = document.head.appendChild(document.createElement("style"));
            styleElem.innerHTML = `.my-summary-info:before {left: calc(2.4% + 14.4%*${getIdNumber[4]});}`;
        } else {
            var styleElem = document.head.appendChild(document.createElement("style"));
            styleElem.innerHTML = `.my-summary-info:before {left: calc(2.4% + 14.4%*${getIdNumber[4]});}`;
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
                                <div className="col-lg-8">
                                    <div className="main-shodw-box">
                                        <div className="row">
                                            <div className="col-lg-6 over-title-top">
                                                <h2>Overview</h2>
                                            </div>
                                            <div className="col-lg-6 add-btn-top">
                                                <h4><NavLink to="/annual-leave">+ Add time off</NavLink></h4>
                                            </div>
                                        </div>
                                        <div className="flx-box">
                                            <div className="crical-part-info-main" onClick={moveUp}>
                                                <div className="cricat-up-text">
                                                    <h3>Mon 25 Jul</h3>
                                                </div>
                                                <div className="crical-info-prt"> </div>
                                                <div className="stock-crical-info">
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                            <div className="crical-part-info-main" onClick={moveUp}>
                                                <div className="cricat-up-text">
                                                    <h3>Mon 25 Jul</h3>
                                                </div>
                                                <div className="crical-info-prt"> </div>
                                                <div className="stock-crical-info">
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                            <div className="crical-part-info-main" onClick={moveUp}>
                                                <div className="cricat-up-text">
                                                    <h3>Mon 25 Jul</h3>
                                                </div>
                                                <div className="crical-info-prt"> </div>
                                                <div className="stock-crical-info">
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                            <div className="crical-part-info-main add_trans" onClick={moveUp}>
                                                <div className="cricat-up-text">
                                                    <h3>Mon 25 Jul</h3>
                                                </div>
                                                <div className="crical-info-prt"> </div>
                                                <div className="stock-crical-info">
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                            <div className="crical-part-info-main" onClick={moveUp}>
                                                <div className="cricat-up-text">
                                                    <h3>Mon 25 Jul</h3>
                                                </div>
                                                <div className="crical-info-prt"> </div>
                                                <div className="stock-crical-info">
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                            <div className="crical-part-info-main" onClick={moveUp}>
                                                <div className="cricat-up-text">
                                                    <h3>Mon 25 Jul</h3>
                                                </div>
                                                <div className="crical-info-prt"> </div>
                                                <div className="stock-crical-info">
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                            <div className="crical-part-info-main" onClick={moveUp}>
                                                <div className="cricat-up-text">
                                                    <h3>Mon 25 Jul</h3>
                                                </div>
                                                <div className="crical-info-prt"> </div>
                                                <div className="stock-crical-info">
                                                    <h2>1</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="line-hr"></div>
                                        </div>
                                        <div className="my-summary-info">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <h4 className="my-summry-part">My summary</h4>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="main-white-crical"></div>
                                                    <div className="main-summery-box-strock">
                                                        <h2>1</h2>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9 col-md-9">
                                                    <form>
                                                        <div className="from-equal">
                                                            <div className="from-group">
                                                                <input type="text" className="first-from" placeholder="Annual Leave" />
                                                            </div>
                                                            <div className="from-group">
                                                                <input type="text" className="secound-from" placeholder="0 Other" />
                                                            </div>
                                                        </div>
                                                        <div className="from-equal">
                                                            <div className="from-group">
                                                                <input type="text" className="three-from" placeholder="1 Sickness" />
                                                            </div>
                                                            <div className="from-group">
                                                                <input type="text" className="four-from" placeholder="0 Time off in lieu" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Side Bar Info Start Here */}
                                <div className="col-lg-4 col-md-3">
                                    <aside className="right-side-info">
                                        <div className="right-side-info-bar">
                                            <h2>My Summary</h2>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                                        type="button" role="tab" aria-controls="home" aria-selected="true">Absence</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Overtime</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="tab-first-infos">
                                                    <h3><a href="#">Request time off</a></h3>
                                                    <h4><a href="#">Request time off</a></h4>
                                                </div>
                                                <div className="main-equal-side">
                                                    <div className="main-sidebar-crial">
                                                        <div className="crical-onw-white"></div>
                                                        <div className="crical-strok"> </div>
                                                    </div>
                                                    <div className="crical-content-bar">
                                                        <h4><strong>-5 hrs 0 mins</strong> remaining</h4>
                                                        <h4><strong>0 hrs 0 mins</strong> allowance</h4>
                                                    </div>
                                                </div>
                                                <p className="next">Next up - No absences coming up</p>
                                                <div className="btn-info-sep">
                                                    <p>You've also taken</p>
                                                    <div className="ntn-prt">
                                                        <h5><a href="#">0 Lateness</a></h5>
                                                        <h6><a href="#">0 Sickness</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="tab-first-infos">
                                                    <h3><a href="#">Request time off</a></h3>
                                                    <h4><a href="#">Request time off</a></h4>
                                                </div>
                                                <div className="main-equal-side">
                                                    <div className="main-sidebar-crial">
                                                        <div className="crical-onw-white"></div>
                                                        <div className="crical-strok"> </div>
                                                    </div>
                                                    <div className="crical-content-bar">
                                                        <h4><strong>-5 hrs 0 mins</strong> remaining</h4>
                                                        <h4><strong>0 hrs 0 mins</strong> allowance</h4>
                                                    </div>
                                                </div>
                                                <p className="next">Next up - No absences coming up</p>
                                                <div className="btn-info-sep">
                                                    <p>You've also taken</p>
                                                    <div className="ntn-prt">
                                                        <h5><a href="#">0 Lateness</a></h5>
                                                        <h6><a href="#">0 Sickness</a></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                        </div>
                                    </aside>
                                </div>
                                {/* Right Side Bar Info end Here */}
                                {/* Card information start here  */}
                                <div className="row my-3">
                                    <div className="col-md-4 my-2">
                                        <div className="card">
                                            <div className="detail-area">
                                                <div>
                                                    <h2 className="heading">Payroll</h2>
                                                </div>
                                                <div>
                                                    <p className="sub-heading">navigator</p>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <div className="headline">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                                <div className="more-headline">
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet sint deserunt. Non
                                                        mollitia labore explicabo! <span className="see-more-card"><a href="#"
                                                            style={{ textDecoration: 'none' }}>See More</a></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="card">
                                            <div className="payroll">
                                                <div>
                                                    <h2 className="heading">Turbotalent</h2>
                                                </div>
                                                <div>
                                                    <p className="sub-heading">navigator</p>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <div className="headline">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                                <div className="more-headline">
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet sint deserunt. Non
                                                        mollitia labore explicabo! <span className="see-more-card"><a href="#"
                                                            style={{ textDecoration: 'none' }}>See More</a></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="card">
                                            <div className="turbotalent">
                                                <div>
                                                    <h2 className="heading">backtowork</h2>
                                                </div>
                                                <div>
                                                    <p className="sub-heading">navigator</p>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <div className="headline">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                                <div className="more-headline">
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet sint deserunt. Non
                                                        mollitia labore explicabo! <span className="see-more-card"><a href="#"
                                                            style={{ textDecoration: 'none' }}>See More</a></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="card">
                                            <div className="turbotalent">
                                                <div>
                                                    <h2 className="heading">Turbotalent</h2>
                                                </div>
                                                <div>
                                                    <p className="sub-heading">navigator</p>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <div className="headline">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                                <div className="more-headline">
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet sint deserunt. Non
                                                        mollitia labore explicabo! <span className="see-more-card"><a href="#"
                                                            style={{ textDecoration: 'none' }}>See More</a></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="card">
                                            <div className="detail-area">
                                                <div>
                                                    <h2 className="heading">payroll</h2>
                                                </div>
                                                <div>
                                                    <p className="sub-heading">navigator</p>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <div className="headline">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                                <div className="more-headline">
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet sint deserunt. Non
                                                        mollitia labore explicabo! <span className="see-more-card"><a href="#"
                                                            style={{ textDecoration: 'none' }}>See More</a></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2">
                                        <div className="card">
                                            <div className="backtowork">
                                                <div>
                                                    <h2 className="heading">backtowork</h2>
                                                </div>
                                                <div>
                                                    <p className="sub-heading">navigator</p>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <div className="headline">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                                <div className="more-headline">
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet sint deserunt. Non
                                                        mollitia labore explicabo! <span className="see-more-card"><a href="#"
                                                            style={{ textDecoration: 'none' }}>See More</a></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card information end here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;