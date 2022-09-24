import React, { useRef, useState,useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../assets/images/yame-logo.png'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'
import { cartItemsCountSelector } from '../redux/cart/selector'
import LoginModal from './LoginModal'
// import Slide from '@mui/material/Slide';
// import Register from '../Auth/components/Register'
// import Login from '../Auth/components/Login'

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';

// import { Box, IconButton } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close';
// import DropdownUser from 'Auth/components'
// import LoginModal from './LoginModal'

// import { showForm, hideForm } from 'redux/auth/userSlice'

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

// const Transition = React.forwardRef(function Transition(props, ref) {
// 	return <Slide direction="up" ref={ref} {...props} />;
//   });
  
//   const MODE = {
// 	LOGIN: 'login',
// 	REGISTER: 'register',
//   }
const Header = () => {
	//Login	
	// const loggedInUser = useSelector(state => state.user.current)
	// const isLoggedIn = !!loggedInUser.id
	
	// const dispatch = useDispatch()
	const cartItemsCount = useSelector(cartItemsCountSelector)
	const [isActive, setIsActive] = useState(false);
	const { pathname } = useLocation();
	const activeNav = mainNav.findIndex(e => e.path === pathname);
	const headerRef = useRef(null);
    // const [mode, setMode] = useState(MODE.LOGIN);

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

	// const [open, setOpen] = useState(false);

	// const handleClickOpen = () => {
	// 	// dispatch(showForm())
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	// dispatch(hideForm())
	// 	setOpen(false);
	// };

  return (
	<div className='header' ref={headerRef}>
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
					
					{/* <div 
						className="header__menu__item header__menu__right__item">
						{
							!isLoggedIn && (
								<button 
									className='header__menu__item__btn'
									onClick={handleClickOpen}>
										Đăng nhập 
								</button>
							)
						}
						{
							isLoggedIn && (
								<DropdownUser/>
							)
						} */}

						{/*
						<Dialog
							disableEscapeKeyDown
							open={open}
							TransitionComponent={Transition}
							keepMounted
							onClose={handleClose}
							// aria-describedby="alert-dialog-slide-description"
						>
							{/* <DialogTitle>{"Login"}</DialogTitle> 
							<IconButton style={{ position: "absolute", top: "8px", right: "8px"}}
          						onClick={handleClose}
							>
							<CloseIcon />
							</IconButton>

							<DialogContent>
							{mode === MODE.REGISTER && (
								<>
								<Register closeDialog={handleClose} /> 

								<Box textAlign="center">
									<Button color="primary" onClick={() => setMode(MODE.LOGIN)} >
									Already have an account. Login here.
									</Button>
								</Box>
								</>
							)}

							{mode === MODE.LOGIN && (
								<>
								<Login closeDialog={handleClose} />
								
								<Box textAlign="center">
									<Button color="primary" 
									onClick={() => setMode(MODE.REGISTER)} >
									Don't have an account. Register here.
									</Button>
								</Box>
								</>
							)}
				
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose}>Cancel</Button>
							</DialogActions>
						</Dialog> */}

					{/* </div> */}
					<LoginModal />

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