// import {useState} from "react";
import classes from './switch.module.css';
import Shift from '../../styles/varibles/shift';

function ToggleSwitch(props){
    const label = props.label;
    return (
        <div className={classes.switch_container}>
            <span style={Shift.switch_label}>{label}</span>

            <label className={classes.switch}>
                <input type="checkbox"/>
                <span className={classes.slider}/>
            </label>
        </div>
    );
}

export default ToggleSwitch;
