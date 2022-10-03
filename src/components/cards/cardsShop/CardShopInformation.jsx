import {useLocation} from "react-router-dom";

import Shift from "../../../styles/varibles/shift";

// import Data from './plantCareData.json';
import CardSlider from '../../general/card_slider';

import classes from './CardShopInformation.module.css';
import sunny from '../../../img/sunny.svg';
import bottle from '../../../img/bottle.svg';
import leaf from '../../../img/leaf.svg';
import Counter from '../../counter/counter';



function ShopCardInformation(props) {
    // const url = useLocation();
    // let cardId = parseInt(url.pathname.split('/').slice(-1)[0].slice(4)); 

    // const card = Data[cardId];
    // const title = card.title;
    // const image_path = card.image_path;
    // const paragraph = card.paragraph;
    const card = props.card;
    const title = card.title;
    const image_path = card.icon;
    const sub_img = card.sub_image;

    return (
        <div className={classes.CardPlant}>
            <div className={classes.ShopCardInformation}>
                <div className={classes.imgAll}>

                <div className={classes['img-card1']}>

                    {sub_img.map((img_p, i) => (
                        <img className={classes['img-card2']} src={img_p} key={i} alt="img" />
                    ))}
                </div>
                <img className={classes['img-card']} src={image_path} alt="img" />

                </div>
                <div>
                
                    <div className={classes.titlecoint}>

                    <h1 style={Shift.About } className={classes.titleShopCard}>{title}</h1>
                    <div style={Shift.letter }>
                        {'$' + card.coin.toFixed(2).toString().replace('.', ',')}
                    </div>
                    </div>
                    
                    <p style={Shift.size } className={classes.size}>Plant height (cm): one size only</p>
                    <div style={Shift.imgText}  className={classes.imgTextGlobal}>
                        <div className={classes.imgText} >

                        <img className={classes.img} src={sunny} alt="img" />
                        <p className={classes.imgTextP}>Keep it somewhere in bright indirect light, but it can also acclimatise to full sun or light shade.</p>
                        </div>
                        <div className={classes.imgText}>

                        <img className={classes.img} src={bottle} alt="img" />
                        <p className={classes.imgTextP}>It like a little extra humidity so put it in the shower and spray my leaves every few weeks.</p>
                        </div>
                        <div className={classes.imgText}>

                        <img className={classes.img} src={leaf} alt="img" />
                        <p className={classes.imgTextP}>Wipe leaves every couple of weeks to remove dust build-up.</p>
                        </div>
                    </div>
                    <div className={classes.counterBTN}>
                        <Counter/>
                        <button style={Shift.btnText } className={classes.btnText}>ADD TO CART</button>
                    </div>
                    <div className={classes.contaxtCardPlant}>
                        {/* {paragraph.map((p, i)=>(
                            <p style={Shift.contaxtCardPlant} key={i}>{p}</p>

                        ))} */}
                        {/* <p style={Shift.contaxtCardPlant }>As both cat and plant parents, we’re faced with constant dilemmas about whether to risk buying a plant that’s potentially dangerous to our four-legged companions. Take our advice: it’s not worth it. If you have a free-roaming animal in the house, there’s always a chance that they’ll find their way to the tasty greenery.</p>
                        <p style={Shift.contaxtCardPlant }>But do not fret. There are a bunch of cat safe indoor plants that you can add to your ever-growing collection. You can still live your best life and make your home a heavenly, leafy paradise.</p> */}

                    </div>

                </div>
            </div>
            <div>
                {/* описание товара */}
            </div>
            <div>
                <h2 style={Shift.About }>We Recommend</h2>
                {/* <Slider/> */}
                <CardSlider num={6}/>
                        
            </div>
        </div>
    )
}

export default ShopCardInformation;
