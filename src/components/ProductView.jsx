import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from "framer-motion"
import { useSnackbar } from 'notistack';

import Button from './Button'
import numberWithDots from '../utils/numberWithDots'

import { useNavigate } from 'react-router-dom';
import {useDispatch}  from 'react-redux'
import {addToCart} from '../redux/cart/cartItemSlice'

const ProductView = ({product}) => {

    if (product === undefined) 
        product = {
            price: 0,
            title: '',
            colors: [],
            size: [],
    }

    

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [previewImg, setPreviewImg] = useState(product.image01)

    const [expanded, setExpanded] = useState(false)

    const [color, setColor] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    const updateQuantity = (type) => {
        if (type === 'increase') {
            setQuantity(quantity + 1)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if (color === undefined) {
            enqueueSnackbar('Vui lòng chọn màu', { variant: 'error' })
            return false
        }
        if (size === undefined) {
            enqueueSnackbar('Vui lòng chọn kích cỡ', { variant: 'error' })
            return false
        }
        return true
    }

    const handleAddToCart = () => {
        
        if (check()) {
            // console.log({ color, size, quantity })
            dispatch(addToCart({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price,
            }))
            enqueueSnackbar('Đã thêm sản phẩm vào giỏ hàng', { variant: 'success' })
        } 
    }
    const goToCart = () => {
        if (check()) {
            dispatch(addToCart({
                slug: product.slug,
                color: color,
                quantity: quantity,
                size: size,
                price: product.price,
            }))
            navigate('/cart');
        }
    }

  return (
    <div className='product'>
        <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__list__item" 
                    onClick={() => setPreviewImg(product.image01) }
                >
                    <img src={product.image01} alt="" />
                </div>
                <div className="product__images__list__item"
                    onClick={() => setPreviewImg(product.image02)}
                >
                    <img src={product.image02} alt="" />
                </div>
            </div>

            <div className="product__images__main">
                <img src={previewImg} alt="" />
            </div>
            
            <div className={`product-description ${expanded ? 'expand' : '' }`}>
                <div className="product-description__title">
                    Mô tả sản phẩm
                </div>
                <div className="product-description__content"
                    dangerouslySetInnerHTML={{ __html: product.description}}>
                </div>
                <div className="product-description__toggle">
                    <Button size="sm"
                    motion
                        onClick={() => setExpanded(!expanded)}
                    > 
                        {
                            expanded ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>    
        </div>

        <div className="product__info">
            <h1 className="product__info__title">
                {product.title}
            </h1>
            <div className="product__info__item">
                <span className="product__info__item__price">
                    {numberWithDots(product.price)}
                </span>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Màu sắc
                </div>
                <div className="product__info__item__list">
                    {
                        product.colors.map((item, index) => (
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            className={`
                                product__info__item__list__item 
                                ${color === item ? 'active' : ''}`}
                                key={index}
                                onClick={() => setColor(item)}
                            >
                                <div className={`circle bg-${item}`}></div>   
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">
                    Kích cỡ
                </div>
                <div className="product__info__item__list">
                    {
                        product.size.map((item, index) => (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                key={index}
                                className={`
                                    product__info__item__list__item 
                                    ${size === item ? 'active' : ''}`}
                                    onClick={() => setSize(item)}
                            >
                                <span className="product__info__item__list__item__size">
                                    {item}    
                                </span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>

            <div className="product__info__item">
                <div className="product__info__item__title">
                    Số lượng
                </div>
                <div className="product__info__item__quantity">
                    <div className="product__info__item__quantity__btn"
                        onClick={() => updateQuantity('decrease')}
                    >
                        <i className='bx bx-minus'></i>
                    </div>
                    <div className="product__info__item__quantity__input">
                        {quantity}
                    </div>
                    <div className="product__info__item__quantity__btn"
                        onClick={() => updateQuantity('increase')}
                    >
                        <i className='bx bx-plus'></i>
                    </div>
                </div>
            </div>
            <div className="product__info__item">
                <Button size="sm"
                    onClick={handleAddToCart}
                > Thêm vào giỏ </Button>
                <Button size="sm"
                    onClick={() => goToCart()}
                > Mua ngay </Button>
            </div>
        </div>

        <div className={`product-description mobile ${expanded ? 'expand' : '' }`}>
            <div className="product-description__title">
                Mô tả sản phẩm
            </div>
            <div className="product-description__content"
                dangerouslySetInnerHTML={{ __html: product.description}}>
            </div>
            <div className="product-description__toggle">
                <Button size="sm"
                motion
                    onClick={() => setExpanded(!expanded)}
                > 
                    {
                        expanded ? 'Thu gọn' : 'Xem thêm'
                    }
                </Button>
            </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
    product: PropTypes.object,
}

export default ProductView