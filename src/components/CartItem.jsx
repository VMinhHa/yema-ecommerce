import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import numberWithDots from '../utils/numberWithDots'
import { Link } from 'react-router-dom'

import { updateItem, removeItem} from '../redux/cart/cartItemSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
	
    const [itemCart, setItemCart] = useState(item)
    const [quantity, setQuantity] = useState(item.quantity)
    
    useEffect(() => {
		setItemCart(item)
		setQuantity(item.quantity)
	}, [item])

	const updateQuantity = (opt) => {
		if(opt === 'inc'){
			dispatch(updateItem({...itemCart, quantity: quantity + 1}))
			// setQuantity(quantity + 1)
		}
		if(opt === 'dec'){
			dispatch(updateItem({...itemCart, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
			// setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
		}
	}

	const removeCart = () => {
		dispatch(removeItem(itemCart))
	}

    return (
		<div className="cart__item">
			<div className="cart__item__image">
				<img src={item.product.image01} alt="" />
			</div>
			<div className="cart__item__info">
				<div className="cart__item__info__name">
					<Link to={`/catalog/${item.slug}`}>
						{`${item.product.title} - ${item.color} - ${item.size}`}
					</Link>
					<div className="cart__item__info__price">
						{numberWithDots(item.product.price)} đ
					</div>
				</div>
				<div className="cart__item__info__quantify">
					<div className="product__info__item__quantity cart__btn">
						<div className="product__info__item__quantity__btn"
							onClick={() => updateQuantity('dec')}
						>
							<i className='bx bx-minus'></i>
						</div>
						<div className="product__info__item__quantity__input">
							{quantity}
						</div>
						<div className="product__info__item__quantity__btn"
							onClick={() => updateQuantity('inc')}
						>
							<i className='bx bx-plus'></i>
						</div>
					</div>
				</div>
				<div className="cart__item__info__price">
					{numberWithDots(item.product.price * item.quantity)} đ
				</div>
				<div className="cart__item__info__delete">
					<i className='bx bx-trash'
						onClick={removeCart}
					></i>
				</div>
			</div>
		</div>
  	)
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CartItem