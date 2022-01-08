import React, {useContext} from 'react';
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
const data = [
    {
        description: "Long Sleeve Leopard T-Shirt",
        discount: false,
        discountOff: 10,
        id: "5DAcUDDd4t8xWgl9kvXl",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover1-1588704436043.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img1-1588704428273.jpg",
        newPrice: 320,
        newProduct: false,
        offer: true,
        oldPrice: 250,
        onSale: false,
        title: "Long Sleeve Leopard T-Shirt",
        type: "T-Shirt"
    },
    {
        description: "Sunnyme Women's Ponchos",
        discount: false,
        discountOff: 0,
        id: "81tgigL0U2zUHoTj85Ht",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: true,
        title: "Sunnyme Women's Ponchos",
        type: "Women Clothes"
    },
    {
        description: "Women's Modern-Skinny",
        discount: true,
        discountOff: 20,
        id: "9Gkmfo4HjW4tKvMYlpX9",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover12-1588705972392.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img12-1588705966818.jpg",
        newPrice: 100,
        newProduct: false,
        offer: true,
        oldPrice: 150,
        onSale: false,
        title: "Women's Modern-Skinny",
        type: "T-Shirt"
    },
    {
        description: "Block Striped Draped",
        discount: false,
        discountOff: 0,
        id: "D9wwa2ZDu281HV5s95b9",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover11-1588705905171.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img11-1588705899677.jpg",
        newPrice: 210,
        newProduct: false,
        offer: false,
        oldPrice: 220,
        onSale: false,
        title: "Block Striped Draped",
        type: "T-Shirt"
    },
    {
        description: "Gildan Men's Crew T-Shirt",
        discount: false,
        discountOff: 0,
        id: "EzJtxvc9Zr7iG8k7eIlB",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover4-1588705109913.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img4-1588705104640.jpg",
        newPrice: 150,
        newProduct: false,
        offer: false,
        oldPrice: 150,
        onSale: false,
        title: "Gildan Men's Crew T-Shirt",
        type: "T-Shirt"
    },
    {
        description: "Yidarton Women's Comfy",
        discount: false,
        discountOff: 0,
        id: "Hddr7Vh0vM0i5D0JIh7o",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover5-1588705177941.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img5-1588705171063.jpg",
        newPrice: 240,
        newProduct: false,
        offer: false,
        oldPrice: 240,
        onSale: false,
        title: "Yidarton Women's Comfy",
        type: "Women Clothes"
    },
    {
        description: "Chest Cutout Tunics Long",
        discount: true,
        discountOff: 20,
        id: "N14nGR4yn5g526TdTJNU",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover15-1588706198456.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img15-1588706193731.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: false,
        title: "Chest Cutout Tunics Long",
        type: "T-Shirt"
    },
    {
        description: "T-Shirt Casual Stripe Tunic",
        discount: true,
        discountOff: 20,
        id: "S4xjmGV8IiWH9Vb9JnWq",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover14-1588706135870.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img14-1588706130023.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: false,
        title: "T-Shirt Casual Stripe Tunic",
        type: "T-Shirt"
    },
    {
        description: "Causal V-Neck Soft Raglan",
        discount: false,
        discountOff: 0,
        id: "VTcZrUJDHqq8ftDYFbV8",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover2-1588704656583.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img2-1588704648214.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: true,
        title: "Causal V-Neck Soft Raglan",
        type: "Women Clothes"
    },
]
const Index = ({ products }) => {
    const cart = useContext(CartContext);
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <MainBanner />
            <RecentProducts products={data} addToCart={cart.addToCart}/>
            <OfferStyleOne />
            <PopularProducts products={data} />
            <FacilitySlider />
            <BestSellingProducts products={data} />
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