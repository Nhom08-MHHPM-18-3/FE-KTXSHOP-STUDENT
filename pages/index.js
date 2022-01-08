import React from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import RecentProducts from '../components/HomeOne/RecentProducts';
import OfferStyleOne from '../components/Common/OfferStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';
import PopularProducts from '../components/HomeOne/PopularProducts';
import BestSellingProducts from '../components/HomeOne/BestSellingProducts';

const Index = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <MainBanner />
            <RecentProducts products={products} />
            <OfferStyleOne />
            <PopularProducts products={products} />
            <FacilitySlider />
            <BestSellingProducts products={products} />
            <Footer />
        </React.Fragment>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         products: state.products.filter( product => product.type == 'Women Clothes' )
//     }
// }

export default (Index);