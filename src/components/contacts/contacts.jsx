import {useBorderActive} from '../../global_vars&funcs';
import classes from "./contacts.module.css";
import Shift from "../../styles/varibles/shift";
import Instagram from '../../img/instagram.svg';
import Linkedin from '../../img/linkedin.svg';


function Contacts(props) {
    const activate_page = props.activate_page;
    useBorderActive(3, activate_page);

    return (
        <div>
            <h3 className={classes.contactTitle} style={Shift.About}>Contact</h3>
            <div className={classes.contact}>
                <p className={classes.contactText} style={Shift.textContact}>Need to contact us? We're here to help you :)</p>
                <p className={classes.contactText} style={Shift.titleContact}>Customer Service</p>
                <p className={classes.contactText} style={Shift.textContact}>Email us at HomePlantsinfo@uk.info</p>
                <p className={classes.contactText} style={Shift.titleContact}>Need help with your plants?</p>
                <p className={classes.contactText} style={Shift.textContact}>Call us: +895850985298</p>
                <p className={classes.contactText} style={Shift.titleContact}>Our Social Networks</p>
                <div className={classes.contactIcon}>

                <img className={classes['contact-icon']} src={Instagram} alt="icon" />
                <img className={classes['contact-icons']} src={Linkedin} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Contacts;