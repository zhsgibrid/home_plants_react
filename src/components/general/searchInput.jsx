import {useState} from "react";
import classes from './searchInput.module.css';
import Shift from '../../styles/varibles/shift';

import SearchImg from '../../img/serch.svg';

function Search(props){
    const [is_open, setOpen] = useState(false);
    const id = props.id;
    const openOnClick = props.openOnClick;
    
    const focus_style = {
        top: '3px',
        position: 'relative',
        width: '241px',
        zIndex: 1,
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        cursor: 'text'
    }

    const search_img = {
        background: `url(${SearchImg}) center center no-repeat`
    }

    let compose_style = {};
    // useEffect(() =>{
        if (!openOnClick){
            
            compose_style = {...Shift.input, ...focus_style};
            // for (let prop in Shift.input){
                // prop = prop.toString(); 
                // compose_style[prop] = Shift.input[prop]; 
            // }
            // for (let prop in focus_style){
                // prop = prop.toString(); 
                // compose_style[prop] = focus_style[prop]; 
            // }
        }
    // });

    function set_style(event){
        // console.log(event);
        // console.log(event.target.style);
        for (let prop_key of Object.keys(focus_style)){
            // console.log(prop_key);
            prop_key = prop_key.toString();
            
            if (is_open){
                event.target.style[prop_key] = '';
            }else{
                event.target.style[prop_key] = focus_style[prop_key];
            }
        }
        is_open? setOpen(false): setOpen(true);
    }
    return (
        <div className={classes.search_container} id={id}> 
         {/* <> */}
            {openOnClick? 
                <input className={classes.search_input} type="text" name="seacrh" style={Shift.input} onClick={(e) => {set_style(e)}} onBlur={(e) => {set_style(e)}} placeholder="Search.."/>
                :
                <input className={classes.search_input} type="text" name="seacrh" style={compose_style} onLoad={(e) => {set_style(e)}} placeholder="Search.."/>
                }
            <input className={classes.search_submit} value="" type="submit" style={search_img}/>
        {/* </> */}
        </div>
    );
}



export default Search;
