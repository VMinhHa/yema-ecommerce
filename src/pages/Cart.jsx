import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

import Helmet from '../components/Helmet'
import { cartItemsSelector, cartItemsCountSelector, cartTotalSelector } from '../redux/cart/selector'
import numberWithDots from '../utils/numberWithDots'
import CartItem from '../components/CartItem'
import productData from '../assets/fake-data/products'

const Cart = () => {

    const cartItems = useSelector(cartItemsSelector)
    const cartItemsCount = useSelector(cartItemsCountSelector)
    const cartTotal  = useSelector(cartTotalSelector)
    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    // console.log('cartItems: ',cartItems);
    // console.log('cartItemsCount:', cartItemsCount);
    // console.log('cartTotal:',cartTotal);
	// console.log('getCartItemsInfo',productData.getCartItemsInfo(cartItems));

	
	useEffect(() => {
		setCartProducts(productData.getCartItemsInfo(cartItems))
	}, [cartItems])

  return (
    <Helmet title="Cart">
			<div className="breadcrumb">
				<Link to='/'>
					<i className='bx bxs-home'></i>
				</Link>
				<span>/</span>
				<strong>Thông tin giỏ hàng của bạn</strong>
			</div>
		<div className="cart">
			<div className="cart__info">
				<div className="cart__info__txt">
					<h4>Chi tiết đơn hàng</h4>
					<p>
						Bạn đang có {cartItemsCount} sản phẩm trong giỏ hàng
					</p>
					<div className="cart__info__txt__price">
						<span>Tổng:</span>
						<span> đ {numberWithDots(cartTotal)}</span>
					</div>
				</div>
				<div className="cart__info__btn">
					<Button size="block">Đặt hàng</Button>
					<Link to='/catalog'>
						<Button size="block">Tiếp tục mua hàng</Button>
					</Link>
				</div>
				{/* <div className="cart__info__order">
					<h4>Người mua/nhận hàng</h4>
					<form action="">
						<div className="cart__info__order__input">
							<label htmlFor="">Họ và tên</label>	
							<input type="text" placeholder="Tên người nhận" required/>
						</div>
						<div className="cart__info__order__input">
							<label htmlFor="">Số điện thoại</label>	
							<input type="text" placeholder='Số điện thoại' required />
						</div>
						<div className="cart__info__order__input"> 
							<label htmlFor="">Email</label> 
							<input type="email" placeholder='Email' required/>
						</div>
						<div className="cart__info__order__input"> 
							<label htmlFor="">Địa chỉ nhận hàng </label> 
							<input type="text" placeholder='Địa chỉ nhận hàng' required/>
						</div>
						<div className="cart__info__oder__input"> 
							<label htmlFor="">Ghi chú</label> <br />
							<textarea name="" id="" cols="30" rows="10"></textarea>
						</div>
					</form>
					<Button size="sm">Đặt hàng</Button>
					<Button size="sm">Tiếp tục mua hàng</Button>
				</div> */}
			</div>
			<div className="cart__list">
				{
					cartProducts.map((item,index) => (
						<CartItem key={index} item={item} />
					))
				}
			</div>
		</div>
	</Helmet>
      
  )
}

export default Cart