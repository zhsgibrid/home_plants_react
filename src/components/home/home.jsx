import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './home.module.css';
import PlantImage from '../../img/plants1.jpg';
import Instagram from '../../img/instagram.svg';
import Linkedin from '../../img/linkedin.svg';
import CarDelivery from '../../img/carDelivery.svg';
import Day from '../../img/30days.svg';
import About from '../aboutUs/aboutUs';
import Shift from '../../styles/varibles/shift';
import {CardBuyNow} from '../cards/cardBuyNow';
import Buy1 from '../../img/Buy1.png';
import Buy2 from '../../img/Buy2.png';
import Buy3 from '../../img/Buy3.png';
import CardSlider from '../general/card_slider';
// import {hide_all_border_active} from '../../global_vars&funcs';

function Home(){
  // useEffect(() => {
  //   hide_all_border_active();
  // }, []);

    return (
      <Fragment>
        <main>
          <section>
            <div>
              <img className={classes['main-image']} src={PlantImage} alt='Some plant' />
            </div>
            <div className={classes.borderVertical}> </div>
            <div className={classes.h1}>
              <h1 style={Shift.Home}>Delivering <span style={Shift.ColorHome}>Plants,</span> 
                <br /> Delivering <span style={Shift.ColorHome}> Happiness!</span> </h1>
            </div>
            <div className={classes.iconHome}>
              <img className={classes['main-logo']} src={Instagram} alt="icon" />
              <img className={classes['main-logo']} src={Linkedin} alt="icon" />
            </div>
            <NavLink to='/shop'>
              <button className={classes.btnHome}> <span style={Shift.btnText}>Shop Now</span> </button>
            </NavLink>
          </section>
            <div className={classes.CardBuyNow}>
              <CardBuyNow title="Best Plants For Interior" icon={Buy1} width='272px' left='162px' to="/Shop"/>
              <CardBuyNow title="New Colorful Arrivals" icon={Buy2} width='251px' left='158px' to="/Shop"/>
              <CardBuyNow title="Plants For Healthy" icon={Buy3} width='148px' left='250px' to="/Shop"/>
              
            </div>

          <section >
              <h3 style={Shift.About}>Bestsellers</h3>

                <CardSlider num={6}/>
              {/* <div className={classes.CardBuyNow}>
              <CardBuyNow title="Best Plants For Interior" icon={Buy1} width='272px' left='162px' to="/Shop"/>
              <CardBuyNow title="New Colorful Arrivals" icon={Buy2} width='251px' left='158px' to="/Shop"/>
              <CardBuyNow title="Plants For Healthy" icon={Buy3} width='148px' left='250px' to="/Shop"/>
              
            </div> */}

          </section>
          <section>
           <div className={classes.Delivery}>
              <div className={classes.DeliveryPart}>
                <div>

                <img  id={classes.a} className={classes['main-icon']} src={Day} alt="icon" />
                </div>
                <div>
                <p style={Shift.AboutH4}>30 day health guarantee</p>
                 <p style={Shift.AboutText}> For all our happy plants. <span className={classes.Guarantees}>Read more about guarantees.</span> </p>

                </div>
              </div>
              <div className={classes.borderHeigthSmall}>

              </div>
              <div className={classes.DeliveryPart}>
                <div>

                <img id={classes.s} className={classes['main-icon']} src={CarDelivery} alt="icon" />
                </div>
                <div>

                <p style={Shift.AboutH4}>Free Shipping From $50</p>  
                <p style={Shift.AboutText}>We ship our plants all over World!</p> 
                </div>
              </div>
            </div>
          </section>
          <About/>
        </main>
      </Fragment>
    );
  };

  
export default Home;