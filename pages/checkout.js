import React, { Component, useContext } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CheckoutContent from '../components/Checkout/CheckoutContent';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';
import CartContext from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';
const Checkout = () => {
 const cart = useContext(CartContext);
 const user = useContext(UserContext);
    return (
        <React.Fragment>
            <TopHeader user={user}/>
            <Navbar />
            <PageBanner
                pageTitle="Đặt hàng"
                homePageUrl="/"
                homePageText="Trang chủ"
                activePageText="Đặt hàng"
            />
            <CheckoutContent cart={cart}/>
            <FacilitySlider />
            <Footer />
        </React.Fragment>
    );
}

export default Checkout;