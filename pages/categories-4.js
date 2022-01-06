import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CategoriesFullWidth3Grid from '../components/Categories/CategoriesFullWidth3Grid';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';

class Categories4 extends Component {
    render() {
        return (
            <React.Fragment>
               <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Categories Full Width (3 in Row)" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Categories" 
                /> 
                <CategoriesFullWidth3Grid />
                <FacilitySlider />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Categories4;