// import Math;
import {useMemo, useState} from "react";
import {useLocation} from "react-router-dom";

import {useBorderActive} from '../../global_vars&funcs';
import { CardShop } from '../cards/cardsShop/cardShop';
import classes from './Shop.module.css';

import Shift from "../../styles/varibles/shift";
import Search from "../general/searchInput";
import ToggleSwitch from "../general/switch";
import RangeSlider from "../general/range_slider";
import Pagination from "../general/pagination";
import ShopCardInformation from '../cards/cardsShop/CardShopInformation'; 

import cards from './cards.json';

export function CardsList(props){
    let cards_list = cards;
    const num = props.num;
    const from = props.from;
    if (num){
        if (from){
            cards_list = cards_list.slice(from, from+num);
        }else{
            cards_list = cards_list.slice(0, num);
        }
    }

    return(
        <>
            {cards_list.map((card, i) => (
                <CardShop key={i} id={i} title={card.title} coint={card.coin} icon={card.icon} label={card.label} />
            ))}
        </>
    )
}

// function ProductShop(props) {
//     const card = cards[props.cardId];
//     return (
//         <></>
//     )
// }


function Shop(props) {
    
    const {activate_page, 
            pageSize,
            to_card} = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setminPrice] = useState(0);
    const [maxPrice, setmaxPrice] = useState(0);

    const currentCards = useMemo(() => {
      const firstIndex = (currentPage - 1) * pageSize;
      return <CardsList from={firstIndex} num={pageSize}/> ;
    }, [currentPage, pageSize]);

    // const activate_page = props.activate_page;
    useBorderActive(0, activate_page);
    
    // const to_card = props.to_card;
    const url = useLocation();
    let cardId;
    if (to_card){
        cardId = parseInt(url.pathname.split('/').slice(-1)[0].slice(4)); 
    }

    return (
        <div> 
            {to_card?
                <ShopCardInformation card={cards[cardId]}/>
                :
                <>
                    <h1 style={Shift.About}>All Plants</h1>
                    <div className={classes.All}>

                    
                    <div className={classes.filters}>
                        <h3 style={Shift.About} className={classes.h3}>Filters</h3>
                            <Search id={classes.filter_search}/>
                        <select style={Shift.select} className={classes.selecter} name="Hight" id="">
                            <option value="" disabled selected hidden>Hight</option>
                            <option value="short" >Short (0-40cm)</option>
                            <option value="medium" >Medium (40-80cm)</option>
                            <option value="tall" >Tall (80-120cm)</option>
                            <option value="verytall" >Very Tall (+120cm)</option>
                        </select>
                        
                        <select style={Shift.select} className={classes.selecter} name="Type" id="">
                            <option value="" disabled selected hidden>Type</option>
                            <option value="bathroom">Bathroom</option>
                            <option value="bedroom">Bedroom</option>
                            <option value="hallway">Hallway</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="living">Living Room</option>
                            <option value="study">Study</option>

                        </select>
                        <div>
                            <RangeSlider min={0} max={180} 
                                onChange={({ min, max }) => {setminPrice(min); setmaxPrice(max)}}/>
                        </div>
                        <div className={classes.Price}>
                            <p style={Shift.price}>Price: ${minPrice} - ${maxPrice}</p>
                            <p style={Shift.priceFilter}>Filter</p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                            <ToggleSwitch label="On sale"/>
                            <ToggleSwitch label="In stock"/>
                                                  </div>
                    </div>
                    <div className={classes.currentPage}>
                        {currentCards}
                    </div>
                    </div>
                  
                        <Pagination
                            className={classes.pagination_bar}
                            currentPage={currentPage}
                            totalCount={cards.length}
                            pageSize={pageSize}
                            onPageChange={page => setCurrentPage(page)}/>
                   
                </>
            }
        </div>
    )
}

export default Shop;