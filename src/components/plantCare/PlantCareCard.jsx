// import { NavLink } from 'react-router-dom';
import {useState} from "react";

import PlantCard from './PlantCardInformation';
import Shift from '../../styles/varibles/shift';
// import test from ';
import classes from './PlantCareCard.module.css';
import { NavLink } from "react-router-dom";

export function PlantCareCard(props) {
    // const [is_open, setOpen] = useState(false);
    const id = props.id;
    const title = props.card_obj.title;
    const icon = props.card_obj.preview_image_path;
    const image = props.card_obj.image_path;
    const data = props.card_obj.data;
    const paragraph = props.card_obj.paragraph;
    // const to = props.to;

    return (
        <div className={classes.PlantCard} >
            
            <div className={classes.imageField}>
                {icon? <img className={classes.PlantCardIcon} src={icon} alt="icon_plant" />
                    : image? <img className={classes.PlantCardIcon} src={image} alt="icon_plant" /> 
                        : <></>}
            </div>

            <div >
                <div style={Shift.textCare} className={classes.textCare}>
                    {data}
                </div>
                <h4 style={Shift.letter} className={classes.letter}>{title}</h4>
                <div>
                    <p style={Shift.textCare} className={classes.previe}>
                        {paragraph? paragraph[0] : ''}
                    </p>
                </div>
                <NavLink to={`/plantCare/card/card${id}`} style={Shift.ReadMore} className={classes.ReadMore}>Read More</NavLink>
            </div>
    
        </div>
    )
}


export default PlantCareCard;