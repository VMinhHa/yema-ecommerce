import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import AOS from 'aos';
import 'aos/dist/aos.css';

import BannerSale from '../assets/images/Banner.jpg'

const Banner = () => {
  // useEffect(() => {
	// 	AOS.init();
	// 	AOS.refresh(); //recalculate all offsets and positions of elements (called on window resize)
	//   }, []);

  return (
        <div
            data-aos='zoom-in' 
            data-aos-duration="800"
            className='banner__container'>
              <Link to='/catalog'>
                <img src={BannerSale} className="banner__img"/>
              </Link>
        </div>
  )
}

export default Banner