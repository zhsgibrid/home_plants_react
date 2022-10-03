import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Shift from "../../styles/varibles/shift";
import classes from './Auth.module.css';


export function AuthBase(props) {
    const [auth, setAuth] = useState('singin'); 
    const activeButtonStyle = {
        backgroundColor: '#ffffff',
        boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)'
    }
    const inactiveButtonStyle = {
        backgroundColor: '#efefef'
    }
    // const marginBottom
    return(
        <div className={classes.textCardPlant}>
            <h1 style={Shift.About}  className={classes.h1}>My Account</h1>
            <div className={classes.singReg} style={{marginBottom: auth === "signin"? '133px': '67px'}}>
                <button className={classes.singReg2} id="b" onClick={() => setAuth('sighin')} 
                        style={auth === "signin"? activeButtonStyle: inactiveButtonStyle}>
                    {/* <NavLink to='/auth/signin'> */}
                        Sign In
                    {/* </NavLink> */}
                </button>
                <button className={classes.singReg2} id="b2" onClick={() => setAuth('register')} 
                        style={auth === "register"? activeButtonStyle: inactiveButtonStyle}>
                    {/* <NavLink to='/auth/register'> */}
                        Register
                    {/* </NavLink> */}
                </button>
            </div>
            {auth === "signin" ? <SignIn/>: auth === "register" ? <Register/>: setAuth('signin')}
            <p className={classes.forgotten} style={{textAlign: 'center', width: '100%'}}>
                <NavLink to='/auth/forgottenpass'>Have you forgotten your password?</NavLink>
            </p>
        </div>
    )
}



function SignIn() {
    const margin = {
        marginBottom: '24px'
    } 
    return (
        <>
            <input className={classes.authReg} type="email" placeholder='Email'/>
            <input className={classes.authReg} type="password" placeholder='Password' style={margin}/>
            <div className={classes.rememberme}>
                <input type="checkbox" className={classes.checkbox}/>
                <span style={Shift.miniLabel}>Remember me</span>

            </div>
            <button className={classes.big_black_button} style={Shift.btnText}>SIGN IN</button>
        </>
    )
}

function Register() {
    return (
        <> 
            <p className={classes.subTitle} style={Shift.subTitle}>Register</p>
            <input className={classes.authReg} type="text" placeholder='First name*'/>
            <input className={classes.authReg} type="text" placeholder='Last name*'/>
            <input className={classes.authReg} id={classes.displN} type="text" placeholder='Display name*'/>
            <p className={classes.additionText} style={Shift.additionText}>This will be how your name will be displayed in the account section and in reviews.</p>

            <input className={classes.authReg} type="text" placeholder='Phone number'/>
            <input className={classes.authReg} type="email" placeholder='Email address*'/>

            <p className={classes.subTitle} style={Shift.subsubTitle}>Password</p>
            <input className={classes.authReg} type="password" placeholder='Password' />
            <input className={classes.authReg} type="password" placeholder='Confirm Password' />

            <button className={classes.big_black_button} style={Shift.btnText}>REGISTER</button>
        </>
    )
}

export function ForgotPass() {
    return (
        <div className={classes.textCardPlant}>
            <h1 style={Shift.About} className={classes.h1}>Have you Forgotten Your Password ?</h1>
            <p className={classes.forgotten} style={Shift.TextBlan}>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail</p>
            <input className={classes.authReg} type="email" placeholder='Email'/>
            <button className={classes.big_black_button} style={Shift.btnText}>RESET PASSWORD</button>

        </div>
    )
}



