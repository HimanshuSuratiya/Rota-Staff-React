import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from "../../images/Image";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { TextField, Checkbox } from '@mui/material';
import { NavLink } from "react-router-dom";
import "./Login.css";
import { LoginApi } from "./Service";

const useStyles = makeStyles(() => ({
    LoginBtn: {
        color: '#ffffff',
        marginLeft: '11px',
        background: '#188dc7',
        padding: '4px 20px',
        transition: '.5s',
        borderRadius: '20px',
        fontSize: '16px',
        border: '2px solid #188dc7',
        "&:hover": {
            color: 'black',
            border: '2px solid #188dc7',
            background: '#8fc1e2',
        },
    },

    LoginPlatforms: {
        height: '50px',
        width: '100%',
    },

    LoginFields: {
        alignItems: "center",
        borderRadius: "10px",
        width: "48%",
        cursor: 'pointer',
        backgroundColor: "#edecec",
        color: '#383535',
    },

    googleImage: {
        "& img": {
            height: "20px",
            width: "20px",
        },
    },

    loginScreen: {
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }
}));

const defaultState = {
    email: '',
    password: '',
}

const Login = ({ setIsAuthenticated }) => {
    const classes = useStyles();
    const [state, setState] = useState(defaultState)

    const loginApproved = (event) => {
        const { name, value } = event.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const handleLogin = () => {
        LoginApi(state, setIsAuthenticated)
    }

    return (
        <>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div>
                            <h3 className="pb-3 text-center m-0">Login</h3>
                            <div className={`d-flex p-5 ${classes.loginScreen}`}>
                                <div className="col-md-8 col-lg-7 col-xl-6 Loginanimation">
                                    <img src={Image.loginAnnimation} className="img-fluid" alt="Phone image" />
                                </div>
                                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                    <div>
                                        <div className="form-outline">
                                            <TextField
                                                name="email"
                                                fullWidth
                                                variant='outlined'
                                                size='large'
                                                label={'Email'}
                                                onChange={loginApproved}
                                            />
                                        </div>
                                        <div className="form-outline mt-3 mb-3">
                                            <TextField
                                                name="password"
                                                fullWidth
                                                type="password"
                                                variant='outlined'
                                                size='large'
                                                onChange={loginApproved}
                                                label={'Password'}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center mb-2">
                                            <div className="form-check">
                                                <Checkbox className="m-0 p-0" />
                                                <label className="form-check-label" for="form1Example3"> Remember me </label>
                                            </div>
                                            <NavLink to="/login/forget-password" >Forgot password?</NavLink>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button className={`btn btn-primary btn-lg btn-block ${classes.LoginBtn}`} onClick={handleLogin}>Log in <ArrowRightAltIcon /></button>
                                        </div>
                                        <div className="divider d-flex align-items-center my-3 justify-content-center">
                                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                        </div>
                                        <div className={`${classes.LoginPlatforms} d-flex justify-content-between`}>
                                            <div className={`d-flex justify-content-center ${classes.LoginFields}`}>
                                                <div className="media-options">
                                                    <a>
                                                        <FacebookIcon />
                                                        <span> Login with Facebook</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`d-flex justify-content-center ${classes.LoginFields}`}>
                                                <div className="media-options">
                                                    <a className={classes.googleImage}>
                                                        <img src={Image.google} />
                                                        <span> Login with Google</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <NavLink className="d-flex justify-content-center text-decoration-underline mt-3" to="/signup">Don't have an account ?... </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;