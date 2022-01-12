import React, { Component, useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';
import { UserContext } from '../contexts/UserContext';
import Swal from 'sweetalert2';
const Register = () => {
    const user = useContext(UserContext);
    const handleRegister = async (e) => {
        e.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        await fetch(process.env.API_HOST + '/api/accounts', {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    PhoneNumber: e.target.elements.phoneNumber.value,
                    Password: e.target.elements.password.value,
                }
            }),
            headers: myHeaders
        })
            .then(response => response.json())
            .then(res => {
                if (res.data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Tạo tài khoản thành công',
                        text: 'Bây giờ bạn có thể đăng nhập và đặt hàng',
                    });
                }
                setTimeout(login, 2000);
            });
    }

    const login = () => {
        Router.push('/login')
    }

    return (
        <React.Fragment>
            <TopHeader user={user} />
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

                        <form onSubmit={(e) => handleRegister(e)} className="signup-form">

                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" />
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



export default (Register)