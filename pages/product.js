import React from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductDetailsStyleOne from '../components/ProductDetails/ProductDetailsStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import Footer from '../components/Layouts/Footer';

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
    {
        description: "Sleeve Faux Suede Loose",
        discount: true,
        discountOff: 20,
        id: "YmN6cjNxsuqjkkp544TI",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover13-1588706058885.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img13-1588706053393.jpg",
        newPrice: 250,
        newProduct: true,
        offer: true,
        oldPrice: 320,
        onSale: false,
        title: "Sleeve Faux Suede Loose",
        type: "T-Shirt"
    },
    {
        description: "Open Front Knit Sweaters",
        discount: false,
        discountOff: 0,
        id: "cn9vWWcTfc1BGtslq6rd",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover9-1588705771122.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img9-1588705765307.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: false,
        title: "Open Front Knit Sweaters",
        type: "T-Shirt",
    },
    {
        description: "Tbmpoy Men's Tapered",
        discount: false,
        discountOff: 0,
        id: "ip4v3oU4B0kNkadpoKw7",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover7-1588705407247.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img7-1588705402171.jpg",
        newPrice: 250,
        newProduct: false,
        offer: true,
        oldPrice: 250,
        onSale: false,
        title: "Tbmpoy Men's Tapered",
        type: "Shoes",
    },
    {
        description: "Womens Tops Color",
        discount: true,
        discountOff: 0,
        id: "msBbGUW3ngGgK36LO8V4",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover6-1588705244164.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img6-1588705236520.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: false,
        title: "Womens Tops Color",
        type: "Women Clothes"
    },
    {
        description: "Hanes Men's Pullover",
        discount: false,
        discountOff: 0,
        id: "sVYa7ukhehhatWuUeHlC",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover3-1588705031467.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img3-1588705025358.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: true,
        title: "Hanes Men's Pullover",
        type: "Women Clothes"
    },
    {
        description: "Block Striped Draped",
        discount: false,
        discountOff: 0,
        id: "z3aN9RdjTQq1CX2epgpx",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover10-1588705843382.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img10-1588705828089.jpg",
        newPrice: 200,
        newProduct: false,
        offer: false,
        oldPrice: 210,
        onSale: false,
        title: "Block Striped Draped",
        type: "T-Shirt"
    },
    {
        description: "Hand Sanitizer",
        discount: false,
        discountOff: 0,
        id: "IWXJ94Pf7PYNfZPLjBVI",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216087881.jpg",
        newPrice: 20,
        newProduct: false,
        offer: true,
        oldPrice: 25,
        onSale: true,
        title: "Hand Sanitizer",
        type: "medical"
    },
    {
        description: "Medical Mask",
        discount: false,
        discountOff: 0,
        id: "UrbIhOj8PeNJDScvussb",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-1-1589215961316.jpg",
        imageUrl: "https://demaxin.s3.amazonaws.com/cd19-1-1589215924614.jpg",
        newPrice: 18,
        newProduct: true,
        offer: true,
        oldPrice: 20,
        onSale: false,
        title: "Medical Mask",
        type: "medical"
    },
    {
        description: "Medical Gloves",
        discount: true,
        discountOff: 20,
        id: "ZwD17rghwHtTz5H1ABdG",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-3-1589216157268.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-3-1589216152026.jpg",
        newPrice: 25,
        newProduct: false,
        offer: false,
        oldPrice: 25,
        onSale: false,
        title: "Medical Gloves",
        type: "medical",
    },
    {
        description: "Safety Goggles",
        discount: false,
        discountOff: 0,
        id: "b02Vwq152vZqWYtUY7nU",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-4-1589216252432.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-4-1589216248208.jpg",
        newPrice: 30,
        newProduct: false,
        offer: false,
        oldPrice: 30,
        onSale: false,
        title: "Safety Goggles",
        type: "medical",
    },
    {
        description: "Drugs",
        discount: false,
        discountOff: 0,
        id: "bhgvxC7OJC1ZeYnhjKRS",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-5-1589216324757.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-5-1589216332060.jpg",
        newPrice: 32,
        newProduct: false,
        offer: false,
        oldPrice: 32,
        onSale: false,
        title: "Drugs",
        type: "medical",
    },
    {
        description: "Vaccine",
        discount: false,
        discountOff: 0,
        id: "wviQsVaMI9WFX3JXvjfT",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-6-1589216386588.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-6-1589216382981.jpg",
        newPrice: 32,
        newProduct: false,
        offer: false,
        oldPrice: 32,
        onSale: false,
        title: "Vaccine",
        type: "medical",
    }
]
const Product = ({product}) => {
    console.log(product)
    return (
        <React.Fragment>
            <TopHeader />
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

Product.getInitialProps = async ({ query: {id} }) => {
    // console.log(id)
    // const db = firebase.firestore();
    // let response = await db.collection("products").doc(id).get();
    // console.log(response.data())
   
    return {
        product: data
    }
}

export default Product;