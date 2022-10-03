// import React from 'react';
import { Fragment} from 'react';
import { NavLink } from 'react-router-dom';

import HeaderNav from './HeaderNav';
import BorderGeneral from '../general/border';
import Logo from '../../img/Logo.png';
import classes from './Header.module.css';


const Header = (props) => {

    return (
      <Fragment>
        <header className={classes.header}>
        <BorderGeneral/>
        <div >
          <NavLink to='/'><img className={classes['main-logo']} src={Logo} alt="logo"/></NavLink>
        </div>
          <HeaderNav />
        </header>
      </Fragment>
    );
  };


export default Header;