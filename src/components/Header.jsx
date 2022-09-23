import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../assets/images/yame-logo.png'
// import logo from '../assets/images/Logo-2.png'

import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { cartItemsCountSelector } from '../redux/cart/selector'

const mainNav = [
  {
	display: "Trang chủ",
	path: "/"
  },
  {
	display: "Sản phẩm",
	path: "/catalog"
  },
  {
	display: "Phụ kiện",
	path: '/accessories'
  },
  {
	display: "Liên hệ",
	path: "/contact"
  },
]

const Header = () => {
	
	const cartItemsCount = useSelector(cartItemsCountSelector)

	const [isActive, setIsActive] = useState(false);
	
	const { pathname } = useLocation();
	const activeNav = mainNav.findIndex(e => e.path === pathname);

	const headerRef = useRef(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				headerRef.current.classList.add('shrink');
			}
			else {
				headerRef.current.classList.remove('shrink');
			}
		})
		return () => {
			window.removeEventListener('scroll', () => {});
		}
	}, []);

	const menuLeft = useRef(null);

	const menuToggle = () => {
		menuLeft.current.classList.toggle('active');
	}

	const handleClick = (e) => {
		setIsActive(current => !current);
		e.preventDefault();
    };

  return (
	<div
		className='header' ref={headerRef}>
		<div className={`search__wrap ${isActive ? 'active' : '' }`}>
			<div className="container">
				<a href="" className='search__close' >
					<i className='bx bx-x search__btn'
						onClick={handleClick}
					></i>
				</a>
				<form action="/search" method='post'>
					<input type="text" name="keyword" placeholder="Nhập thông tin cần tìm..." className='form-control' />
				</form>
			</div>
		</div>
	  	<div className="container">
			<div className="header__logo">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
			</div>
			<div className="header__menu">
				<div className="header__menu__mobile-toggle"
					onClick={menuToggle}
				>
					<i className='bx bx-menu-alt-left'></i>
				</div>
				<div className="header__menu__left" ref={menuLeft}>
					<div className="header__menu__left__close"
						onClick={menuToggle}
					>
						<i className='bx bx-chevron-left'></i>
					</div>
					{
						mainNav.map((item, index) => (
							<motion.div 
								whileTap={{
									scale: 0.75
								}}
								key={index} 
								className={`header__menu__item header__menu__left__item 
									${index === activeNav ? 'active' : '' }
								`}
								onClick={menuToggle}
								>
								<Link to={item.path}>
									<span>{item.display}</span>
								</Link>
							</motion.div>
						))
					}
				</div>
				
				<div className="header__menu__right">
					<motion.div
						whileTap={{
							scale: 0.75
						}} 
						className="header__menu__item header__menu__right__item">
						<i className='bx bx-search'
							onClick={handleClick}
							></i>
					</motion.div>

					<motion.div 
						whileTap={{
							scale: 0.75
						}}
						className="header__menu__item header__menu__right__item">
						<i className='bx bx-user'></i>
					</motion.div>

					<div
						className="header__menu__item header__menu__right__item">
						<Link to="/cart">
							<i className='bx bx-shopping-bag'>
							</i>
							<div className="header__menu__item__quantity">{cartItemsCount}</div>
						</Link>
					</div>
				</div>
			</div>
	  </div>
	</div>
  )
}

export default Header