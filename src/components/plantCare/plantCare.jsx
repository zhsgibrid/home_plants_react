import {useMemo, useState} from "react";

import {useBorderActive} from '../../global_vars&funcs';
import Shift from '../../styles/varibles/shift';
import classes from './plantCare.module.css';
import Search from "../general/searchInput";
import Pagination from '../general/pagination';
import PlantCareCard from './PlantCareCard';

import cards from './plantCareData.json';



function PlantCare(props) {
    const activate_page = props.activate_page;
    const pageSize = props.pageSize;

    const [currentPage, setCurrentPage] = useState(1);

    const currentCards = useMemo(() => {
        const firstIndex = (currentPage - 1) * pageSize;
        let cards_list = cards.slice(firstIndex, firstIndex+pageSize);
        return cards_list.map((card, i) => (
            <PlantCareCard key={i} id={i} card_obj={card}/>
        )) 
      }, [currentPage, pageSize]);

      

    useBorderActive(1, activate_page);

    return (
        //header
        <div>

            <h1 style={Shift.About}>PlantCare</h1>
            <div className={classes.care} >
                <div className={classes.filters}>
                    <h3 style={Shift.About} className={classes.h3}>Filters</h3>
                    <div className={classes.search_container}>
                        <Search/>
                    </div>
                    <div>
                        <h3 style={Shift.titleContact}>Categories</h3>
                        <div style={Shift.textContact} className={classes.p}>
                            <p>Care</p>
                            <p>Clear</p>
                            <p>Green Living</p>
                            <p>Flowers</p>
                        </div>
                    </div>
                </div>
                <div className={classes.cardsfield}>
                    {currentCards}
                </div>
                <Pagination
                className={classes.pagination_bar}
                currentPage={currentPage}
                totalCount={cards.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>
        //footer
    )
}

export default PlantCare;