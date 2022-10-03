import {useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';

import classes from './HeaderNav.module.css';
import Shift from '../../styles/varibles/shift';
import Seacrh from '../general/searchInput';
// import Search from '../../img/serch.svg';
import Cart from '../../img/cart.svg';
import LoginMan from '../../img/loginMan.svg';
import {set_border_active_list} from '../../global_vars&funcs';


const HeaderNav = (props) => {
  useEffect(() => {
    set_border_active_list(classes.navitem, classes.navitem_border);
  }, []);

  return (
    <NavBar>
      <NavItem to="/shop" dropdown={<DropdownShop/>}>Shop</NavItem>
      <NavItem to="/plantCare">Plant care</NavItem>
      <NavItem to="/aboutUs">About Us</NavItem>
      <NavItem to="/contacts">Contact</NavItem>
      <NavItem>|</NavItem>
      <NavItem>
        <Seacrh openOnClick={true} />
      </NavItem>
      <NavItem to="/auth/signin" icon={Cart}></NavItem>
      <NavItem to="/auth/signin" icon={LoginMan}></NavItem>
    </NavBar>
  );
};

export default HeaderNav;

function NavBar(props){
  return (
    <div className={classes.navigation}>
      <ul>{props.children}</ul>
    </div>
  );
}

function NavItem(props){
  // const [open, setOpen] = useState(false);
  const style = props.style;
  const to = props.to;
  const icon = props.icon;
  const dropdown = props.dropdown;

  return (
    <li style={style ? style : Shift.navtext} className={`${classes.navitem}`}>
    {/* <li style={style ? style : Shift.navtext} className={classes.navitem}> */}
      {to ?
        <NavLink to={to} style={style ? style : Shift.navtext}>
          {icon && <img className={classes['nav-icon']} src={props.icon} alt="icon" />}
          {props.children}
        </NavLink> 
        : 
          <>
            {icon && 
              <img className={classes['nav-icon']} src={props.icon} alt="icon" />
            }
            {props.children}
          </>
      }

      {dropdown && dropdown}

    </li>
  );
}

function DropdownShop(){
  const filter_column = [
    {title: 'Popular', links: [
      {to: '', label: 'Indor Plants'},
      {to: '', label: 'Outdoor Plants'},
      {to: '', label: 'New Arrivals'},
      {to: '', label: 'Pants for Healthy'}]
    },
    {title: 'Rooms', links: [
      {to: '', label: 'Bathroom'},
      {to: '', label: 'Bedroom'},
      {to: '', label: 'Hallway'},
      {to: '', label: 'Kitchen'},
      {to: '', label: 'Living Room'},
      {to: '', label: 'Study'}]
    },
    {title: 'Height', links: [
      {to: '', label: 'Short (0-40 cm)'},
      {to: '', label: 'Medium (40-80 cm)'},
      {to: '', label: 'Tall (80-120 cm)'},
      {to: '', label: 'Very Tall (+120 cm)'}]}
  ];
  return (
    <DropdownMenu className={classes.filter_column}>
      <div className={classes.filters}>
        {filter_column.map((column, i) => (
          <ShopFilters column={column} key={i}></ShopFilters>
        ))}
      </div>      
    </DropdownMenu>
  );
}

function ShopFilters(props){
  const i = props.i;
  const column = props.column;
  return (
    <div key={i} className={classes.filter}>
      <p style={Shift.titleNav}>{column.title}</p>
      {column.links.map((link, j) => (
        <p key={j} className={classes.filter_item}>
          <a key={j} style={Shift.filter_vars} href={link.to}>{link.label}</a>
        </p>
      ))}
    </div>      
  )
}

function DropdownMenu(props) { 
  const classN = props.className
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, []);
  
  // function calcHeight(el) {
  //   const height = el.offsetHeight;
  //   setMenuHeight(height);
  // };
  
  return (
    <div className={classes.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>
      <div className={classes.dropdown_content}>
      {/* <div className={classN ? classN : classes.dropdown_content}> */}
        {classN ? 
          <div className={classN}>
            {props.children}
          </div>
          :props.children}
      </div>
    </div>
  );
};