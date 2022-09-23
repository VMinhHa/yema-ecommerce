import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Grid from './Grid';

const HeroSlider = props => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 250,
        autoplaySpeed: 2000,
        cssEase: "ease",
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                  dots: false,
                }
              },
            ]
      };

    const data = props.data;

    const activeSlide = 0

    return (
        <Slider {...settings}
            className='hero-slider'>
            {
                data.map((item, index) => (
                    <HeroSliderItem  key={index}
                    item={item}
                    active={index === activeSlide}
                    />
                ))
            }
        </Slider>
    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired
}

const HeroSliderItem = props => (
    <Grid
        col={1}
        mdCol={1}
        smCol={1}
        className={`hero-slider__item ${props.active ? 'active' : '' }`}
        style={{width: '700px'}}
    >
        <div className='hero-slider__item__title'>
            <h4 
                style={{paddingTop: '20px', fontSize: '1.7rem',color: '#444444', marginBottom: '8px',fontWeight: 'normal', lineHeight: '1.4'}}
            >
                { props.item.title}
            </h4>
        </div>
        <div className='hero-slider__item__image'>
            <Link to={props.item.path}>
                <img src={props.item.img} 
                alt={props.item.title} />
            </Link>
        </div>
        </Grid>
)

export default HeroSlider