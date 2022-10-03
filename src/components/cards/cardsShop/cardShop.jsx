import { NavLink } from 'react-router-dom';
import classes from './cardShop.module.css';
import Shift from '../../../styles/varibles/shift';
// import {useBorderActive} from '../../global_vars&funcs';
import heart from '../../../img/heart.svg';

export function CardShop(props) {
    // const activate_page = props.activate_page;
    // useBorderActive(1, activate_page);
    // const key = props.key;
    const title = props.title;
    const coint = props.coint;
    const icon = props.icon;
    const label = props.label;
    const id = props.id;

    // const icon_width = props.width;
    // const icon_left = props.left;

    return (
        <NavLink style={Shift.LinkShop} className={classes.LinkShop} to={`/shop/card${id}`}>

        <div className={classes.cardShop} >
            {label?
                isNaN(parseFloat(label))? 
                        <div style={Shift.persent} className={classes.div}>{label.toUpperCase()}</div>
                    :
                        <div style={Shift.persent} className={classes.div}>{`- %${label}`}</div>

                : <></>}
            
            <div className={classes.imageField}>
                {icon? <img className={classes.CardShopIcon} src={icon} alt="icon_plant" />
                    : <></>}
                
                <img className={classes.heart} src={heart} alt="heart" />
            </div>

            <div className={classes.cardShopText}>

            <h4 style={Shift.cardShopTitle} className={classes.subTitleCardBuy}>{title}</h4>
            <p style={Shift.cardShopSubTitle} className={classes.subTitleCardBuy}>{'$' + coint.toFixed(2).toString().replace('.', ',')}</p>
            </div>

            {/* <div className={classes.borderBuyNow}></div> */}
         
        </div>
        </NavLink>

    )
}
//  function BuyNow(props) {
// return(
// <img className={classes.heart} src={heart} alt="heart" />

// )


//  }