import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>KTXShop</h3>

                                <div className="about-the-store">
                                    <p>Buôn bán mọi thứ bạn cần, giao hàng tận nơi</p>

                                    <ul className="footer-contact-info">
                                        <li>
                                            <i className='bx bx-map'></i> 
                                            Khu B KTX Đại Học Quốc Gia TPHCM Phường Linh Trung Đông Hòa, Dĩ An, Bình Dương, Việt Nam
                                        </li>
                                        <li>
                                            <i className='bx bx-phone-call'></i> 
                                            +113
                                        </li>
                                        <li>
                                            <i className='bx bx-envelope'></i> 
                                            nguyenhaanhkiem@gmail.com
                                        </li>
                                    </ul>
                                </div>

                                <ul className="social-link">
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="d-block" target="_blank">
                                                <i className='bx bxl-pinterest-alt'></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-4">
                                <h3>Liên hệ</h3>

                                <ul className="quick-links">
                                    <li>
                                        <a href="https://www.facebook.com/buihoanhao10t2">
                                            <a>Perfect Bùi</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/nguyenhaanhkiem0701">
                                            <a>Anh Kiểm</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/nguyendinhhung29082000">
                                            <a>Hùng Kaka</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/black.Raizel">
                                            <a>Quốc Nhật</a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/quanphamluong">
                                            <a>Quân Phạm</a>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Hỗ trợ khách hàng</h3>

                                <ul className="customer-support">
                                    <li>
                                        <a href="https://www.facebook.com/buihoanhao10t2">
                                            <a>Chat với trực tiếp</a>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Nhận tin mới</h3>

                                <div className="footer-newsletter-box">
                                    <p>Nhận thông báo mới nhất về các mặt hàng của chúng tôi</p>

                                    <form className="newsletter-form">
                                        <label>Địa chỉ E-mail:</label>
                                        <input type="email" className="input-newsletter" placeholder="Nhập email của bạn" name="email" required />
                                        <button type="submit">Đăng ký</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright <i className='bx bx-copyright'></i>{currentYear} Livani Designed By <a href="https://envytheme.com/" target="_blank">EnvyTheme</a> - All rights reserved.
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-types">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/visa.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/mastercard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/mastercard2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/visa2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/expresscard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;