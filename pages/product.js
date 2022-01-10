import React, {useContext} from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductDetailsStyleOne from '../components/ProductDetails/ProductDetailsStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';
import { UserContext } from '../contexts/UserContext';

const Product = ({product}) => {
    const user = useContext(UserContext);
    console.log(product)
    return (
        <React.Fragment>
            <TopHeader user={user}/>
            <Navbar />
            <PageBanner 
                pageTitle="Chi tiết sản phẩm" 
                homePageUrl="/" 
                homePageText="Trang chủ" 
                activePageText="Dế mèn phiêu lưu ký" 
            /> 
            <ProductDetailsStyleOne product={product} />
            <FacilitySlider />
            <Footer />
        </React.Fragment>
    );
}


export default Product;