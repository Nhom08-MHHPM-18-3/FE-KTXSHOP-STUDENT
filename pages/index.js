import React, { useContext, useEffect, useState } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import RecentProducts from '../components/HomeOne/RecentProducts';
import OfferStyleOne from '../components/Common/OfferStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';
import PopularProducts from '../components/HomeOne/PopularProducts';
import BestSellingProducts from '../components/HomeOne/BestSellingProducts';
import CartContext from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Index = () => {
    const cart = useContext(CartContext);
    const user = useContext(UserContext);
    const [data, setData] = useState([])
    
    useEffect(() => {
        fecthNewProduct();
    }, [])

    const fecthNewProduct = async () => {
        const qs = require('qs');
        const query = qs.stringify({
            sort: ['id:desc',],
            populate: '*'
        }, {
            encodeValuesOnly: true,
        });
        await fetch(process.env.API_HOST + `/api/products?${query}`)
            .then(response => response.json())
            .then(res => {
                if (res.data && res.data[0] && res.data[0].attributes) {
                    const dataProduct = res.data.slice(0, 6);
                    dataProduct.map((item, index) => {
                        data.push(item)
                        setData([...data])
                    })
                }
            });
    }
    return (
        <React.Fragment>
            <TopHeader user={user} />
            <Navbar />
            <MainBanner />
            <RecentProducts products={data} addToCart={cart.addToCart} />
            <OfferStyleOne />
            <PopularProducts products={data} />
            <FacilitySlider />
            <BestSellingProducts products={data} />
            <Footer />
        </React.Fragment>
    );
}


export default (Index);