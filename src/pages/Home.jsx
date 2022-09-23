import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'

import Banner99 from '../assets/images/Banner99.jpg'
import Thumb from '../assets/images/Thumb.jpg'
import Banner from '../components/Banner'


const Home = () => {

	return (
		<>
		<Banner />
		<Helmet title='Trang chủ'>
			{/* hero slider */}
			<HeroSlider 
				data={heroSliderData}
			/>
			{/* end hero slider */}

			{/* policy section */}
			<Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => 
								<Link key={index} to="/policy">
									<PolicyCard
										name={item.name}
										description={item.description}
										icon={item.icon}
									/>
                            	</Link>)
                        }
                    </Grid>
                </SectionBody>
            </Section>
			{/* end policy section */}

			{/* best selling section */}
			<Section>
				<SectionTitle>
					Best Selling Products
				</SectionTitle>
				<SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
							productData.getProducts(4).map((item, index) => (
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
                    </Grid>
                </SectionBody>
			</Section>
			{/* end best selling section */}

			{/* new products section */}
			<Section>
				<SectionTitle>
					New Products
				</SectionTitle>
				<SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
							productData.getProducts(8).map((item, index) => (
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
                    </Grid>
                </SectionBody>
			</Section>
			{/* end new products section */}

			{/* Banner Sales */}
			<Section>
				<SectionBody>
					<Link to='/catalog'>
						<img src={Banner99} alt="" className='promotional__image'/>
					</Link>
				</SectionBody>
			</Section>
			{/* end Banner Sales */}

			
			<Section>
				<SectionBody>
					<Grid
						col={4}
						mdCol={2}
						smCol={1}
						gap={20}
					>
                        {
							productData.getProducts(12).map((item, index) => (
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
                    </Grid>
				</SectionBody>
			</Section>
					
				<hr />
					
			<Section>
				<SectionBody>
					<Grid
						col={1}
						mdCol={1}
						smCol={1}
						gap={20}
					>
						<div className='promotional__title'>
							<p>Các chương trình Khuyến mãi</p>
							<p>Đừng bỏ lỡ các chương trình khuyến mãi Hot tại Yame.vn</p>
						</div>
					</Grid>
					
					<Grid
						col={2}
						mdCol={2}
						smCol={1}
						gap={20}
					>
						<div className='promotional__banner'>
							<h4 className='promotional__banner__title'>
								SALE 9/9
							</h4>
							<img src={Banner99} alt="promotional__image"  style={{height: '500px'}}/>
						</div>
						<div className='promotional__banner'>
							<h4 className='promotional__banner__title'>
								YaMe.vn - GIỚI THIỆU
							</h4>
							<img src={Thumb} alt="promotional__image" style={{height: '500px'}} />
						</div>
					</Grid>
				</SectionBody>
			</Section>
		</Helmet>
		</>
	)
}

export default Home