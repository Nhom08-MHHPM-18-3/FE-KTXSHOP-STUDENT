import React, { useContext, useEffect, useState } from 'react';
import TopHeader from '../../components/Layouts/TopHeader';
import Navbar from '../../components/Layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import { useRouter, useParams } from 'next/router';
import ProductDetailsStyleOne from '../../components/ProductDetails/ProductDetailsStyleOne';
import FacilitySlider from '../../components/Common/FacilitySlider';
import Footer from '../../components/Layouts/Footer';
import { UserContext } from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';

const Product = () => {
    const user = useContext(UserContext);
    const cart = useContext(CartContext);
    const [product, setProduct] = useState({})
    const [idProduct, setIdProduct] = useState();
    const router = useRouter();
    let { id } = router.query;
    useEffect(() => {
        fetchProduct();
    }, [])
    const fetchProduct = async () => {
        const qs = require('qs');
        const query = qs.stringify({
            filters: {
                id: {
                    $eq: id,
                },
            },
            populate: '*'
        }, {
            encodeValuesOnly: true,
        });
        await fetch(process.env.API_HOST + `/api/products?${query}`)
            .then(response => response.json())
            .then(res => {
                setIdProduct(res.data.id)
                setProduct(res.data[0].attributes)
            });
    }
    return (
        <React.Fragment>
            <TopHeader user={user} />
            <Navbar />
            <PageBanner
                pageTitle="Chi tiết sản phẩm"
                homePageUrl="/"
                homePageText="Trang chủ"
                activePageText={product.ProductName}
            />
            <ProductDetailsStyleOne product={product} cart={cart} id={id} />
            <FacilitySlider />
            <Footer />
        </React.Fragment>
    );
}


export default Product;