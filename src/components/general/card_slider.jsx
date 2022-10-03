import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./card_slider.css";

// import Shift from '../../styles/varibles/shift';
import { CardsList } from '../shop/shop';


const responsive = {
    // superLargeDesktop: {
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1
    // }
  };


const CustomArrow = ({ onClick, ...rest }) => {
    const {
        // onMove,
        // carouselState: { currentSlide, deviceType },
        direction
    } = rest;

    const arr_class = 'react-multiple-carousel__arrow';
    const arr_class_direc = arr_class.concat(' ', arr_class.concat('--', direction));
    return <button className={arr_class_direc} onClick={() => onClick()} />;
};


function CardSlider(props){
    const card_num = props.num;
    // const cards_ = [...Array([...Array(card_num).keys()].map((card_num_i, i) => (
    //                     <Cards_list key={i} from={card_num_i} num={1}/>
    //                 )))];
    // console.log(cards_);
    return (
        <Carousel responsive={responsive} 
            containerClass='carousel-container' 
            sliderClass='carousel-slider' 
            // infinite={true} 
            // arrows={false}
            
            // renderDotsOutside={true}
            customRightArrow={<CustomArrow direction='right'/>}
            customLeftArrow={<CustomArrow direction='left'/>}
            showDots={true}
            // CustomDot={<CustomDot items={cards_}/>}
            dotListClass='dots_lines'
            centerMode={true}>
                {/* {cards_} */}
            {[...Array(card_num).keys()].map((card_num_i, i) => (
                <CardsList key={i} from={card_num_i} num={1}/>
            ))}
        </Carousel>
    );
}

export default CardSlider;