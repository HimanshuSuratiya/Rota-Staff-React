import React from 'react'

const Header = () => {
    return (
        <>
            <div className="row position">
                <div className="col-lg-6 col-md-6 d-flex justify-content-between">
                    <div className="logo-text">
                        <h3>SCI<span>TS</span></h3>
                    </div>
                    <div className="search_employees">
                        <input type="" value="" placeholder="Search employees..." />
                        <span className="search_icon"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="col-lg-6 right_links col-md-6 d-flex justify-content-end">
                    <div className="header_link">
                        <ul className="d-flex ul_link">
                            <li className="list_items"><button className="button"> What's new</button> <span
                                className="notification-number">
                                <p className="notification">5</p>
                            </span></li>
                            <li className="list_items"> <button className="button"> <span className="question-mark"><i
                                className="fa fa-question" aria-hidden="true"></i></span> Help</button></li>
                            <li className="list_items"> <button className="button"> <span className="comment-icon"><i
                                className="fa fa-comment-o" aria-hidden="true"></i></span> Feedback</button></li>
                            <li className="list_items"> <button className="button"> <span className="setting-icon"><i className="fa fa-cog"
                                aria-hidden="true"></i></span> Setting</button></li>
                        </ul>
                    </div>
                    <div className="logout-right">
                        <h4><a href="#"><i className="fa fa-sign-in"></i> Logout</a></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;