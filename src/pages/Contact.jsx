import Helmet from 'components/Helmet'
import React from 'react'
import { Link } from 'react-router-dom'

import contact from 'assets/images/contact.jpg'
const Contact = () => {
  return (
    <Helmet title="Liên hệ">
        <div className="breadcrumb">
            <Link to='/'>
                <i className='bx bxs-home'></i>
            </Link>
            <span>/</span>
            <strong>Yame - Giới thiệu</strong>
        </div>
        <div className='contact'>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p>YaMe là một thương hiệu thời trang Việt Nam dành cho giới trẻ. YaMe mang ý nghĩa You are My everything </p>
                    <p>ĐA DẠNG CÁC GU THỜI TRANG chính là phong cách hiện tại của YaMe.vn</p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p>
                    Đặc biệt, GU TỐI GIẢN - ĐƠN GIẢN - THỂ THAO dành cho tất cả mọi người, dành cho nhiều lứa tuổi là GU đang được quan tâm nhất. Sản phẩm chiếm trưng bày lên đến 50% diện tích cửa hàng. Mọi người dễ dàng chọn được những món trang phục cơ bản và thiết yếu nhất dành cho mình.
                    </p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <video className="contact__video" controls>
                        <source src="https://cmsv2.yame.vn/uploads/4287bbf2-23a9-42b1-8813-188dc1a61470/y2mate.com_-_YaMevn__CHI_NH%c3%81NH_770F_S%c6%af_V%e1%ba%a0N_H%e1%ba%a0NH_1080p.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p>
                    YaMe.vn - Vẫn giữ những giá trị vốn có
                    </p>
                    <p>Không mãi chạy theo xu hướng, đánh mất mình. YaMe vẫn luôn giữ những giá trị đã xây đựng và phát triền bao lâu nay, những điểm nổi bật đã mang khách hàng đến với YaMe trong suốt thời gian qua</p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p><strong style={{fontSize: '300%'}}>1"</strong>
                    YaMe mang đến cho khách hàng những sản phẩm CHẤT LƯỢNG TỐT với GIÁ THÀNH RẺ nhất so với chất lượng mang lại
                    </p>
                    <p>
                    YaMe luôn nghiên cứu, phát triển mỗi ngày để mang đến những sản phẩm đa dạng về chất liệu, nhiều tính năng, đa dạng giá thành... mang lại nhiều sự lựa chọn hơn cho khách hàng.
                    </p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p><strong style={{fontSize: '300%'}}>2"</strong>
                    Mang đến những sản phẩm thiết kế đa dạng của các nhà thiết kế trẻ, bắt kịp xu hướng thời trang thế giới nhanh chóng nhất để đưa đến với các tín đồ thời trang Việt Nam
                    </p>
                    <p>Các sản phẩm thời trang tại YaMe rất đa dạng, có thể phục vụ nhiều nhu cầu trang phục ở nhiều lứa tuổi khác nhau. Dù bạn thuộc Gu thời trang nào, YaMe tự tin có thể mang đến sản phẩm thời trang phù hợp với phong cách. </p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p><strong style={{fontSize: '300%'}}>3"</strong>
                    Luôn duy trì chế độ bảo hành 365 ngày đối với mọi sản phẩm
                    </p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p><strong style={{fontSize: '300%'}}>4"</strong>
                    Chi nhánh rộng khắp </p>
                    <p>36+ chi nhánh trên khắp các tỉnh Miền Tây Nam - Đông Nam - Tây Nguyên - Tp.HCM và đang tiếp tục phát triển không ngừng. Riêng TP.HCM YaMe hiện đang có 16+ chi nhánh trải khắp các quận huyện nội và ngoại thành. Ngoài ra còn có website và các trang mạng xã hội cập nhật liên tục sản phẩm mới mỗi ngày.</p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <p><strong style={{fontSize: '300%'}}>5"</strong>
                    Khác biệt với chuỗi trà sữa Kenshin Tea ngay trong không gian mua sắm 
                    </p>
                    <p>Tự hào rằng, cho đến hiện tại chỉ một mình YaMe VN làm được điều này, mang cả một không gian Trà sữa xanh mát vào trong chính khu vực mua sắm.
                    Hiện tại có tại:</p>
                    <p>TP.HỒ CHÍ MINH</p>
                    <p>YaMe & Kenshin Tea Q.Tân Phú: 189 Hòa Bình</p>                
                    <p>TÂY NAM BỘ</p>
                    <p>YaMe & Kenshin Tea Sóc Trăng: 126 Tôn Đức Thắng</p>
                    <p>ĐÔNG NAM BỘ</p>
                    <p>YaMe & Kenshin Tea Vũng Tàu: 528 Trương Công Định</p>
                </div>
            </div>
            <div className='row mb-3 mt-3'>
                <div className='col'>
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    </Helmet>
    
  )
}

export default Contact