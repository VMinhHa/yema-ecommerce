import React, { useCallback,useEffect,useState } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'
import Button from '../components/Button'
import InfinityList from '../components/InfinityList'

import productData from '../assets/fake-data/products'
import category from '../assets/fake-data/category'
import colors from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import { useRef } from 'react'
import NotFoundProduct from '../components/NotFoundProduct'

const Catalog = () => {

	const initFilter = {
		category: [],
		color: [],
		size: [],
	}

	const productList = productData.getAllProducts()

	const [products, setProducts] = useState(productList)

	const [filter, setFilter] = useState(initFilter)

	// const [searchText, setSearchText] = useState('')


	const filterSelected = (type, checked, item) => {
		if (checked) {
			switch (type) {
				case 'CATEGORY':
					setFilter({
						...filter,
						category: [...filter.category, item.categorySlug]
					})
					break
				case 'COLOR':
					setFilter({
						...filter,
						color: [...filter.color, item.color]
					})
					break
				case 'SIZE':
					setFilter({
						...filter,
						size: [...filter.size, item.size]
					})
					break
				default:
			}
		} else {
			switch (type) {
				case 'CATEGORY':
					const newCategory = filter.category.filter(e => e !== item.categorySlug)
					setFilter({...filter, category: newCategory})
					break
				case 'COLOR':
					const newColor = filter.color.filter(e => e !== item.color)
					setFilter({...filter, color: newColor})
					break
				case 'SIZE':
					const newSize = filter.size.filter(e => e !== item.size)
					setFilter({...filter, size: newSize})
					break
				default:
			}
		}
	}

	const clearFilter = () => {
		setFilter(initFilter)
	}

	const searchItem = (e) => {
		if (e.target.value === '') {
			setProducts(productList)
		}else 
			if(e.target.value !== '') {
				const newProducts = productList.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())
					|| item.searchTerm.toLowerCase().includes(e.target.value.toLowerCase()))
				setProducts(newProducts)
			}
	}

	const updateProducts = useCallback(
		() => {
			let temp = productList

			if (filter.category.length > 0) {
				temp = temp.filter(e => 
					filter.category.includes(e.categorySlug))
			} else 
				if (filter.color.length > 0) {
					temp = temp.filter(e => {
						const check = e.colors.find(color => 
							filter.color.includes(color))
							return check !== undefined
					})
			} else 
				if (filter.size.length > 0) {
					temp = temp.filter(e => {
						const check = e.size.find(size => 
							filter.size.includes(size))
							return check !== undefined
					})
			}
			setProducts(temp)
		},[filter, productList]
	)

	useEffect(() => {
		updateProducts()
	}, [updateProducts])
	
	const filterRef = useRef(null)

	const showHideFilter = () => {
		filterRef.current.classList.toggle('active')
	}

	return (
		<Helmet title='Sản phẩm'>
			{/* {
				console.log(filter)
			} */}
			<div 
			 	
				className="catalog">
				<div className="catalog__filter" ref={filterRef}>
					
					<div className="catalog__filter__close" onClick={showHideFilter}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>

					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">
							<input type='text' 
								className='catalog__filter__widget__title__input'
								placeholder='Tìm kiếm sản phẩm' 
								onChange={searchItem}
								/>
							<h4>Categories</h4>
						</div>
						<div className="catalog__filter__widget__content">
							{
								category.map((item, index) => (
										<div key={index} className="catalog__filter__widget__content__item">
											<CheckBox 
												label={item.display} 
												onChange={(input) => filterSelected('CATEGORY', input.checked, item)}
												checked={filter.category.includes(item.categorySlug)}
											/>
										</div>

								))
								
							}
						</div>
					</div>

					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">
							<h4>Color</h4>
						</div>
						<div className="catalog__filter__widget__content">
							{
								colors.map((item, index) => (
										<div key={index} className="catalog__filter__widget__content__item">
											<CheckBox
												label={item.display} 
												onChange={(input) => filterSelected('COLOR', input.checked, item)}
												checked={filter.color.includes(item.color)}
											/>
										</div>

								))
							}
						</div>
					</div>

					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">
							<h4>Size</h4>
						</div>
						<div className="catalog__filter__widget__content">
							{
								size.map((item, index) => (
									
										<div key={index} className="catalog__filter__widget__content__item">
											<CheckBox 
												label={item.display} 
												onChange={(input) => filterSelected('SIZE', input.checked, item)}
												checked={filter.size.includes(item.size)}
											/>
										</div>

								))
							}
						</div>
					</div>
					
					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget">
							 <Button 
							 	size="sm"
								onClick={clearFilter}
								>Reset</Button>
						</div>
					</div>
				</div>
			
				<div className="catalog__filter__toggle">
					<Button size="sm" onClick={showHideFilter}>
						Filter
					</Button>
				</div>

				<div className="catalog__content">
					{/* <Grid
						col={3}
						mdCol={2}
						smCol={1}
						gap={20}
					>
						
						{
							// products.map((item, index) => (
							// 	<ProductCard
							// 		key={index}
							// 		img01={item.image01}
							// 		img02={item.image02}
							// 		name={item.title}
							// 		price={Number(item.price)}
							// 		slug={item.slug}
							// 	/>
							// ))
						}

							
							{
								products.filter((item) => {
									if(searchText == '') {
										return item
									} else if(item.searchTerm.toLowerCase().includes(searchText.toLowerCase())) {
										return item 
									}
								}).map((item, index) => (
									<ProductCard
										key={index}
										img01={item.image01}
										img02={item.image02}
										name={item.title}
										price={Number(item.price)}
										slug={item.slug}
									/>
								))
								
							}
					</Grid> */}
					{/* <InfinityList
						data={products}
						searchText={searchText}
					/> */}
					{
						products.length > 0 ? (
							<InfinityList
								data={products}
							/>
						) : (
							<NotFoundProduct />
						)
					}
				</div>

			</div>
		</Helmet>
	)
}

export default Catalog