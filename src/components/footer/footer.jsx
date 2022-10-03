import BorderGeneral from "../general/border";
import classes from "./footer.module.css";
import Shift from "../../styles/varibles/shift";

function Footer() {
    const border_style = {
        top: 0,
        position: 'relative'
    }

    return (
        <footer>
        <BorderGeneral style={border_style}/>
        <div className={classes.footerInformation} >
        <div className={classes.footerList}>
            <ul style={Shift.footerText } className={classes.footerText}>
                <li style={Shift.titleNav}>SHOP</li>
                <li>New Arrivals</li>    
                <li>Plants For Healthy</li>    
                <li>Plants For Interior</li>
                <li>Accessories</li>
            </ul>
            <ul style={Shift.footerText } className={classes.footerText}>
                <li style={Shift.titleNav}>PLANT CARE</li>
                <li>Plant Blog</li>
            </ul>
            <ul style={Shift.footerText } className={classes.footerText}>
                <li style={Shift.titleNav}>INFORMATION</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={classes.newsLetter}>
            <h2 style={Shift.letter} className={classes.h2_c}>Newsletter</h2>
            <p style={Shift.footerText } className={classes.footerTextNews}>Stay up-to-date with all our product releases, news, and events!
            We are constantly bringing in new varieties of flowers for you.</p>
            <input className={classes.inpEmail} type="email" placeholder="Email address" />
            <button className={classes.btnLetter}> <span style={Shift.btnTextFooter}> Sign up</span></button>

        </div>
        </div>
       <BorderGeneral style={border_style}/>
               <div className={classes.copyright}>© 2022 All rights reserved. Create by Zhavoronkova Svitlana.</div>
        </footer>
    )
}

export default Footer;