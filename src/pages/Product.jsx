import React from 'react'
import { Link, useParams } from 'react-router-dom';

import Helmet from '../components/Helmet'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView';

import productData from '../assets/fake-data/products'
import { useEffect } from 'react';

const Product = props => {
	const params = useParams();

	const product = productData.getProductBySlug(params.slug)

	const relatedProducts = productData.getProducts(8)

	useEffect(() => {
		window.scrollTo(0, 0);
}, [product]);


	return (
		<Helmet title={product.title}>
			<Section>
				<SectionBody>
					<div className="breadcrumb">
						<Link to='/catalog'>
							<i className='bx bxs-chevron-left'></i>
						</Link>
						<span>/</span>
						<strong>{product.title}</strong>
					</div>
					<ProductView product={product} />
				</SectionBody>
			</Section>

			<Section>
				<SectionTitle> Relates products </SectionTitle>
				<SectionBody>
					<Grid
						col={4}
						mdCol={2}
						smCol={1}
						gap={20}
					>
						{
							relatedProducts.map((product, index) => (
								<ProductCard
									key={index}
									img01={product.image01}
									img02={product.image02}
									name={product.title}
									price={Number(product.price)}
									slug={product.slug}
								/>
							))
						}
					</Grid>
				</SectionBody>
			</Section>
		</Helmet>
	)
}

export default Product