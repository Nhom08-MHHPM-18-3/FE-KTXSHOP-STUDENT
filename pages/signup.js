import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';

class Signup extends Component {

    // handleLogin = (e) => {
    //     e.preventDefault();
    //     this.props.userLogin();
    //     Router.push('/');
    // }

    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Tài khoản" 
                    homePageUrl="/" 
                    homePageText="Trang chủ" 
                    activePageText="Đăng ký" 
                /> 

                <section className="signup-area ptb-100">
                    <div className="container">
                        <div className="signup-content">
                            <h2>Tạo tài khoản</h2>

                            <form onSubmit={this.handleLogin} className="signup-form">
                                <div className="form-group">
                                    <label>Họ và tên</label>
                                    <input type="text" className="form-control" id="fname" name="fname" />
                                </div>


                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input type="email" className="form-control" id="name" name="name" />
                                </div>

                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input type="password" className="form-control" id="password" name="password" />
                                </div>

                                <button type="submit" className="default-btn">Đăng ký</button>
                                
                                <div className="text-center">
                                    <Link href="/">
                                        <a className="return-store">Trở lại trang chủ</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <FacilitySlider />
                <Footer />
            </React.Fragment>
        );
    }
}



export default (Signup)