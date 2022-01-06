import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CartTable from '../components/Cart/CartTable';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Giỏ hàng" 
                    homePageUrl="/" 
                    homePageText="Trang chủ" 
                    activePageText="Giỏ hàng" 
                /> 
                <CartTable /> 
                <FacilitySlider />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;