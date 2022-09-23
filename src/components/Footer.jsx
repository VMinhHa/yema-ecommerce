import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/yame-logo.png'
import check from '../assets/images/dathongbao.png'

const footerAboutLinks = [
	{
		display: 'Điều khoản mua bán',
		path: '/about',
	},
	{
		display: 'Than phiền/Góp ý',
		path: '/contact',
	},
	{
		display: 'Quy chế hoạt động',
		path: '/recruitment',
	},
	{
		display: 'Chính sách',
		path: '/policy',
	},
]

const footerStore = [
	{
		name: 'Hồ Chí Minh',
		icon: 'bx bx-store',
		address: [
			'YaMe Q.10: 770F, Sư Vạn Hạnh (nd)',
			'YaMe Q.5: 190, Nguyễn Trãi',
			'YaMe Q.6: 102 Hậu Giang',
			'YaMe Q.7: 323 Huỳnh Tấn Phát',
			'YaMe Q.9: 114 Đỗ Xuân Hợp',
			'YaMe Q9: 200 Lê Văn Việt',
			'YaMe Q12: 290 Phan Văn Hớn',
			'YaMe Q.BT: 138 Lê Văn Duyệt'
		]
	},
	{
		name: 'Tây Nam Bộ',
		icon: 'bx bx-store',
		address: ['YaMe Cần Thơ: 45 đường 3 Tháng 2',
				'YaMe Cần Thơ: 381B Nguyễn Văn Cừ',
				'YaMe Tân An: 492 Hùng Vương',
				'YaMe Mỹ Tho: 326 đường Ấp Bắc',
				'YaMe Cái Bè: 455 ĐT875 Khu 4',
				'YaMe Bến Tre: 209 Đồng Khởi Tp.BT']
	},
]


const Footer = () => {
	return (
		<footer className='footer'>
			<div className="container">
				<div className="row">
					<div className='col-3 footer__title'>
						<p className='mb-6' style={{textTransform: 'uppercase'}}>Tổng đài hỗ trợ</p>
						<p className='mb-4'>
							Đặt hàng và thu tiền tận nơi toàn quốc :</p> 
								<strong>(028) 7307 1441</strong>
						{
							
							footerAboutLinks.map((link, index) => (
								<p key={index} 
									className="mb-4"
								>
									<Link to={link.path}>
										{link.display}
									</Link>
								</p>
							))
						}
					</div>

					{
						footerStore.map((store, index) => (
							<div className='col-3 footer__title' key={index}>
									<i className='bx bxs-buildings mb-6' style={{textTransform: 'uppercase'}}>
										{store.name}
									</i>

									{
										store.address.map((address, index) => (
											<p key={index} className="mb-4">
												<i className={store.icon}></i>
												{address}
											</p>
										))
										}
							</div>
						))	
					}

					
					<div className='col-3 footer__title'>
						<img src={logo} alt="" style={{width: '50%'}}/>
						<p className='mb-4'>
							<Link to='/'>
								Giới thiệu về YaMe.vn
							</Link>
						</p>
						<p className='mb-4'>
							<Link to='/'>
								Tuyển dụng
							</Link>
						</p>
					</div>
				</div>
			
				<div className='row'>
					<div className='col-md-10 footer__contact'>
						<p>
							© 2022 - CÔNG TY TNHH YAME VN
						</p>
						<p>
							Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM
						</p>
						<p>
							Địa chỉ đăng ký kinh doanh: 766/3B-3C Sư Vạn Hạnh (Nối dài), Phường 12, Quận 10, TP.HCM - Điện thoại: (028) 3868 4857 - Mua hàng: (028) 7307 1441 - Email: cskh@yame.vn
						</p>
					</div>

					<div className='col-md-2 footer__contact'>
						<img src={check} alt="" style={{maxWidth: '150px', width: '100%'}}/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer