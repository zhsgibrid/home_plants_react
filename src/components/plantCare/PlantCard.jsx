// import {useBorderActive} from '../../global_vars&funcs';
import {useLocation} from "react-router-dom";

import Shift from "../../styles/varibles/shift";

import Data from './plantCareData.json';
import classes from '../plantCare/PlantCard.module.css';


function PlantCard(props) {
    const url = useLocation();
    let cardId = parseInt(url.pathname.split('/').slice(-1)[0].slice(4)); 

    const card = Data[cardId];
    const title = card.title;
    const image_path = card.image_path;
    const paragraph = card.paragraph;
    return (
        <div className={classes.CardPlant}>
            <img className={classes['img-card']} src={image_path} alt="img" />
            <div>
                <h1 style={Shift.textCardPlant } className={classes.textCardPlant}>{title}</h1>
                <div className={classes.contaxtCardPlant}>
                    {paragraph.map((p, i)=>(
                        <p style={Shift.contaxtCardPlant} key={i}>{p}</p>

                    ))}
                    {/* <p style={Shift.contaxtCardPlant }>As both cat and plant parents, we’re faced with constant dilemmas about whether to risk buying a plant that’s potentially dangerous to our four-legged companions. Take our advice: it’s not worth it. If you have a free-roaming animal in the house, there’s always a chance that they’ll find their way to the tasty greenery.</p>
                    <p style={Shift.contaxtCardPlant }>But do not fret. There are a bunch of cat safe indoor plants that you can add to your ever-growing collection. You can still live your best life and make your home a heavenly, leafy paradise.</p> */}

                </div>

            </div>
        </div>
    )
}

export default PlantCard;
