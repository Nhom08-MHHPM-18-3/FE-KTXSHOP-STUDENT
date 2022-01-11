import React, { Component, useContext, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';
import Swal from 'sweetalert2';
import { UserContext } from '../contexts/UserContext';
const Login = () => {
    const user = useContext(UserContext);
    console.log(user);
    useEffect(() => {
        if (user.login === true) {
            Router.push('/')
        }
    }, [user.login])
    const handleLogin = async (e) => {
        e.preventDefault();
        const account = {
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
        }
        let data;
        const qs = require('qs');
        const query = qs.stringify({
            filters: {
                UserName: {
                    $eq: account.username,
                },
            },
            populate: '*'
        }, {
            encodeValuesOnly: true,
        });
        await fetch(process.env.API_HOST + `/api/accounts?${query}`)
            .then(response => response.json())
            .then(res => {
                if (res.data && res.data[0] && res.data[0].attributes) {
                    if (res.data[0].attributes.Password === account.password) {
                        data = res.data[0];
                    }

                }
            });
        if (!data) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập không thành công',
                text: 'Username hoặc password không hợp lệ',
            });

            return;
        }
        user.userLogin(data);
    }
    return (
        <React.Fragment>
            <TopHeader user={user} />
            <Navbar />
            <PageBanner
                pageTitle="Tài khoản"
                homePageUrl="/"
                homePageText="Trang chủ"
                activePageText="Đăng nhập"
            />

            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="login-content">
                                <h2>Đăng nhập</h2>

                                <form onSubmit={handleLogin} className="login-form">
                                    <div className="form-group">
                                        <input type="username" className="form-control" placeholder="Nhập username" name="username" />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Nhập password" name="password" />
                                    </div>

                                    <button type="submit" className="default-btn">Đăng nhập</button>

                                    <div className="text-center">
                                        <Link href="/forgot-password">
                                            <a className="forgot-password">Quên mật khẩu?</a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="new-customer-content">
                                <h2>Khách hàng mới</h2>

                                <span>Tạo tài khoản mới</span>
                                <p>Tạo tài khoản mới để tiến hành mua sản phẩm một cách dễ dàng</p>

                                <Link href="/register">
                                    <a className="optional-btn">Tạo tài khoản mới</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FacilitySlider />
            <Footer />
        </React.Fragment>
    );
}


export default (Login);