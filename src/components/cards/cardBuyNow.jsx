import { NavLink } from 'react-router-dom';
import classes from './cardBuyNow.module.css';
import Shift from '../../styles/varibles/shift';
// import {useBorderActive} from '../../global_vars&funcs';
// import 

export function CardBuyNow(props) {
    // const activate_page = props.activate_page;
    // useBorderActive(1, activate_page);
    const title = props.title;
    const icon = props.icon;
    const to = props.to;

    const icon_width = props.width;
    const icon_left = props.left;

    return (
        <div className={classes.BuyNow}>
            {icon? <img className={classes.imgBuyNow} src={icon} alt="icon_plant" style={{width:icon_width, left:icon_left }} />
                : <></>}

            <h4 style={Shift.subTitle} className={classes.subTitleCardBuy}>{title}</h4>
            <NavLink style={Shift.LinkBuyNow} className={classes.LinkBuyNow} to={to}>Buy now</NavLink>
            <div className={classes.borderBuyNow}></div>
            {/* <a href=""></a> */}

        {/* <BuyNow/> */}
        </div>

    )
}
 function BuyNow(props) {
return(
<a href="">Buy now</a>

)


 }